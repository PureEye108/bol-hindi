// Spoken Hindi Interactive Learning Application
// Features: Dual Audio Playback (Native WAV + Web Speech hi-IN), Speech Recognition Pronunciation Checker, Quiz & Flashcards

class HindiLearningApp {
    constructor() {
        this.data = HINDI_DATA;
        this.currentCategory = 'all';
        this.searchTerm = '';
        this.playbackSpeed = 1.0;
        this.currentView = 'phrases'; // 'phrases' | 'quiz' | 'alphabet'
        this.selectedVoice = null;
        this.recognition = null;
        this.isRecording = false;
        this.activeCardId = null;
        this.userProgress = this.loadProgress();

        // Quiz State
        this.quizState = {
            currentIndex: 0,
            score: 0,
            total: 10,
            questions: [],
            mode: 'listen' // 'listen' | 'speak'
        };

        this.init();
    }

    init() {
        this.initVoices();
        this.initSpeechRecognition();
        this.renderCategoryPills();
        this.renderPhrases();
        this.renderAlphabet();
        this.updateStatsDisplay();
        this.setupEventListeners();
    }

    // --- Audio Synthesis (TTS) & Native Playback ---
    initVoices() {
        if ('speechSynthesis' in window) {
            const populateVoices = () => {
                const voices = window.speechSynthesis.getVoices();
                // Find Hindi voices
                const hindiVoices = voices.filter(v => v.lang.startsWith('hi') || v.name.toLowerCase().includes('hindi'));
                if (hindiVoices.length > 0) {
                    this.selectedVoice = hindiVoices[0];
                }

                // Populate voice dropdown in UI if present
                const voiceSelect = document.getElementById('voiceSelect');
                if (voiceSelect) {
                    voiceSelect.innerHTML = '';
                    const allTargetVoices = [...hindiVoices, ...voices.filter(v => !hindiVoices.includes(v) && v.lang.startsWith('en'))];
                    allTargetVoices.forEach(v => {
                        const opt = document.createElement('option');
                        opt.value = v.name;
                        opt.textContent = `${v.name} (${v.lang})`;
                        if (this.selectedVoice && v.name === this.selectedVoice.name) opt.selected = true;
                        voiceSelect.appendChild(opt);
                    });

                    voiceSelect.addEventListener('change', (e) => {
                        const chosen = voices.find(v => v.name === e.target.value);
                        if (chosen) this.selectedVoice = chosen;
                    });
                }
            };

            populateVoices();
            if (speechSynthesis.onvoiceschanged !== undefined) {
                speechSynthesis.onvoiceschanged = populateVoices;
            }
        }
    }

    playPhraseAudio(phraseId, forceTTS = false) {
        const phrase = this.data.phrases.find(p => p.id === phraseId);
        if (!phrase) return;

        // If high quality native WAV is present and not forced TTS
        if (phrase.audioFile && !forceTTS) {
            const audio = new Audio(phrase.audioFile);
            audio.playbackRate = this.playbackSpeed;
            audio.play().catch(e => {
                console.warn("WAV play failed, falling back to TTS:", e);
                this.speakTTS(phrase.devanagari);
            });
            this.highlightPlayingCard(phraseId);
            return;
        }

        // Web Speech API Hindi TTS
        this.speakTTS(phrase.devanagari);
        this.highlightPlayingCard(phraseId);
    }

    speakTTS(text) {
        if (!('speechSynthesis' in window)) {
            alert("Speech synthesis is not supported in this browser. Please use Google Chrome or Edge.");
            return;
        }

        window.speechSynthesis.cancel(); // Stop active speaking
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'hi-IN';
        utterance.rate = this.playbackSpeed;
        if (this.selectedVoice) {
            utterance.voice = this.selectedVoice;
        }

        window.speechSynthesis.speak(utterance);
    }

    highlightPlayingCard(phraseId) {
        const card = document.getElementById(`card-${phraseId}`);
        if (card) {
            card.classList.add('playing-border');
            setTimeout(() => card.classList.remove('playing-border'), 1500);
        }
    }

