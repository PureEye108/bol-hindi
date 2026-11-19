// Spoken Hindi Interactive Learning Application
// Features: Auto-Detect Browser Language, Multi-Language Learning (English, Tiếng Việt, Español, Français, 日本語, Русский),
// 90-Day Step-by-Step Curriculum Course, Bulletproof Audio Playback, Speech Recognition, Dialogue Lab, About & Contact Modal

class HindiLearningApp {
    constructor() {
        this.data = HINDI_DATA;
        this.courseData = typeof HINDI_COURSE !== 'undefined' ? HINDI_COURSE : null;
        this.i18n = typeof I18N !== 'undefined' ? I18N : null;

        // Auto-detect browser default language if no preference saved
        const savedLang = localStorage.getItem('hindi_learner_lang');
        this.currentLanguage = savedLang ? savedLang : (this.i18n ? this.i18n.detectBrowserLanguage() : 'en');

        this.currentCategory = 'all';
        this.currentConversationId = 'conv-chai';
        this.currentCourseMonth = 1;
        this.selectedDayNumber = 1;
        this.searchTerm = '';
        this.playbackSpeed = 1.0;
        this.currentView = 'course'; // Default to Course tab
        this.selectedVoice = null;
        this.recognition = null;
        this.isRecording = false;
        this.activeCardId = null;
        this.currentAudio = null;
        this.isAutoplaying = false;
        this.userProgress = this.loadProgress();

        // Quiz State
        this.quizState = {
            currentIndex: 0,
            score: 0,
            total: 10,
            questions: [],
            mode: 'listen'
        };

        this.init();
    }

    init() {
        this.initLanguageSelector();
        this.applyLanguageUI();
        this.initVoices();
        this.initSpeechRecognition();
        this.renderCategoryPills();
        this.renderPhrases();
        this.renderAlphabet();
        this.renderConversations();
        this.renderCourse();
        this.updateStatsDisplay();
        this.setupEventListeners();
    }

    // --- MULTI-LANGUAGE LOCALIZATION (I18N) ---
    initLanguageSelector() {
        const langSelect = document.getElementById('learnLanguageSelect');
        if (!langSelect || !this.i18n) return;

        langSelect.innerHTML = this.i18n.languages.map(l => `
            <option value="${l.code}" ${this.currentLanguage === l.code ? 'selected' : ''}>
                ${l.flag} ${l.name}
            </option>
        `).join('');

        langSelect.addEventListener('change', (e) => {
            this.setLanguage(e.target.value);
        });
    }

    setLanguage(langCode) {
        this.currentLanguage = langCode;
        localStorage.setItem('hindi_learner_lang', langCode);
        this.applyLanguageUI();
        this.renderCategoryPills();
        this.renderPhrases();
        this.renderConversations();
        this.renderCourse();
        if (this.currentView === 'quiz') this.startQuiz();
        this.showToast(`🌐 Switched language to ${this.i18n.languages.find(l=>l.code===langCode)?.name || langCode}!`);
    }

    applyLanguageUI() {
        if (!this.i18n) return;
        const t = (k) => this.i18n.t(k);

        // Update Nav Tabs
        const tabCourse = document.getElementById('tab-btn-course');
        if (tabCourse) tabCourse.innerHTML = `<span>🎓</span> ${t('tabCourse')}`;

        const tabPhrases = document.getElementById('tab-btn-phrases');
        if (tabPhrases) tabPhrases.innerHTML = `<span>📖</span> ${t('tabPhrases')}`;

        const tabConv = document.getElementById('tab-btn-conversations');
        if (tabConv) tabConv.innerHTML = `<span>🗣️</span> ${t('tabConversations')}`;

        const tabQuiz = document.getElementById('tab-btn-quiz');
        if (tabQuiz) tabQuiz.innerHTML = `<span>🎯</span> ${t('tabQuiz')}`;

        const tabAlphabet = document.getElementById('tab-btn-alphabet');
        if (tabAlphabet) tabAlphabet.innerHTML = `<span>🔤</span> ${t('tabAlphabet')}`;

        // Top UI buttons & labels
        const btnAbout = document.getElementById('btn-about');
        if (btnAbout) btnAbout.innerHTML = `<span>ℹ️</span> ${t('aboutBtn')}`;

        const lblTestSound = document.getElementById('btn-test-sound');
        if (lblTestSound) lblTestSound.innerHTML = `<span>🔊</span> ${t('testSound')}`;

        const searchInput = document.getElementById('search-input');
        if (searchInput) searchInput.placeholder = t('searchPlaceholder');

        // Update About Modal Content
        const modalTitle = document.getElementById('about-modal-title');
        if (modalTitle) modalTitle.textContent = t('aboutModalTitle');

        const modalDesc = document.getElementById('about-modal-desc');
        if (modalDesc) modalDesc.textContent = t('aboutDesc');

        const modalContact = document.getElementById('about-modal-contact');
        if (modalContact) modalContact.textContent = t('aboutContactText');

        const btnDropEmail = document.getElementById('btn-drop-email');
        if (btnDropEmail) btnDropEmail.textContent = t('dropEmailBtn');

        const btnViewGitHub = document.getElementById('btn-view-github');
        if (btnViewGitHub) btnViewGitHub.textContent = t('viewGitHubBtn');

        const btnCloseModal = document.getElementById('btn-close-about-modal');
        if (btnCloseModal) btnCloseModal.textContent = t('closeBtn');
    }

