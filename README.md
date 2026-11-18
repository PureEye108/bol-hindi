# Bol Hindi - Interactive Spoken Hindi Learning Lab

A standalone, local interactive web application to learn spoken Hindi step-by-step with Latin transliteration (Hinglish), native recorded audio, Web Speech synthesis (`hi-IN`), and microphone-based pronunciation evaluation.

---

## 🌟 Key Features

1. **Step-by-Step Spoken Hindi Phrases**:
   - 8 Progressive Levels:
     - Level 1: Greetings & Politeness (Namaste, Shukriya, Kripya...)
     - Level 2: Introductions (Aap kaise hain?, Mera naam... hai)
     - Level 3: Everyday Survival (Haan, Nahin, Theek hai, Chalo chalein...)
     - Level 4: Numbers & Counting (Ek, Do, Teen, Chaar...)
     - Level 5: Directions & Help (Bathroom kahan hai?, Mujhe madad chahiye...)
     - Level 6: Food & Dining (Paani chahiye, Swaadisht hai, Chai milegi?...)
     - Level 7: Shopping & Travel (Yeh kitne ka hai?, Thoda kam kijiye...)
     - Level 8: Family & Relations (Mataji, Pitaji, Bhaiya, Didi, Dadaji...)
     - Bonus: Spoken Colors (Laal, Hara, Peela, Safed, Kaala...)

2. **Dual Audio Playback**:
   - **Native Spoken Audio**: Pre-bundled high quality `.wav` audio files for numbers, family members, colors, and key conversational phrases.
   - **Web Speech API TTS**: Dynamic Hindi pronunciation synthesis (`hi-IN`) with adjustable playback speeds (1.0x Normal, 0.75x Slow, 0.5x Very Slow).

3. **Latin Words & Phonetic Breakdown**:
   - Every phrase displays the **Devanagari script**, the **Latin transliteration (Hinglish)**, a phonetic pronunciation guide (e.g. `nuh-muh-stay`), and contextual/cultural notes.

4. **Speech-to-Text Pronunciation Checker**:
   - Click **"🎙️ Speak to Check"**, speak the Hindi phrase into your microphone.
   - The app evaluates what you said in real-time, displays an accuracy match score (0-100%), and offers feedback.

5. **Interactive Audio Quiz**:
   - Listen to spoken Hindi and select the matching English meaning.
   - Tracks your score and marks phrases as mastered.

6. **Devanagari ↔ Latin Alphabet Guide**:
   - Interactive vowel and consonant chart showing Latin transliteration, English sound equivalents, and clickable audio.

---

## 🚀 How to Launch Locally

Double-click `START_HINDI_APP.bat` or run:
```bash
python server.py
```
This automatically launches your web browser at `http://localhost:8090`.

*Note: Running through `http://localhost` allows your browser (Chrome, Edge) to grant microphone access for speech checking.*