    // --- Speech Recognition / Pronunciation Evaluator ---
    initSpeechRecognition() {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            this.recognition = new SpeechRecognition();
            this.recognition.continuous = false;
            this.recognition.interimResults = false;
            this.recognition.lang = 'hi-IN'; // Listen for Hindi pronunciation

            this.recognition.onstart = () => {
                this.isRecording = true;
                this.updateMicUI(true);
            };

            this.recognition.onresult = (event) => {
                const spokenText = event.results[0][0].transcript;
                const confidence = event.results[0][0].confidence;
                this.evaluatePronunciation(this.activeCardId, spokenText, confidence);
            };

            this.recognition.onerror = (event) => {
                console.warn("Speech Recognition Error:", event.error);
                this.isRecording = false;
                this.updateMicUI(false);
                this.showEvaluationResult(this.activeCardId, {
                    score: 0,
                    status: 'error',
                    message: `Microphone issue (${event.error}). Ensure permissions are granted.`
                });
            };

            this.recognition.onend = () => {
                this.isRecording = false;
                this.updateMicUI(false);
            };
        } else {
            console.warn("Web Speech Recognition API is not supported in this browser.");
        }
    }

    startChecking(phraseId) {
        if (!this.recognition) {
            alert("Speech Recognition is supported on Chrome, Edge, and Android browsers. Please ensure your browser supports Web Speech API and has microphone permission granted.");
            return;
        }

        if (this.isRecording) {
            this.recognition.stop();
            return;
        }

        this.activeCardId = phraseId;
        try {
            this.recognition.start();
        } catch (e) {
            console.error("Could not start recognition:", e);
        }
    }

    updateMicUI(recording) {
        if (!this.activeCardId) return;
        const btn = document.getElementById(`mic-btn-${this.activeCardId}`);
        if (btn) {
            if (recording) {
                btn.innerHTML = `<span class="animate-pulse text-red-500 font-bold">🎙️ Listening... Speak now!</span>`;
                btn.classList.add('bg-red-50', 'border-red-400');
            } else {
                btn.innerHTML = `<span>🎙️ Speak to Check</span>`;
                btn.classList.remove('bg-red-50', 'border-red-400');
            }
        }
    }

    evaluatePronunciation(phraseId, spokenText, confidence) {
        const phrase = this.data.phrases.find(p => p.id === phraseId);
        if (!phrase) return;

        // Clean texts for comparison
        const cleanTarget = this.cleanHindiText(phrase.devanagari);
        const cleanSpoken = this.cleanHindiText(spokenText);

        // Similarity calculation
        const score = this.calculateSimilarity(cleanTarget, cleanSpoken);

        // Provide audio chime feedback
        this.playFeedbackTone(score >= 70);

        // Record progress
        if (score >= 70) {
            this.markMastered(phraseId);
        }

        this.showEvaluationResult(phraseId, {
            score: Math.round(score),
            spoken: spokenText,
            target: phrase.devanagari,
            latin: phrase.latin,
            confidence: Math.round(confidence * 100)
        });
    }

    cleanHindiText(str) {
        if (!str) return '';
        // remove punctuation, spaces, question marks, danda
        return str.replace(/[|.,?!;:"'()।]/g, '').trim().toLowerCase();
    }

    calculateSimilarity(s1, s2) {
        if (s1 === s2) return 100;
        if (!s1 || !s2) return 0;

        // Levenshtein distance
        const m = s1.length;
        const n = s2.length;
        const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

        for (let i = 0; i <= m; i++) dp[i][0] = i;
        for (let j = 0; j <= n; j++) dp[0][j] = j;

        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                if (s1[i - 1] === s2[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1];
                } else {
                    dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
                }
            }
        }

        const distance = dp[m][n];
        const maxLen = Math.max(m, n);
        const ratio = (maxLen - distance) / maxLen;
        return Math.max(0, Math.min(100, ratio * 100));
    }

    playFeedbackTone(success) {
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);

            if (success) {
                // Happy chord
                osc.type = 'sine';
                osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
                osc.frequency.setValueAtTime(880, ctx.currentTime + 0.1); // A5
                gain.gain.setValueAtTime(0.15, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
                osc.start();
                osc.stop(ctx.currentTime + 0.4);
            } else {
                // Gentle try again low tone
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(220, ctx.currentTime);
                gain.gain.setValueAtTime(0.12, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
                osc.start();
                osc.stop(ctx.currentTime + 0.3);
            }
        } catch (e) {
            // Audio context not allowed or failed
        }
    }

    showEvaluationResult(phraseId, result) {
        const resultContainer = document.getElementById(`eval-result-${phraseId}`);
        if (!resultContainer) return;

        resultContainer.classList.remove('hidden');

        if (result.status === 'error') {
            resultContainer.innerHTML = `
                <div class="p-3 bg-red-50 text-red-700 rounded-lg text-sm border border-red-200">
                    ⚠️ ${result.message}
                </div>
            `;
            return;
        }

        let badgeColor = 'bg-red-100 text-red-800 border-red-300';
        let feedbackText = 'Keep practicing! Try listening closely and speaking again.';
        let icon = '🔄';

        if (result.score >= 85) {
            badgeColor = 'bg-emerald-100 text-emerald-800 border-emerald-300';
            feedbackText = 'Shabaash! (Wonderful!) Excellent pronunciation!';
            icon = '🎯';
        } else if (result.score >= 60) {
            badgeColor = 'bg-amber-100 text-amber-800 border-amber-300';
            feedbackText = 'Very close! Good effort, repeat once more.';
            icon = '👍';
        }

        resultContainer.innerHTML = `
            <div class="mt-3 p-3.5 rounded-xl border ${badgeColor} transition-all">
                <div class="flex items-center justify-between mb-1.5">
                    <span class="font-bold flex items-center gap-1.5 text-base">
                        <span>${icon}</span> Match Score: ${result.score}%
                    </span>
                    <span class="text-xs font-semibold px-2 py-0.5 rounded-full bg-white bg-opacity-70 border">
                        ${result.score >= 70 ? 'Passed' : 'Needs Practice'}
                    </span>
                </div>
                <div class="text-xs space-y-1 mb-2">
                    <div><strong>Machine heard:</strong> "${result.spoken}"</div>
                    <div><strong>Target:</strong> "${result.target}" (${result.latin})</div>
                </div>
                <p class="text-xs italic">${feedbackText}</p>
            </div>
        `;
    }

    // --- Progress Management ---
    loadProgress() {
        try {
            const saved = localStorage.getItem('hindi_learner_progress');
            return saved ? JSON.parse(saved) : { mastered: [], streak: 1, lastDate: new Date().toDateString() };
        } catch (e) {
            return { mastered: [], streak: 1, lastDate: new Date().toDateString() };
        }
    }

    saveProgress() {
        try {
            localStorage.setItem('hindi_learner_progress', JSON.stringify(this.userProgress));
            this.updateStatsDisplay();
        } catch (e) { }
    }

    markMastered(phraseId) {
        if (!this.userProgress.mastered.includes(phraseId)) {
            this.userProgress.mastered.push(phraseId);
            this.saveProgress();
            this.renderPhrases(); // Refresh checkmarks
        }
    }

    updateStatsDisplay() {
        const masteredCountEl = document.getElementById('stat-mastered-count');
        const totalPhrasesEl = document.getElementById('stat-total-count');
        const percentEl = document.getElementById('stat-percent');

        if (masteredCountEl) masteredCountEl.textContent = this.userProgress.mastered.length;
        if (totalPhrasesEl) totalPhrasesEl.textContent = this.data.phrases.length;
        if (percentEl) {
            const percent = Math.round((this.userProgress.mastered.length / this.data.phrases.length) * 100);
            percentEl.textContent = `${percent}%`;
            const bar = document.getElementById('progress-bar-fill');
            if (bar) bar.style.width = `${percent}%`;
        }
    }

    // --- Rendering Functions ---
    renderCategoryPills() {
        const container = document.getElementById('category-pills');
        if (!container) return;

        container.innerHTML = '';
        this.data.categories.forEach(cat => {
            const count = cat.id === 'all'
                ? this.data.phrases.length
                : this.data.phrases.filter(p => p.category === cat.id).length;

            const btn = document.createElement('button');
            btn.className = `px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap flex items-center gap-2 border ${
                this.currentCategory === cat.id
                    ? 'bg-amber-600 text-white border-amber-600 shadow-md shadow-amber-600/20'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`;
            btn.innerHTML = `<span>${cat.icon}</span> <span>${cat.name}</span> <span class="text-xs px-1.5 py-0.5 rounded-full ${this.currentCategory === cat.id ? 'bg-amber-700 text-white' : 'bg-slate-100 text-slate-500'}">${count}</span>`;
            btn.addEventListener('click', () => {
                this.currentCategory = cat.id;
                this.renderCategoryPills();
                this.renderPhrases();
            });
            container.appendChild(btn);
        });
    }

    renderPhrases() {
        const container = document.getElementById('phrases-grid');
        if (!container) return;

        const filtered = this.data.phrases.filter(p => {
            const matchesCat = this.currentCategory === 'all' || p.category === this.currentCategory;
            const term = this.searchTerm.toLowerCase();
            const matchesSearch = !term ||
                p.devanagari.includes(term) ||
                p.latin.toLowerCase().includes(term) ||
                p.english.toLowerCase().includes(term) ||
                (p.phonetic && p.phonetic.toLowerCase().includes(term));
            return matchesCat && matchesSearch;
        });

        if (filtered.length === 0) {
            container.innerHTML = `
                <div class="col-span-full py-16 text-center text-slate-400">
                    <div class="text-4xl mb-2">🔍</div>
                    <p class="font-medium text-slate-600">No phrases found matching "${this.searchTerm}"</p>
                    <p class="text-xs text-slate-400 mt-1">Try another search term or clear filters</p>
                </div>
            `;
            return;
        }

        container.innerHTML = filtered.map(p => {
            const isMastered = this.userProgress.mastered.includes(p.id);
            const hasRecordedWav = Boolean(p.audioFile);

            return `
                <div id="card-${p.id}" class="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative group">
                    ${isMastered ? `
                        <div class="absolute top-4 right-4 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs px-2.5 py-1 rounded-full font-semibold flex items-center gap-1">
                            <span>✓</span> Mastered
                        </div>
                    ` : ''}

                    <div>
                        <!-- Devanagari Script -->
                        <div class="text-3xl font-extrabold text-slate-900 tracking-wide font-hindi mt-1 mb-2">
                            ${p.devanagari}
                        </div>

                        <!-- Latin Transliteration (Hinglish) -->
                        <div class="text-lg font-bold text-amber-700 tracking-wide flex items-center gap-2">
                            <span>${p.latin}</span>
                            ${hasRecordedWav ? '<span class="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-blue-50 text-blue-600 border border-blue-200">Native Audio</span>' : ''}
                        </div>

                        <!-- Phonetic Pronunciation Guide -->
                        <div class="text-xs font-mono text-slate-500 mt-0.5 flex items-center gap-1">
                            <span class="text-slate-400">say:</span> <span class="bg-slate-100 px-2 py-0.5 rounded text-slate-700">${p.phonetic || p.latin}</span>
                        </div>

                        <!-- English Meaning -->
                        <div class="mt-3 text-slate-800 font-medium text-base border-t border-slate-100 pt-2.5">
                            ${p.english}
                        </div>

                        <!-- Context & Cultural Note -->
                        ${p.notes ? `
                            <p class="text-xs text-slate-500 mt-1.5 leading-relaxed bg-amber-50/50 p-2 rounded-lg border border-amber-100/60">
                                💡 ${p.notes}
                            </p>
                        ` : ''}
                    </div>

                    <!-- Pronunciation & Audio Action Buttons -->
                    <div class="mt-4 pt-3 border-t border-slate-100 flex flex-col gap-2">
                        <div class="flex items-center gap-2">
                            <button onclick="app.playPhraseAudio('${p.id}')" class="flex-1 bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-3 rounded-xl text-sm flex items-center justify-center gap-1.5 transition-colors shadow-sm">
                                <span>🔊</span> Listen
                            </button>
                            <button onclick="app.playPhraseAudio('${p.id}', true)" title="Listen Slow TTS" class="bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-2 px-2.5 rounded-xl text-xs flex items-center justify-center transition-colors">
                                🐢 Slow
                            </button>
                        </div>

                        <!-- Speak to Check Button -->
                        <button id="mic-btn-${p.id}" onclick="app.startChecking('${p.id}')" class="w-full bg-slate-50 hover:bg-slate-100 text-slate-800 font-medium py-2 px-3 rounded-xl text-sm border border-slate-200 flex items-center justify-center gap-1.5 transition-all">
                            <span>🎙️ Speak to Check</span>
                        </button>

                        <!-- Evaluation Feedback Container -->
                        <div id="eval-result-${p.id}" class="hidden"></div>
                    </div>
                </div>
            `;
        }).join('');
    }

    renderAlphabet() {
        const vowelsContainer = document.getElementById('alphabet-vowels');
        const consonantsContainer = document.getElementById('alphabet-consonants');

        if (vowelsContainer) {
            vowelsContainer.innerHTML = this.data.alphabet.vowels.map(v => `
                <div onclick="app.speakTTS('${v.devanagari}')" class="bg-white p-3 rounded-xl border border-slate-200 text-center hover:border-amber-400 hover:shadow-sm cursor-pointer transition-all">
                    <div class="text-2xl font-bold font-hindi text-slate-900">${v.devanagari}</div>
                    <div class="text-sm font-semibold text-amber-700">${v.latin}</div>
                    <div class="text-[11px] text-slate-500 font-mono mt-0.5">${v.phonetic}</div>
                    <div class="text-[11px] text-slate-400 mt-1 truncate">${v.example}</div>
                </div>
            `).join('');
        }

        if (consonantsContainer) {
            consonantsContainer.innerHTML = this.data.alphabet.consonants.map(c => `
                <div onclick="app.speakTTS('${c.devanagari}')" class="bg-white p-3 rounded-xl border border-slate-200 text-center hover:border-amber-400 hover:shadow-sm cursor-pointer transition-all">
                    <div class="text-2xl font-bold font-hindi text-slate-900">${c.devanagari}</div>
                    <div class="text-sm font-semibold text-amber-700">${c.latin}</div>
                    <div class="text-[11px] text-slate-500 font-mono mt-0.5">${c.phonetic}</div>
                    <div class="text-[11px] text-slate-400 mt-1 truncate">${c.example}</div>
                </div>
            `).join('');
        }
    }

    // --- Quiz & Practice Mode ---
    startQuiz(mode = 'listen') {
        this.quizState.mode = mode;
        this.quizState.score = 0;
        this.quizState.currentIndex = 0;

        // Shuffle phrases and pick 10
        const shuffled = [...this.data.phrases].sort(() => 0.5 - Math.random());
        this.quizState.questions = shuffled.slice(0, 10).map(target => {
            // Generate 3 wrong options
            const distractors = this.data.phrases
                .filter(p => p.id !== target.id)
                .sort(() => 0.5 - Math.random())
                .slice(0, 3);
            const options = [...distractors, target].sort(() => 0.5 - Math.random());
            return { target, options };
        });

        this.renderQuizQuestion();
    }

    renderQuizQuestion() {
        const quizCard = document.getElementById('quiz-card-content');
        if (!quizCard) return;

        const { currentIndex, questions, score } = this.quizState;

        if (currentIndex >= questions.length) {
            quizCard.innerHTML = `
                <div class="text-center py-8">
                    <div class="text-5xl mb-3">🏆</div>
                    <h3 class="text-2xl font-extrabold text-slate-900">Quiz Completed!</h3>
                    <p class="text-slate-600 mt-2">You scored <strong class="text-amber-600 text-xl">${score} / ${questions.length}</strong> (${Math.round((score / questions.length) * 100)}%)</p>
                    <div class="mt-6 flex justify-center gap-3">
                        <button onclick="app.startQuiz('listen')" class="bg-amber-600 hover:bg-amber-700 text-white font-medium px-5 py-2.5 rounded-xl shadow">
                            Play Again
                        </button>
                    </div>
                </div>
            `;
            return;
        }

        const q = questions[currentIndex];

        quizCard.innerHTML = `
            <div class="mb-4 flex items-center justify-between text-xs text-slate-500 font-semibold uppercase tracking-wider">
                <span>Question ${currentIndex + 1} of ${questions.length}</span>
                <span>Current Score: ${score}</span>
            </div>

            <div class="text-center p-6 bg-amber-50/60 border border-amber-100 rounded-2xl mb-6">
                <p class="text-sm text-slate-500 mb-2">Listen to the spoken Hindi phrase:</p>
                <button onclick="app.playPhraseAudio('${q.target.id}')" class="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-xl font-bold text-base shadow-md transition-transform active:scale-95">
                    <span>🔊</span> Play Audio
                </button>
                <div class="mt-3 text-xs text-slate-500">
                    Hint: <span class="font-hindi text-base text-slate-700 font-bold">${q.target.devanagari}</span> (${q.target.latin})
                </div>
            </div>

            <p class="text-sm font-semibold text-slate-700 mb-3">Select the correct English meaning:</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3" id="quiz-options">
                ${q.options.map((opt, i) => `
                    <button onclick="app.handleQuizAnswer('${opt.id}', '${q.target.id}', this)" class="p-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-left font-medium text-slate-800 transition-all flex items-center justify-between">
                        <span>${opt.english}</span>
                        <span class="text-slate-300 text-xs font-mono">${String.fromCharCode(65 + i)}</span>
                    </button>
                `).join('')}
            </div>
        `;

        // Automatically play the audio once at the start of question
        setTimeout(() => this.playPhraseAudio(q.target.id), 300);
    }

    handleQuizAnswer(selectedId, targetId, btnEl) {
        const isCorrect = selectedId === targetId;
        const buttons = document.querySelectorAll('#quiz-options button');
        buttons.forEach(b => b.disabled = true);

        if (isCorrect) {
            btnEl.classList.remove('bg-white', 'border-slate-200');
            btnEl.classList.add('bg-emerald-50', 'border-emerald-500', 'text-emerald-800');
            this.quizState.score++;
            this.playFeedbackTone(true);
            this.markMastered(targetId);
        } else {
            btnEl.classList.remove('bg-white', 'border-slate-200');
            btnEl.classList.add('bg-red-50', 'border-red-400', 'text-red-800');
            this.playFeedbackTone(false);
            // Highlight correct one
            buttons.forEach(b => {
                if (b.innerText.includes(this.data.phrases.find(p => p.id === targetId).english)) {
                    b.classList.add('bg-emerald-50', 'border-emerald-400', 'text-emerald-800');
                }
            });
        }

        setTimeout(() => {
            this.quizState.currentIndex++;
            this.renderQuizQuestion();
        }, 1200);
    }

    // --- View Switching & Listeners ---
    switchView(viewName) {
        this.currentView = viewName;
        document.querySelectorAll('.tab-view').forEach(el => el.classList.add('hidden'));
        document.getElementById(`view-${viewName}`).classList.remove('hidden');

        document.querySelectorAll('.nav-tab').forEach(btn => {
            btn.classList.remove('text-amber-600', 'border-b-2', 'border-amber-600', 'font-bold');
            btn.classList.add('text-slate-500');
        });
        const activeTab = document.getElementById(`tab-btn-${viewName}`);
        if (activeTab) {
            activeTab.classList.add('text-amber-600', 'border-b-2', 'border-amber-600', 'font-bold');
            activeTab.classList.remove('text-slate-500');
        }

        if (viewName === 'quiz') {
            this.startQuiz();
        }
    }

    setupEventListeners() {
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.searchTerm = e.target.value;
                this.renderPhrases();
            });
        }

        const speedSelect = document.getElementById('speedSelect');
        if (speedSelect) {
            speedSelect.addEventListener('change', (e) => {
                this.playbackSpeed = parseFloat(e.target.value);
            });
        }
    }
}

// Global instance
let app;
window.addEventListener('DOMContentLoaded', () => {
    app = new HindiLearningApp();
});