    getPhraseMeaning(phrase) {
        if (!phrase) return '';
        if (this.i18n) {
            return this.i18n.getMeaning(phrase.id, phrase.english);
        }
        return phrase.english;
    }

    // --- ABOUT & CONTACT MODAL ---
    openAboutModal() {
        const modal = document.getElementById('about-modal');
        if (modal) {
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }
    }

    closeAboutModal() {
        const modal = document.getElementById('about-modal');
        if (modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }
    }

    // --- BULLETPROOF AUDIO PLAYBACK ---
    initVoices() {
        if ('speechSynthesis' in window) {
            const populateVoices = () => {
                const voices = window.speechSynthesis.getVoices();
                const hindiVoices = voices.filter(v => 
                    v.lang.startsWith('hi') || 
                    v.lang.includes('IN') || 
                    v.name.toLowerCase().includes('hindi')
                );
                if (hindiVoices.length > 0) {
                    this.selectedVoice = hindiVoices[0];
                }

                const voiceSelect = document.getElementById('voiceSelect');
                if (voiceSelect) {
                    voiceSelect.innerHTML = '<option value="cloud">Google Native Audio (Recommended)</option>';
                    voices.forEach(v => {
                        const opt = document.createElement('option');
                        opt.value = v.name;
                        opt.textContent = `${v.name} (${v.lang})`;
                        voiceSelect.appendChild(opt);
                    });

                    voiceSelect.addEventListener('change', (e) => {
                        if (e.target.value === 'cloud') {
                            this.selectedVoice = null;
                        } else {
                            this.selectedVoice = voices.find(v => v.name === e.target.value) || null;
                        }
                    });
                }
            };

            populateVoices();
            if (speechSynthesis.onvoiceschanged !== undefined) {
                speechSynthesis.onvoiceschanged = populateVoices;
            }
        }
    }

    playAudio(text, audioFile = null, phoneticFallback = '') {
        if (!text && !audioFile) return;
        this.stopCurrentAudio();

        if (audioFile) {
            const audio = new Audio(audioFile);
            audio.playbackRate = this.playbackSpeed;
            this.currentAudio = audio;
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    this.playGoogleTTSStream(text, phoneticFallback);
                });
                return;
            }
        }

        this.playGoogleTTSStream(text, phoneticFallback);
    }

    playGoogleTTSStream(text, phoneticFallback = '') {
        try {
            const clean = text.replace(/[?|।!]/g, '').trim();
            const encoded = encodeURIComponent(clean);
            const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=hi&client=tw-ob&q=${encoded}`;
            
            const audio = new Audio(url);
            audio.playbackRate = this.playbackSpeed;
            this.currentAudio = audio;

            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.catch((err) => {
                    console.warn("Cloud audio fallback to Web Speech:", err);
                    this.speakWebSpeech(text, phoneticFallback);
                });
            }
        } catch (e) {
            this.speakWebSpeech(text, phoneticFallback);
        }
    }

    speakWebSpeech(text, phoneticFallback = '') {
        if (!('speechSynthesis' in window)) return;
        window.speechSynthesis.cancel();
        window.speechSynthesis.resume();

        const voices = window.speechSynthesis.getVoices();
        const hasHindiVoice = voices.some(v => v.lang.startsWith('hi') || v.name.toLowerCase().includes('hindi'));

        const textToSpeak = hasHindiVoice ? text : (phoneticFallback || text);
        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        
        utterance.lang = hasHindiVoice ? 'hi-IN' : 'en-US';
        utterance.rate = this.playbackSpeed;
        if (this.selectedVoice) {
            utterance.voice = this.selectedVoice;
        }

        window.speechSynthesis.speak(utterance);
    }

    stopCurrentAudio() {
        if (this.currentAudio) {
            try {
                this.currentAudio.pause();
                this.currentAudio.currentTime = 0;
            } catch (e) {}
            this.currentAudio = null;
        }
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
        }
    }

    testAudio() {
        this.playAudio("नमस्ते, आपका स्वागत है", null, "Namaste, aapka swagat hai");
        this.showToast("🔊 Playing test sound: 'Namaste, aapka swagat hai'!");
    }

    showToast(message) {
        let toast = document.getElementById('audio-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'audio-toast';
            toast.className = 'fixed bottom-5 right-5 bg-slate-900 text-white px-4 py-2.5 rounded-xl shadow-xl text-xs z-50 transition-all font-medium border border-slate-700 flex items-center gap-2';
            document.body.appendChild(toast);
        }
        toast.innerHTML = message;
        toast.style.opacity = '1';
        setTimeout(() => {
            toast.style.opacity = '0';
        }, 2800);
    }

    playPhraseAudio(phraseId, forceSlow = false) {
        const phrase = this.data.phrases.find(p => p.id === phraseId);
        if (!phrase) return;

        const originalSpeed = this.playbackSpeed;
        if (forceSlow) this.playbackSpeed = 0.7;

        this.playAudio(phrase.devanagari, phrase.audioFile, phrase.latin);
        this.highlightPlayingCard(phraseId);

        if (forceSlow) {
            setTimeout(() => { this.playbackSpeed = originalSpeed; }, 2000);
        }
    }

    highlightPlayingCard(phraseId) {
        const card = document.getElementById(`card-${phraseId}`);
        if (card) {
            card.classList.add('playing-border');
            setTimeout(() => card.classList.remove('playing-border'), 1500);
        }
    }

    // --- SPEECH RECOGNITION / PRONUNCIATION EVALUATOR ---
    initSpeechRecognition() {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            this.recognition = new SpeechRecognition();
            this.recognition.continuous = false;
            this.recognition.interimResults = false;
            this.recognition.lang = 'hi-IN';

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
                    message: `Microphone issue (${event.error}). Please allow microphone access.`
                });
            };

            this.recognition.onend = () => {
                this.isRecording = false;
                this.updateMicUI(false);
            };
        }
    }

    startChecking(phraseId, targetDevanagari = null, targetLatin = null) {
        if (!this.recognition) {
            alert("Speech Recognition requires Google Chrome, Edge, or an Android browser. Please ensure microphone access is permitted.");
            return;
        }

        if (this.isRecording) {
            this.recognition.stop();
            return;
        }

        this.activeCardId = phraseId;
        this.targetDevanagariCustom = targetDevanagari;
        this.targetLatinCustom = targetLatin;

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
        let targetHindi = '';
        let targetLatin = '';

        if (this.targetDevanagariCustom) {
            targetHindi = this.targetDevanagariCustom;
            targetLatin = this.targetLatinCustom || '';
        } else {
            const phrase = this.data.phrases.find(p => p.id === phraseId);
            if (!phrase) return;
            targetHindi = phrase.devanagari;
            targetLatin = phrase.latin;
        }

        const cleanTarget = this.cleanHindiText(targetHindi);
        const cleanSpoken = this.cleanHindiText(spokenText);

        const score = this.calculateSimilarity(cleanTarget, cleanSpoken);
        this.playFeedbackTone(score >= 60);

        if (score >= 60) {
            if (phraseId.startsWith('day-challenge-')) {
                const dayNum = parseInt(phraseId.replace('day-challenge-', ''));
                this.markDayCompleted(dayNum);
            } else if (!phraseId.startsWith('dialogue-')) {
                this.markMastered(phraseId);
            }
        }

        this.showEvaluationResult(phraseId, {
            score: Math.round(score),
            spoken: spokenText,
            target: targetHindi,
            latin: targetLatin
        });
    }

    cleanHindiText(str) {
        if (!str) return '';
        return str.replace(/[|.,?!;:"'()।\-]/g, '').trim().toLowerCase();
    }

    calculateSimilarity(s1, s2) {
        if (s1 === s2) return 100;
        if (!s1 || !s2) return 0;

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
                osc.type = 'sine';
                osc.frequency.setValueAtTime(587.33, ctx.currentTime);
                osc.frequency.setValueAtTime(880, ctx.currentTime + 0.1);
                gain.gain.setValueAtTime(0.15, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
                osc.start();
                osc.stop(ctx.currentTime + 0.4);
            } else {
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(220, ctx.currentTime);
                gain.gain.setValueAtTime(0.12, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
                osc.start();
                osc.stop(ctx.currentTime + 0.3);
            }
        } catch (e) {}
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

        if (result.score >= 80) {
            badgeColor = 'bg-emerald-100 text-emerald-800 border-emerald-300';
            feedbackText = 'Shabaash! (Wonderful!) Excellent pronunciation!';
            icon = '🎯';
        } else if (result.score >= 50) {
            badgeColor = 'bg-amber-100 text-amber-800 border-amber-300';
            feedbackText = 'Good effort! Pretty close, repeat once more.';
            icon = '👍';
        }

        resultContainer.innerHTML = `
            <div class="mt-3 p-3.5 rounded-xl border ${badgeColor} transition-all">
                <div class="flex items-center justify-between mb-1.5">
                    <span class="font-bold flex items-center gap-1.5 text-sm">
                        <span>${icon}</span> Match: ${result.score}%
                    </span>
                    <span class="text-xs font-semibold px-2 py-0.5 rounded-full bg-white bg-opacity-70 border">
                        ${result.score >= 60 ? 'Passed' : 'Needs Practice'}
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

    // --- PROGRESS MANAGEMENT ---
    loadProgress() {
        try {
            const saved = localStorage.getItem('hindi_learner_progress');
            return saved ? JSON.parse(saved) : { mastered: [], completedDays: [1], streak: 1 };
        } catch (e) {
            return { mastered: [], completedDays: [1], streak: 1 };
        }
    }

    saveProgress() {
        try {
            localStorage.setItem('hindi_learner_progress', JSON.stringify(this.userProgress));
            this.updateStatsDisplay();
        } catch (e) {}
    }

    markMastered(phraseId) {
        if (!this.userProgress.mastered.includes(phraseId)) {
            this.userProgress.mastered.push(phraseId);
            this.saveProgress();
            this.renderPhrases();
        }
    }

    markDayCompleted(dayNumber) {
        if (!this.userProgress.completedDays) {
            this.userProgress.completedDays = [];
        }
        if (!this.userProgress.completedDays.includes(dayNumber)) {
            this.userProgress.completedDays.push(dayNumber);
            this.saveProgress();
            this.renderCourse();
            this.showToast(`🎉 Day ${dayNumber} Completed! Keep going!`);
        }
    }

    updateStatsDisplay() {
        const completedDays = (this.userProgress.completedDays || []).length;
        const totalDays = (this.courseData && this.courseData.totalDays) || 90;
        const coursePercent = Math.round((completedDays / totalDays) * 100);

        const courseDaysEl = document.getElementById('stat-course-days');
        const coursePercentEl = document.getElementById('stat-course-percent');
        const courseBarFill = document.getElementById('course-bar-fill');

        if (courseDaysEl) courseDaysEl.textContent = completedDays;
        if (coursePercentEl) coursePercentEl.textContent = `${coursePercent}%`;
        if (courseBarFill) courseBarFill.style.width = `${coursePercent}%`;

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

    // --- 90-DAY COURSE ENGINE (3 MONTHS) ---
    renderCourse() {
        if (!this.courseData) return;
        const t = (k) => this.i18n ? this.i18n.t(k) : k;

        const monthsContainer = document.getElementById('course-month-tabs');
        const daysGrid = document.getElementById('course-days-grid');
        const activeLessonContainer = document.getElementById('course-active-lesson');
        if (!monthsContainer || !daysGrid || !activeLessonContainer) return;

        monthsContainer.innerHTML = this.courseData.months.map(m => `
            <button onclick="app.selectCourseMonth(${m.month})" class="p-3.5 rounded-2xl font-medium text-left transition-all border flex items-center justify-between ${
                this.currentCourseMonth === m.month
                    ? 'bg-amber-600 text-white border-amber-600 shadow-md'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }">
                <div class="flex items-center gap-2.5">
                    <span class="text-2xl">${m.icon}</span>
                    <div>
                        <div class="font-bold text-sm leading-tight">${m.title}</div>
                        <div class="text-[11px] opacity-85">${m.weeks}</div>
                    </div>
                </div>
            </button>
        `).join('');

        const filteredDays = this.courseData.days.filter(d => d.month === this.currentCourseMonth);

        daysGrid.innerHTML = filteredDays.map(d => {
            const isCompleted = (this.userProgress.completedDays || []).includes(d.day);
            const isSelected = this.selectedDayNumber === d.day;

            return `
                <div onclick="app.selectCourseDay(${d.day})" class="p-3 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                    isSelected
                        ? 'border-amber-500 bg-amber-50/70 shadow-sm ring-2 ring-amber-500/20'
                        : isCompleted
                            ? 'border-emerald-300 bg-emerald-50/40 hover:border-emerald-400'
                            : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                }">
                    <div class="flex items-center justify-between mb-1.5">
                        <span class="text-xs font-extrabold ${isSelected ? 'text-amber-700' : 'text-slate-500'}">Day ${d.day}</span>
                        ${isCompleted ? '<span class="text-emerald-600 text-xs font-bold">✓ Done</span>' : '<span class="text-[10px] text-slate-400">Week ' + d.week + '</span>'}
                    </div>
                    <div class="font-bold text-slate-900 text-xs leading-snug line-clamp-1">${d.title}</div>
                    <div class="text-[11px] font-hindi text-amber-700 font-semibold truncate mt-0.5">${d.hindiTitle}</div>
                </div>
            `;
        }).join('');

        const currentDayObj = this.courseData.days.find(d => d.day === this.selectedDayNumber) || this.courseData.days[0];
        const isDayDone = (this.userProgress.completedDays || []).includes(currentDayObj.day);

        activeLessonContainer.innerHTML = `
            <div class="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
                    <div>
                        <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600">
                            <span>Month ${currentDayObj.month} • Week ${currentDayObj.week}</span>
                            <span>•</span>
                            <span>Day ${currentDayObj.day} of 90</span>
                        </div>
                        <h2 class="text-2xl font-extrabold text-slate-900 mt-1">${currentDayObj.title}</h2>
                        <h3 class="text-lg font-bold font-hindi text-amber-700 mt-0.5">${currentDayObj.hindiTitle}</h3>
                    </div>

                    <div class="flex items-center gap-2">
                        <button onclick="app.selectCourseDay(${Math.max(1, currentDayObj.day - 1)})" class="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors">
                            ${t('prev')}
                        </button>
                        <button onclick="app.selectCourseDay(${Math.min(90, currentDayObj.day + 1)})" class="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors">
                            ${t('next')}
                        </button>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
                    <div class="bg-amber-50/60 p-4 rounded-xl border border-amber-100">
                        <div class="text-xs font-bold text-amber-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                            <span>🎯</span> ${t('objective')}
                        </div>
                        <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${currentDayObj.objective}</p>
                    </div>
                    <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                        <div class="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                            <span>💡</span> ${t('culturalTip')}
                        </div>
                        <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">${currentDayObj.tip}</p>
                    </div>
                </div>

                <div class="my-6">
                    <h4 class="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">${t('todaysPhrases')}</h4>
                    <div class="space-y-3">
                        ${currentDayObj.phrases.map((p, idx) => `
                            <div class="p-4 rounded-xl border border-slate-200 bg-slate-50/40 hover:bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-all">
                                <div>
                                    <div class="text-2xl font-bold font-hindi text-slate-900">${p.devanagari}</div>
                                    <div class="text-base font-semibold text-amber-700 mt-0.5">${p.latin}</div>
                                    <div class="text-xs font-mono text-slate-400 mt-0.5"><span class="text-slate-300">${t('say')}</span> ${p.phonetic}</div>
                                    <div class="text-sm font-medium text-slate-700 mt-1">${p.english}</div>
                                </div>
                                <button onclick="app.playAudio('${p.devanagari.replace(/'/g, "\\'")}', null, '${p.latin.replace(/'/g, "\\'")}')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm transition-transform active:scale-95 self-start sm:self-auto">
                                    <span>🔊</span> ${t('listen')}
                                </button>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="mt-6 p-5 rounded-2xl border ${isDayDone ? 'bg-emerald-50/50 border-emerald-200' : 'bg-orange-50/40 border-orange-200'}">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-xs font-bold uppercase tracking-wider ${isDayDone ? 'text-emerald-800' : 'text-orange-800'}">
                            🎙️ ${t('dailyChallenge')}
                        </span>
                        ${isDayDone ? '<span class="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">Day Mastered ✓</span>' : ''}
                    </div>
                    <p class="text-xs text-slate-600 mb-3">${currentDayObj.challenge.instruction}</p>

                    <div class="bg-white p-4 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                        <div>
                            <div class="text-xl font-bold font-hindi text-slate-900">${currentDayObj.challenge.devanagari}</div>
                            <div class="text-sm font-semibold text-amber-700">${currentDayObj.challenge.latin}</div>
                        </div>
                        <div class="flex items-center gap-2">
                            <button onclick="app.playAudio('${currentDayObj.challenge.devanagari.replace(/'/g, "\\'")}', null, '${currentDayObj.challenge.latin.replace(/'/g, "\\'")}')" class="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-bold flex items-center gap-1">
                                <span>🔊</span> ${t('listen')}
                            </button>
                            <button id="mic-btn-day-challenge-${currentDayObj.day}" onclick="app.startChecking('day-challenge-${currentDayObj.day}', '${currentDayObj.challenge.devanagari.replace(/'/g, "\\'")}', '${currentDayObj.challenge.latin.replace(/'/g, "\\'")}')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all">
                                <span>🎙️ ${t('speakToPass')}</span>
                            </button>
                        </div>
                    </div>

                    <div id="eval-result-day-challenge-${currentDayObj.day}" class="hidden"></div>

                    <div class="mt-4 pt-3 border-t border-slate-200/50 flex items-center justify-between">
                        <span class="text-xs text-slate-500">Practice completed for today?</span>
                        <button onclick="app.markDayCompleted(${currentDayObj.day})" class="px-4 py-2 ${isDayDone ? 'bg-emerald-600' : 'bg-slate-800 hover:bg-slate-900'} text-white rounded-xl text-xs font-bold transition-all shadow-sm">
                            ${isDayDone ? t('completedBtn') : t('markCompleted')}
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    selectCourseMonth(monthNum) {
        this.currentCourseMonth = monthNum;
        if (monthNum === 1) this.selectedDayNumber = 1;
        else if (monthNum === 2) this.selectedDayNumber = 31;
        else if (monthNum === 3) this.selectedDayNumber = 61;
        this.renderCourse();
    }

    selectCourseDay(dayNum) {
        this.selectedDayNumber = dayNum;
        if (dayNum <= 30) this.currentCourseMonth = 1;
        else if (dayNum <= 60) this.currentCourseMonth = 2;
        else this.currentCourseMonth = 3;
        this.renderCourse();
    }

    // --- RENDERING STEP-BY-STEP PHRASES ---
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
        const t = (k) => this.i18n ? this.i18n.t(k) : k;

        const filtered = this.data.phrases.filter(p => {
            const matchesCat = this.currentCategory === 'all' || p.category === this.currentCategory;
            const term = this.searchTerm.toLowerCase();
            const meaning = this.getPhraseMeaning(p).toLowerCase();
            const matchesSearch = !term ||
                p.devanagari.includes(term) ||
                p.latin.toLowerCase().includes(term) ||
                p.english.toLowerCase().includes(term) ||
                meaning.includes(term) ||
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
            const localizedMeaning = this.getPhraseMeaning(p);

            return `
                <div id="card-${p.id}" class="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative group">
                    ${isMastered ? `
                        <div class="absolute top-4 right-4 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs px-2.5 py-1 rounded-full font-semibold flex items-center gap-1">
                            <span>✓</span> ${t('mastered')}
                        </div>
                    ` : ''}

                    <div>
                        <div class="text-3xl font-extrabold text-slate-900 tracking-wide font-hindi mt-1 mb-2">
                            ${p.devanagari}
                        </div>

                        <div class="text-lg font-bold text-amber-700 tracking-wide flex items-center gap-2">
                            <span>${p.latin}</span>
                        </div>

                        <div class="text-xs font-mono text-slate-500 mt-0.5 flex items-center gap-1">
                            <span class="text-slate-400">${t('say')}</span> <span class="bg-slate-100 px-2 py-0.5 rounded text-slate-700">${p.phonetic || p.latin}</span>
                        </div>

                        <div class="mt-3 text-slate-800 font-semibold text-base border-t border-slate-100 pt-2.5">
                            ${localizedMeaning}
                        </div>

                        ${this.currentLanguage !== 'en' ? `
                            <div class="text-xs text-slate-400 italic mt-0.5">English: ${p.english}</div>
                        ` : ''}

                        ${p.notes ? `
                            <p class="text-xs text-slate-500 mt-1.5 leading-relaxed bg-amber-50/50 p-2 rounded-lg border border-amber-100/60">
                                💡 ${p.notes}
                            </p>
                        ` : ''}
                    </div>

                    <div class="mt-4 pt-3 border-t border-slate-100 flex flex-col gap-2">
                        <div class="flex items-center gap-2">
                            <button onclick="app.playPhraseAudio('${p.id}')" class="flex-1 bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-3 rounded-xl text-sm flex items-center justify-center gap-1.5 transition-colors shadow-sm">
                                <span>🔊</span> ${t('listen')}
                            </button>
                            <button onclick="app.playPhraseAudio('${p.id}', true)" title="Listen Slow" class="bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-2 px-2.5 rounded-xl text-xs flex items-center justify-center transition-colors">
                                🐢 ${t('slowAudio')}
                            </button>
                        </div>

                        <button id="mic-btn-${p.id}" onclick="app.startChecking('${p.id}')" class="w-full bg-slate-50 hover:bg-slate-100 text-slate-800 font-medium py-2 px-3 rounded-xl text-sm border border-slate-200 flex items-center justify-center gap-1.5 transition-all">
                            <span>🎙️ ${t('speakToCheck')}</span>
                        </button>

                        <div id="eval-result-${p.id}" class="hidden"></div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // --- RENDERING LONG CONVERSATIONS ---
    renderConversations() {
        const selectorContainer = document.getElementById('conversation-selectors');
        const contentContainer = document.getElementById('conversation-content');
        if (!selectorContainer || !contentContainer) return;
        const t = (k) => this.i18n ? this.i18n.t(k) : k;

        selectorContainer.innerHTML = this.data.conversations.map(c => `
            <button onclick="app.selectConversation('${c.id}')" class="px-4 py-2.5 rounded-xl font-medium text-sm transition-all text-left flex items-center gap-3 border ${
                this.currentConversationId === c.id
                    ? 'bg-amber-600 text-white border-amber-600 shadow-md'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }">
                <span class="text-xl">${c.icon}</span>
                <div>
                    <div class="font-bold leading-tight">${c.title}</div>
                    <div class="text-[11px] opacity-85 font-hindi">${c.hindiTitle}</div>
                </div>
            </button>
        `).join('');

        const activeConv = this.data.conversations.find(c => c.id === this.currentConversationId) || this.data.conversations[0];

        contentContainer.innerHTML = `
            <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm mb-6">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                    <div>
                        <div class="flex items-center gap-2">
                            <span class="text-2xl">${activeConv.icon}</span>
                            <h2 class="text-xl font-extrabold text-slate-900">${activeConv.title}</h2>
                        </div>
                        <p class="text-sm font-hindi font-bold text-amber-700 mt-0.5">${activeConv.hindiTitle}</p>
                        <p class="text-xs text-slate-500 mt-1">${activeConv.description}</p>
                    </div>

                    <button id="btn-autoplay-conv" onclick="app.autoplayConversation('${activeConv.id}')" class="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl text-sm font-bold shadow-sm transition-transform active:scale-95 whitespace-nowrap self-start sm:self-auto">
                        <span>▶️</span> ${t('listenFullConv')}
                    </button>
                </div>

                <div class="mt-6 space-y-4" id="dialogue-lines-list">
                    ${activeConv.dialogues.map((d, index) => {
                        const isEven = index % 2 === 0;
                        const lineId = `dialogue-${activeConv.id}-${index}`;
                        return `
                            <div id="${lineId}" class="p-4 rounded-2xl border transition-all ${
                                isEven ? 'bg-amber-50/40 border-amber-200/60 ml-0 mr-4 sm:mr-12' : 'bg-slate-50 border-slate-200/80 mr-0 ml-4 sm:ml-12'
                            }">
                                <div class="flex items-center justify-between mb-2">
                                    <div class="flex items-center gap-2">
                                        <span class="text-xl">${d.avatar}</span>
                                        <span class="font-bold text-xs uppercase tracking-wider text-slate-700">${d.speaker}</span>
                                    </div>
                                    <div class="flex items-center gap-1.5">
                                        <button onclick="app.playAudio('${d.devanagari.replace(/'/g, "\\'")}', null, '${d.latin.replace(/'/g, "\\'")}')" class="px-2.5 py-1 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                                            <span>🔊</span> ${t('listen')}
                                        </button>
                                        <button id="mic-btn-${lineId}" onclick="app.startChecking('${lineId}', '${d.devanagari.replace(/'/g, "\\'")}', '${d.latin.replace(/'/g, "\\'")}')" class="px-2.5 py-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-lg text-xs font-medium flex items-center gap-1 transition-all">
                                            <span>🎙️</span> ${t('practiceLine')}
                                        </button>
                                    </div>
                                </div>

                                <div class="text-xl sm:text-2xl font-bold font-hindi text-slate-900 leading-snug">
                                    ${d.devanagari}
                                </div>

                                <div class="text-sm sm:text-base font-semibold text-amber-800 mt-1">
                                    ${d.latin}
                                </div>

                                <div class="text-xs font-mono text-slate-500 mt-0.5">
                                    <span class="text-slate-400">${t('say')}</span> ${d.phonetic}
                                </div>

                                <div class="text-sm font-medium text-slate-700 mt-2 pt-2 border-t border-slate-200/50">
                                    ${d.english}
                                </div>

                                <div id="eval-result-${lineId}" class="hidden"></div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }

    selectConversation(convId) {
        this.currentConversationId = convId;
        this.renderConversations();
    }

    async autoplayConversation(convId) {
        const conv = this.data.conversations.find(c => c.id === convId);
        if (!conv) return;
        const t = (k) => this.i18n ? this.i18n.t(k) : k;

        const btn = document.getElementById('btn-autoplay-conv');
        if (this.isAutoplaying) {
            this.isAutoplaying = false;
            this.stopCurrentAudio();
            if (btn) btn.innerHTML = `<span>▶️</span> ${t('listenFullConv')}`;
            return;
        }

        this.isAutoplaying = true;
        if (btn) btn.innerHTML = `<span class="animate-spin">⏸️</span> ${t('stopAudio')}`;

        for (let i = 0; i < conv.dialogues.length; i++) {
            if (!this.isAutoplaying) break;

            const d = conv.dialogues[i];
            const lineId = `dialogue-${conv.id}-${i}`;
            const lineEl = document.getElementById(lineId);

            document.querySelectorAll('#dialogue-lines-list > div').forEach(el => el.classList.remove('ring-2', 'ring-amber-500'));
            if (lineEl) {
                lineEl.classList.add('ring-2', 'ring-amber-500');
                lineEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }

            this.playAudio(d.devanagari, null, d.latin);
            const durationMs = Math.max(2600, d.devanagari.length * 95);
            await new Promise(r => setTimeout(r, durationMs));
        }

        this.isAutoplaying = false;
        if (btn) btn.innerHTML = `<span>▶️</span> ${t('listenFullConv')}`;
        document.querySelectorAll('#dialogue-lines-list > div').forEach(el => el.classList.remove('ring-2', 'ring-amber-500'));
    }

    // --- ALPHABET GUIDE ---
    renderAlphabet() {
        const vowelsContainer = document.getElementById('alphabet-vowels');
        const consonantsContainer = document.getElementById('alphabet-consonants');

        if (vowelsContainer) {
            vowelsContainer.innerHTML = this.data.alphabet.vowels.map(v => `
                <div onclick="app.playAudio('${v.devanagari}', null, '${v.latin}')" class="bg-white p-3 rounded-xl border border-slate-200 text-center hover:border-amber-400 hover:shadow-sm cursor-pointer transition-all group">
                    <div class="text-2xl font-bold font-hindi text-slate-900 group-hover:text-amber-600 transition-colors">${v.devanagari}</div>
                    <div class="text-sm font-semibold text-amber-700">${v.latin}</div>
                    <div class="text-[11px] text-slate-500 font-mono mt-0.5">${v.phonetic}</div>
                    <div class="text-[11px] text-slate-400 mt-1 truncate">${v.example}</div>
                </div>
            `).join('');
        }

        if (consonantsContainer) {
            consonantsContainer.innerHTML = this.data.alphabet.consonants.map(c => `
                <div onclick="app.playAudio('${c.devanagari}', null, '${c.latin}')" class="bg-white p-3 rounded-xl border border-slate-200 text-center hover:border-amber-400 hover:shadow-sm cursor-pointer transition-all group">
                    <div class="text-2xl font-bold font-hindi text-slate-900 group-hover:text-amber-600 transition-colors">${c.devanagari}</div>
                    <div class="text-sm font-semibold text-amber-700">${c.latin}</div>
                    <div class="text-[11px] text-slate-500 font-mono mt-0.5">${c.phonetic}</div>
                    <div class="text-[11px] text-slate-400 mt-1 truncate">${c.example}</div>
                </div>
            `).join('');
        }
    }

    // --- QUIZ & PRACTICE MODE ---
    startQuiz(mode = 'listen') {
        this.quizState.mode = mode;
        this.quizState.score = 0;
        this.quizState.currentIndex = 0;

        const shuffled = [...this.data.phrases].sort(() => 0.5 - Math.random());
        this.quizState.questions = shuffled.slice(0, 10).map(target => {
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
        const t = (k) => this.i18n ? this.i18n.t(k) : k;

        const { currentIndex, questions, score } = this.quizState;

        if (currentIndex >= questions.length) {
            quizCard.innerHTML = `
                <div class="text-center py-8">
                    <div class="text-5xl mb-3">🏆</div>
                    <h3 class="text-2xl font-extrabold text-slate-900">${t('quizCompleted')}</h3>
                    <p class="text-slate-600 mt-2">You scored <strong class="text-amber-600 text-xl">${score} / ${questions.length}</strong> (${Math.round((score / questions.length) * 100)}%)</p>
                    <div class="mt-6 flex justify-center gap-3">
                        <button onclick="app.startQuiz('listen')" class="bg-amber-600 hover:bg-amber-700 text-white font-medium px-5 py-2.5 rounded-xl shadow">
                            ${t('playAgain')}
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
                <button onclick="app.playAudio('${q.target.devanagari}', '${q.target.audioFile || ''}', '${q.target.latin}')" class="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-xl font-bold text-base shadow-md transition-transform active:scale-95">
                    <span>🔊</span> ${t('listen')}
                </button>
                <div class="mt-3 text-xs text-slate-500">
                    ${t('hint')} <span class="font-hindi text-base text-slate-700 font-bold">${q.target.devanagari}</span> (${q.target.latin})
                </div>
            </div>

            <p class="text-sm font-semibold text-slate-700 mb-3">${t('selectEnglish')}</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3" id="quiz-options">
                ${q.options.map((opt, i) => `
                    <button onclick="app.handleQuizAnswer('${opt.id}', '${q.target.id}', this)" class="p-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-left font-medium text-slate-800 transition-all flex items-center justify-between">
                        <span>${this.getPhraseMeaning(opt)}</span>
                        <span class="text-slate-300 text-xs font-mono">${String.fromCharCode(65 + i)}</span>
                    </button>
                `).join('')}
            </div>
        `;

        setTimeout(() => this.playAudio(q.target.devanagari, q.target.audioFile, q.target.latin), 300);
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
            const targetPhrase = this.data.phrases.find(p => p.id === targetId);
            const targetMeaning = this.getPhraseMeaning(targetPhrase);
            buttons.forEach(b => {
                if (b.innerText.includes(targetMeaning)) {
                    b.classList.add('bg-emerald-50', 'border-emerald-400', 'text-emerald-800');
                }
            });
        }

        setTimeout(() => {
            this.quizState.currentIndex++;
            this.renderQuizQuestion();
        }, 1200);
    }

    // --- VIEW SWITCHING ---
    switchView(viewName) {
        this.currentView = viewName;
        this.stopCurrentAudio();
        this.isAutoplaying = false;

        document.querySelectorAll('.tab-view').forEach(el => el.classList.add('hidden'));
        const targetView = document.getElementById(`view-${viewName}`);
        if (targetView) targetView.classList.remove('hidden');

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
        } else if (viewName === 'conversations') {
            this.renderConversations();
        } else if (viewName === 'course') {
            this.renderCourse();
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

        // Close About modal with Escape key
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAboutModal();
            }
        });
    }
}

// Global instance
let app;
window.addEventListener('DOMContentLoaded', () => {
    app = new HindiLearningApp();
});
