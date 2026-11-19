// 90-Day Spoken Hindi Mastery Course (3 Months Curriculum)
// Designed for daily step-by-step learning with Latin transliteration, audio, grammar tips, and speaking challenges.

const HINDI_COURSE = {
    totalDays: 90,
    months: [
        {
            month: 1,
            title: "Month 1: Foundations & Spoken Survival",
            hindiTitle: "पहला महीना: बुनियादी हिंदी और रोज़मर्रा के शब्द",
            weeks: "Weeks 1 - 4 (Days 1 to 30)",
            icon: "🌱",
            description: "Build an unshakeable foundation: pronunciation, Devanagari-Latin mapping, greetings, polite responses, introductions, numbers, and basic survival questions."
        },
        {
            month: 2,
            title: "Month 2: Daily Life, Food & Culture",
            hindiTitle: "दूसरा महीना: दैनिक जीवन, खान-पान और संस्कृति",
            weeks: "Weeks 5 - 8 (Days 31 to 60)",
            icon: "🍛",
            description: "Survive and thrive in Indian daily life: ordering food, chai tapri culture, auto-rickshaw bargaining, navigation directions, family terms, and SOV sentence structure."
        },
        {
            month: 3,
            title: "Month 3: Fluency, Long Dialogues & Mastery",
            hindiTitle: "तीसरा महीना: धाराप्रवाह बातचीत और पूर्ण निपुणता",
            weeks: "Weeks 9 - 12 (Days 61 to 90)",
            icon: "🏆",
            description: "Unlock natural conversational flow: past & future tenses, feelings, likes/dislikes, role-play dialogues, bargaining mastery, idioms, and the 90-day graduation challenge."
        }
    ],

    // Generate curriculum array for all 90 days
    days: [
        // --- MONTH 1: WEEKS 1 TO 4 (DAYS 1 - 30) ---
        {
            day: 1,
            month: 1,
            week: 1,
            title: "The Power of Namaste",
            hindiTitle: "नमस्ते का महत्व",
            theme: "Greetings & Gestures",
            objective: "Learn India's most iconic greeting and correct cultural etiquette.",
            tip: "Join your palms flat in front of your chest and bow slightly. 'Namaste' works morning, noon, or night!",
            phrases: [
                { devanagari: "नमस्ते", latin: "Namaste", phonetic: "nuh-muh-stay", english: "Hello / Greetings" },
                { devanagari: "नमस्कार", latin: "Namaskaar", phonetic: "nuh-mus-kaar", english: "Respectful Hello (Formal)" }
            ],
            challenge: { devanagari: "नमस्ते", latin: "Namaste", instruction: "Speak 'Namaste' with clarity into your microphone." }
        },
        {
            day: 2,
            month: 1,
            week: 1,
            title: "Saying Thank You (Two Ways)",
            hindiTitle: "धन्यवाद और शुक्रिया",
            theme: "Gratitude",
            objective: "Master formal gratitude vs casual everyday appreciation.",
            tip: "'Dhanyavaad' is Sanskrit-derived and formal. 'Shukriya' is warm, conversational, and used everywhere.",
            phrases: [
                { devanagari: "धन्यवाद", latin: "Dhanyavaad", phonetic: "dhun-yuh-vaad", english: "Thank you (Formal)" },
                { devanagari: "शुक्रिया", latin: "Shukriya", phonetic: "shook-ree-yah", english: "Thank you (Conversational)" },
                { devanagari: "बहुत धन्यवाद", latin: "Bahut dhanyavaad", phonetic: "buh-hoot dhun-yuh-vaad", english: "Thank you very much" }
            ],
            challenge: { devanagari: "शुक्रिया", latin: "Shukriya", instruction: "Pronounce 'Shukriya' to express gratitude." }
        },
        {
            day: 3,
            month: 1,
            week: 1,
            title: "The Golden Responses: Yes & No",
            hindiTitle: "हाँ और नहीं",
            theme: "Basic Affirmations",
            objective: "Learn how to politely agree or decline.",
            tip: "Always add 'ji' to make 'Haan' (Haanji) or 'Nahin' (Nahin ji) sound polite and respectful to elders.",
            phrases: [
                { devanagari: "हाँ", latin: "Haan", phonetic: "haan (nasal)", english: "Yes" },
                { devanagari: "हाँ जी", latin: "Haan ji", phonetic: "haan-jee", english: "Yes, certainly (Polite)" },
                { devanagari: "नहीं", latin: "Nahin", phonetic: "nuh-hee (nasal)", english: "No" },
                { devanagari: "नहीं जी", latin: "Nahin ji", phonetic: "nuh-hee-jee", english: "No, thank you (Polite)" }
            ],
            challenge: { devanagari: "हाँ जी", latin: "Haan ji", instruction: "Practice saying the polite 'Haan ji'." }
        },
        {
            day: 4,
            month: 1,
            week: 1,
            title: "The Ultimate Word: Theek Hai",
            hindiTitle: "ठीक है (Okay / Alright)",
            theme: "Everyday Agreement",
            objective: "Master the most versatile conversational phrase in Hindi.",
            tip: "'Theek hai' can mean 'Okay', 'Alright', 'Understood', or 'Sounds good'. It is used tens of times a day!",
            phrases: [
                { devanagari: "ठीक है", latin: "Theek hai", phonetic: "theek hai", english: "Okay / Alright" },
                { devanagari: "सब ठीक है", latin: "Sab theek hai", phonetic: "sub theek hai", english: "Everything is okay / All good" },
                { devanagari: "कोई बात नहीं", latin: "Koi baat nahi", phonetic: "koy baat nuh-hee", english: "No problem / You're welcome" }
            ],
            challenge: { devanagari: "सब ठीक है", latin: "Sab theek hai", instruction: "Say 'Sab theek hai' (Everything is fine)." }
        },
        {
            day: 5,
            month: 1,
            week: 1,
            title: "Morning & Night Greetings",
            hindiTitle: "सुबह और रात",
            theme: "Time of Day",
            objective: "Greet people specifically at morning and bedtime.",
            tip: "'Shubh' means auspicious or good. 'Shubh raatri' = Good night.",
            phrases: [
                { devanagari: "सुप्रभात", latin: "Suprabhaat", phonetic: "soo-pruh-bhaat", english: "Good morning" },
                { devanagari: "शुभ रात्रि", latin: "Shubh raatri", phonetic: "shoobh raat-ree", english: "Good night" },
                { devanagari: "शुभ दिन", latin: "Shubh din", phonetic: "shoobh din", english: "Good day / Have a good day" }
            ],
            challenge: { devanagari: "सुप्रभात", latin: "Suprabhaat", instruction: "Wish a morning greeting: 'Suprabhaat'." }
        },
        {
            day: 6,
            month: 1,
            week: 1,
            title: "Polite Apologies & Getting Attention",
            hindiTitle: "माफ़ कीजिये",
            theme: "Politeness",
            objective: "Learn to apologize or politely excuse yourself in public.",
            tip: "'Maaf kijiye' is your all-in-one excuse me, pardon me, and sorry.",
            phrases: [
                { devanagari: "माफ़ कीजिये", latin: "Maaf kijiye", phonetic: "maaf kee-jee-yay", english: "Excuse me / Sorry" },
                { devanagari: "कृपया", latin: "Kripya", phonetic: "krip-yah", english: "Please" },
                { devanagari: "सुनिए", latin: "Suniye", phonetic: "soo-nee-yay", english: "Listen / Excuse me (calling someone)" }
            ],
            challenge: { devanagari: "माफ़ कीजिये", latin: "Maaf kijiye", instruction: "Say 'Maaf kijiye' with polite intonation." }
        },
        {
            day: 7,
            month: 1,
            week: 1,
            title: "Week 1 Review & See You Again",
            hindiTitle: "सप्ताह 1 समीक्षा - फिर मिलेंगे",
            theme: "Week 1 Milestone",
            objective: "Review Week 1 and learn the friendly farewell 'Phir milenge'.",
            tip: "Instead of a permanent 'Alvida' (goodbye), Indians prefer 'Phir milenge' (We will meet again).",
            phrases: [
                { devanagari: "फिर मिलेंगे", latin: "Phir milenge", phonetic: "feer mee-leng-ay", english: "See you again" },
                { devanagari: "अलविदा", latin: "Alvida", phonetic: "uhl-vee-daa", english: "Goodbye" },
                { devanagari: "अपना ख्याल रखना", latin: "Apna khayal rakhna", phonetic: "up-naa khyaa-al rukh-naa", english: "Take care of yourself" }
            ],
            challenge: { devanagari: "फिर मिलेंगे", latin: "Phir milenge", instruction: "Say farewell with 'Phir milenge'." }
        },

        // --- WEEK 2: INTRODUCTIONS & PEOPLE (DAYS 8 - 14) ---
        {
            day: 8,
            month: 1,
            week: 2,
            title: "What is Your Name?",
            hindiTitle: "आपका नाम क्या है?",
            theme: "Introductions",
            objective: "Ask someone their name with proper respect.",
            tip: "Use 'Aapka' for polite respect (elders, strangers, colleagues). 'Tumhara' is only for close younger friends.",
            phrases: [
                { devanagari: "आपका नाम क्या है?", latin: "Aapka naam kya hai?", phonetic: "aap-kaa naam kyah hai?", english: "What is your name? (Polite)" },
                { devanagari: "तुम्हारा नाम क्या है?", latin: "Tumhara naam kya hai?", phonetic: "toom-haa-raa naam kyah hai?", english: "What is your name? (Informal)" }
            ],
            challenge: { devanagari: "आपका नाम क्या है?", latin: "Aapka naam kya hai?", instruction: "Ask someone's name respectfully." }
        },
        {
            day: 9,
            month: 1,
            week: 2,
            title: "Introducing Your Name",
            hindiTitle: "मेरा नाम ... है",
            theme: "Introductions",
            objective: "Say your name with confidence.",
            tip: "Structure: 'Mera naam [Name] hai' (My name [Name] is). Hindi places verbs like 'hai' (is) at the very end!",
            phrases: [
                { devanagari: "मेरा नाम ... है", latin: "Mera naam ... hai", phonetic: "may-rah naam ... hai", english: "My name is ..." },
                { devanagari: "मैं ... हूँ", latin: "Main ... hoon", phonetic: "main ... hoon", english: "I am ..." }
            ],
            challenge: { devanagari: "मेरा नाम राज है", latin: "Mera naam Raj hai", instruction: "Say 'Mera naam Raj hai' (My name is Raj)." }
        },
        {
            day: 10,
            month: 1,
            week: 2,
            title: "Nice to Meet You",
            hindiTitle: "आपसे मिलकर खुशी हुई",
            theme: "Introductions",
            objective: "Express warmth after meeting someone new.",
            tip: "'Aapse milkar khushi hui' translates directly to 'Having met you, happiness happened'.",
            phrases: [
                { devanagari: "आपसे मिलकर खुशी हुई", latin: "Aapse milkar khushi hui", phonetic: "aap-say mil-kar khoo-shee hoo-ee", english: "Nice to meet you" },
                { devanagari: "मुझे भी", latin: "Mujhe bhi", phonetic: "moojh-ay bhee", english: "Me too / Likewise" }
            ],
            challenge: { devanagari: "आपसे मिलकर खुशी हुई", latin: "Aapse milkar khushi hui", instruction: "Say 'Nice to meet you' in Hindi." }
        },
        {
            day: 11,
            month: 1,
            week: 2,
            title: "How Are You? (To Males)",
            hindiTitle: "आप कैसे हैं?",
            theme: "Daily Inquiries",
            objective: "Ask a man or a mixed group how they are doing.",
            tip: "'Kaise' (ending in -e) is for masculine honorific or plural.",
            phrases: [
                { devanagari: "आप कैसे हैं?", latin: "Aap kaise hain?", phonetic: "aap kye-say hain?", english: "How are you? (To a male / respectful)" },
                { devanagari: "क्या हाल है?", latin: "Kya haal hai?", phonetic: "kyah haal hai?", english: "What's up? / How is it going? (Casual)" }
            ],
            challenge: { devanagari: "आप कैसे हैं?", latin: "Aap kaise hain?", instruction: "Ask 'How are you?' clearly." }
        },
        {
            day: 12,
            month: 1,
            week: 2,
            title: "How Are You? (To Females)",
            hindiTitle: "आप कैसी हैं?",
            theme: "Gendered Greetings",
            objective: "Learn the feminine form for asking women how they are doing.",
            tip: "In Hindi, feminine forms end in '-i' sounds. 'Kaise' becomes 'Kaisi'.",
            phrases: [
                { devanagari: "आप कैसी हैं?", latin: "Aap kaisi hain?", phonetic: "aap kye-see hain?", english: "How are you? (To a female)" },
                { devanagari: "तुम कैसी हो?", latin: "Tum kaisi ho?", phonetic: "toom kye-see ho?", english: "How are you? (To female friend)" }
            ],
            challenge: { devanagari: "आप कैसी हैं?", latin: "Aap kaisi hain?", instruction: "Pronounce 'Aap kaisi hain?' accurately." }
        },
        {
            day: 13,
            month: 1,
            week: 2,
            title: "I Am Fine & Good",
            hindiTitle: "मैं ठीक हूँ / सब बढ़िया",
            theme: "Responses",
            objective: "Answer when someone asks how you are doing.",
            tip: "'Main theek hoon' is standard. 'Sab badhiya' is casual and means 'All is awesome!'.",
            phrases: [
                { devanagari: "मैं ठीक हूँ", latin: "Main theek hoon", phonetic: "main theek hoon", english: "I am fine" },
                { devanagari: "सब बढ़िया है", latin: "Sab badhiya hai", phonetic: "sub budh-ee-yaa hai", english: "Everything is awesome/great" },
                { devanagari: "और आप?", latin: "Aur aap?", phonetic: "owr aap?", english: "And you?" }
            ],
            challenge: { devanagari: "मैं ठीक हूँ", latin: "Main theek hoon", instruction: "State 'Main theek hoon' into the mic." }
        },
        {
            day: 14,
            month: 1,
            week: 2,
            title: "Where Are You From?",
            hindiTitle: "आप कहाँ से हैं?",
            theme: "Origins",
            objective: "Ask and tell countries of origin.",
            tip: "'Se' means 'from'. 'Main [Country] se hoon' = I am from [Country].",
            phrases: [
                { devanagari: "आप कहाँ से हैं?", latin: "Aap kahan se hain?", phonetic: "aap kuh-haan say hain?", english: "Where are you from?" },
                { devanagari: "मैं भारत से हूँ", latin: "Main Bharat se hoon", phonetic: "main bhaa-rut say hoon", english: "I am from India" },
                { devanagari: "मैं अमेरिका से हूँ", latin: "Main America se hoon", phonetic: "main uh-meh-ri-ka say hoon", english: "I am from America" }
            ],
            challenge: { devanagari: "आप कहाँ से हैं?", latin: "Aap kahan se hain?", instruction: "Ask 'Where are you from?'." }
        },

        // --- WEEK 3: NUMBERS & SURVIVAL TOOLS (DAYS 15 - 21) ---
        {
            day: 15,
            month: 1,
            week: 3,
            title: "Numbers 1 to 5",
            hindiTitle: "गिनती १ से ५ (एक, दो, तीन, चार, पाँच)",
            theme: "Numbers",
            objective: "Memorize and pronounce the first 5 numbers.",
            tip: "Count on your fingers: Ek (1), Do (2), Teen (3), Chaar (4), Paanch (5).",
            phrases: [
                { devanagari: "एक", latin: "Ek", phonetic: "ay-k", english: "One (1)" },
                { devanagari: "दो", latin: "Do", phonetic: "doh", english: "Two (2)" },
                { devanagari: "तीन", latin: "Teen", phonetic: "teen", english: "Three (3)" },
                { devanagari: "चार", latin: "Chaar", phonetic: "chaar", english: "Four (4)" },
                { devanagari: "पाँच", latin: "Paanch", phonetic: "paanch", english: "Five (5)" }
            ],
            challenge: { devanagari: "एक दो तीन", latin: "Ek Do Teen", instruction: "Speak numbers 1, 2, 3 together." }
        },
        {
            day: 16,
            month: 1,
            week: 3,
            title: "Numbers 6 to 10",
            hindiTitle: "गिनती ६ से १० (छह, सात, आठ, नौ, दस)",
            theme: "Numbers",
            objective: "Complete numbers up to 10.",
            tip: "Chhah (6), Saat (7), Aath (8), Nau (9), Das (10). Das = Ten.",
            phrases: [
                { devanagari: "छह", latin: "Chhah", phonetic: "chhah", english: "Six (6)" },
                { devanagari: "सात", latin: "Saat", phonetic: "saat", english: "Seven (7)" },
                { devanagari: "आठ", latin: "Aath", phonetic: "aath", english: "Eight (8)" },
                { devanagari: "नौ", latin: "Nau", phonetic: "now", english: "Nine (9)" },
                { devanagari: "दस", latin: "Das", phonetic: "dus", english: "Ten (10)" }
            ],
            challenge: { devanagari: "दस", latin: "Das", instruction: "Pronounce number Ten (Das)." }
        },
        {
            day: 17,
            month: 1,
            week: 3,
            title: "Money Numbers: 20, 50, 100",
            hindiTitle: "बीस, पचास, सौ",
            theme: "Currency & Numbers",
            objective: "Learn the numbers used on Indian Rupee banknotes.",
            tip: "'Rupaye' means Rupees. 'Sau rupaye' = 100 rupees.",
            phrases: [
                { devanagari: "बीस", latin: "Bees", phonetic: "bees", english: "Twenty (20)" },
                { devanagari: "पचास", latin: "Pachaas", phonetic: "puh-chaas", english: "Fifty (50)" },
                { devanagari: "सौ", latin: "Sau", phonetic: "sow", english: "One Hundred (100)" },
                { devanagari: "पाँच सौ", latin: "Paanch sau", phonetic: "paanch sow", english: "Five Hundred (500)" }
            ],
            challenge: { devanagari: "सौ रुपये", latin: "Sau rupaye", instruction: "Say 'Sau rupaye' (100 Rupees)." }
        },
        {
            day: 18,
            month: 1,
            week: 3,
            title: "Do You Speak English?",
            hindiTitle: "क्या आप अंग्रेज़ी बोलते हैं?",
            theme: "Language Survival",
            objective: "Find English speakers when you need assistance.",
            tip: "'Angrezi' is Hindi for the English language.",
            phrases: [
                { devanagari: "क्या आप अंग्रेज़ी बोलते हैं?", latin: "Kya aap angrezi bolte hain?", phonetic: "kyah aap ung-ray-zee boal-tay hain?", english: "Do you speak English?" },
                { devanagari: "थोड़ी थोड़ी", latin: "Thodi thodi", phonetic: "tho-dee tho-dee", english: "A little bit" },
                { devanagari: "मैं हिंदी सीख रहा हूँ", latin: "Main Hindi seekh raha hoon", phonetic: "main hin-dee seekh ruh-haa hoon", english: "I am learning Hindi (Male)" }
            ],
            challenge: { devanagari: "क्या आप अंग्रेज़ी बोलते हैं?", latin: "Kya aap angrezi bolte hain?", instruction: "Ask if they speak English." }
        },
        {
            day: 19,
            month: 1,
            week: 3,
            title: "Please Speak Slowly",
            hindiTitle: "कृपया धीरे बोलिये",
            theme: "Comprehension",
            objective: "Ask locals to slow down so you can follow.",
            tip: "'Dheere' means slowly or softly. Repeat 'dheere dheere' to mean very slowly.",
            phrases: [
                { devanagari: "कृपया धीरे बोलिये", latin: "Kripya dheere boliye", phonetic: "krip-yah dhee-ray boal-ee-yay", english: "Please speak slowly" },
                { devanagari: "फिर से बोलिए", latin: "Phir se boliye", phonetic: "feer say boal-ee-yay", english: "Please say that again" }
            ],
            challenge: { devanagari: "कृपया धीरे बोलिये", latin: "Kripya dheere boliye", instruction: "Politely request 'Kripya dheere boliye'." }
        },
        {
            day: 20,
            month: 1,
            week: 3,
            title: "I Don't Understand",
            hindiTitle: "मुझे समझ नहीं आया",
            theme: "Comprehension",
            objective: "Tell someone you did not understand.",
            tip: "'Samajh gaya' = I understood. 'Samajh nahi aaya' = I did not understand.",
            phrases: [
                { devanagari: "मुझे समझ नहीं आया", latin: "Mujhe samajh nahi aaya", phonetic: "moojh-ay suh-mujh nuh-hee aa-yaa", english: "I did not understand" },
                { devanagari: "मैं समझ गया", latin: "Main samajh gaya", phonetic: "main suh-mujh guy-aa", english: "I understood (Male)" }
            ],
            challenge: { devanagari: "मुझे समझ नहीं आया", latin: "Mujhe samajh nahi aaya", instruction: "State 'I did not understand'." }
        },
        {
            day: 21,
            month: 1,
            week: 3,
            title: "Week 3 Milestone: Let's Go!",
            hindiTitle: "चलो चलें!",
            theme: "Action Phrases",
            objective: "Invite someone to start moving.",
            tip: "'Chalo' is universally used by over a billion people to say 'Let's go!', 'Come on!', or 'Move!'.",
            phrases: [
                { devanagari: "चलो चलें", latin: "Chalo chalein", phonetic: "chuh-lo chuh-lay", english: "Let's go" },
                { devanagari: "जल्दी करो", latin: "Jaldi karo", phonetic: "jul-dee kuh-ro", english: "Hurry up / Be quick" },
                { devanagari: "यहाँ आओ", latin: "Yahan aao", phonetic: "yuh-haan aa-oh", english: "Come here" }
            ],
            challenge: { devanagari: "चलो चलें", latin: "Chalo chalein", instruction: "Say 'Chalo chalein' (Let's go)." }
        },

        // --- WEEK 4: QUESTION WORDS & ESSENTIAL NEEDS (DAYS 22 - 30) ---
        {
            day: 22,
            month: 1,
            week: 4,
            title: "The 5 Big Question Words",
            hindiTitle: "क्या, कहाँ, कब, क्यों, कौन",
            theme: "Questions",
            objective: "Master What, Where, When, Why, Who.",
            tip: "Kya (What), Kahan (Where), Kab (When), Kyon (Why), Kaun (Who).",
            phrases: [
                { devanagari: "क्या?", latin: "Kya?", phonetic: "kyah?", english: "What?" },
                { devanagari: "कहाँ?", latin: "Kahan?", phonetic: "kuh-haan?", english: "Where?" },
                { devanagari: "कब?", latin: "Kab?", phonetic: "kub?", english: "When?" },
                { devanagari: "क्यों?", latin: "Kyon?", phonetic: "kyon?", english: "Why?" },
                { devanagari: "कौन?", latin: "Kaun?", phonetic: "kown?", english: "Who?" }
            ],
            challenge: { devanagari: "यह क्या है?", latin: "Yeh kya hai?", instruction: "Ask 'Yeh kya hai?' (What is this?)." }
        },
        {
            day: 23,
            month: 1,
            week: 4,
            title: "Where is the Bathroom?",
            hindiTitle: "बाथरूम कहाँ है?",
            theme: "Survival Directions",
            objective: "Find restrooms anywhere.",
            tip: "'Bathroom' or 'Washroom' is understood by everyone in India. Formal Hindi is 'Shauchalaya'.",
            phrases: [
                { devanagari: "बाथरूम कहाँ है?", latin: "Bathroom kahan hai?", phonetic: "baath-room kuh-haan hai?", english: "Where is the bathroom?" },
                { devanagari: "शौचालय कहाँ है?", latin: "Shauchalaya kahan hai?", phonetic: "show-chaa-luy kuh-haan hai?", english: "Where is the restroom? (Formal)" }
            ],
            challenge: { devanagari: "बाथरूम कहाँ है?", latin: "Bathroom kahan hai?", instruction: "Ask 'Bathroom kahan hai?'." }
        },
        {
            day: 24,
            month: 1,
            week: 4,
            title: "I Need Help",
            hindiTitle: "मुझे मदद चाहिए",
            theme: "Emergency & Assistance",
            objective: "Request emergency assistance.",
            tip: "'Madad' means help. 'Chahiye' means is needed/wanted.",
            phrases: [
                { devanagari: "मुझे मदद चाहिए", latin: "Mujhe madad chahiye", phonetic: "moojh-ay muh-dud chaa-hee-yay", english: "I need help" },
                { devanagari: "कृपया मेरी मदद कीजिये", latin: "Kripya meri madad kijiye", phonetic: "krip-yah may-ree muh-dud kee-jee-yay", english: "Please help me" }
            ],
            challenge: { devanagari: "मुझे मदद चाहिए", latin: "Mujhe madad chahiye", instruction: "State 'Mujhe madad chahiye'." }
        },
        {
            day: 25,
            month: 1,
            week: 4,
            title: "I Want Water",
            hindiTitle: "मुझे पानी चाहिए",
            theme: "Basic Needs",
            objective: "Ask for drinking water.",
            tip: "In restaurants or shops, ask for 'Bottled water' (Botal band paani) to ensure safe drinking.",
            phrases: [
                { devanagari: "मुझे पानी चाहिए", latin: "Mujhe paani chahiye", phonetic: "moojh-ay paa-nee chaa-hee-yay", english: "I want water" },
                { devanagari: "ठंडा पानी", latin: "Thanda paani", phonetic: "thun-daa paa-nee", english: "Cold water" }
            ],
            challenge: { devanagari: "मुझे पानी चाहिए", latin: "Mujhe paani chahiye", instruction: "Ask for water politely." }
        },
        {
            day: 26,
            month: 1,
            week: 4,
            title: "I Am Hungry",
            hindiTitle: "मुझे भूख लगी है",
            theme: "Hunger",
            objective: "Express when you are ready to eat.",
            tip: "'Bhookh' = hunger. 'Pyaas' = thirst.",
            phrases: [
                { devanagari: "मुझे भूख लगी है", latin: "Mujhe bhookh lagi hai", phonetic: "moojh-ay bhoo-kh luh-gee hai", english: "I am hungry" },
                { devanagari: "मुझे प्यास लगी है", latin: "Mujhe pyaas lagi hai", phonetic: "moojh-ay pyaas luh-gee hai", english: "I am thirsty" }
            ],
            challenge: { devanagari: "मुझे भूख लगी है", latin: "Mujhe bhookh lagi hai", instruction: "Say 'Mujhe bhookh lagi hai'." }
        },
        {
            day: 27,
            month: 1,
            week: 4,
            title: "Where are You Going?",
            hindiTitle: "आप कहाँ जा रहे हैं?",
            theme: "Movement",
            objective: "Ask friends or companions where they are headed.",
            tip: "'Ja rahe hain' is masculine/plural. 'Ja rahi hain' is for a female.",
            phrases: [
                { devanagari: "आप कहाँ जा रहे हैं?", latin: "Aap kahan jaa rahe hain?", phonetic: "aap kuh-haan jaa ruh-hay hain?", english: "Where are you going?" },
                { devanagari: "मैं बाज़ार जा रहा हूँ", latin: "Main bazaar jaa raha hoon", phonetic: "main buh-zaar jaa ruh-haa hoon", english: "I am going to the market (Male)" }
            ],
            challenge: { devanagari: "आप कहाँ जा रहे हैं?", latin: "Aap kahan jaa rahe hain?", instruction: "Pronounce 'Aap kahan jaa rahe hain?'." }
        },
        {
            day: 28,
            month: 1,
            week: 4,
            title: "Are You Coming?",
            hindiTitle: "क्या आप आ रहे हैं?",
            theme: "Plans",
            objective: "Check if someone is joining you.",
            tip: "Answer 'Haan, main aa raha hoon' (Yes, I am coming).",
            phrases: [
                { devanagari: "क्या आप आ रहे हैं?", latin: "Kya aap aa rahe hain?", phonetic: "kyah aap aa ruh-hay hain?", english: "Are you coming?" },
                { devanagari: "हां, मैं आ रहा हूं", latin: "Haan, main aa raha hoon", phonetic: "haan main aa ruh-haa hoon", english: "Yes, I am coming" }
            ],
            challenge: { devanagari: "हां, मैं आ रहा हूं", latin: "Haan, main aa raha hoon", instruction: "Confirm: 'Haan, main aa raha hoon'." }
        },
        {
            day: 29,
            month: 1,
            week: 4,
            title: "Today, Tomorrow & Yesterday",
            hindiTitle: "आज, कल, परसों",
            theme: "Time Words",
            objective: "Understand Hindi's famous 'Kal' (which means both yesterday and tomorrow!).",
            tip: "In Hindi, 'Kal' means BOTH yesterday and tomorrow! The verb tense tells you whether it's past or future.",
            phrases: [
                { devanagari: "आज", latin: "Aaj", phonetic: "aaj", english: "Today" },
                { devanagari: "कल", latin: "Kal", phonetic: "kul", english: "Tomorrow OR Yesterday" },
                { devanagari: "परसों", latin: "Parson", phonetic: "pur-son", english: "Day after tomorrow OR Day before yesterday" }
            ],
            challenge: { devanagari: "आज क्या दिन है?", latin: "Aaj kya din hai?", instruction: "Ask 'Aaj kya din hai?' (What day is today?)." }
        },
        {
            day: 30,
            month: 1,
            week: 4,
            title: "Month 1 Graduation: The First Conversation",
            hindiTitle: "महीना १ समापन: पहली पूरी बातचीत",
            theme: "Milestone Dialogue",
            objective: "Put together everything from Month 1 into a complete 4-sentence dialogue!",
            tip: "Congratulations on completing 30 Days of Hindi! You now know all greetings, introductions, numbers, and survival phrases.",
            phrases: [
                { devanagari: "नमस्ते! मेरा नाम राज है।", latin: "Namaste! Mera naam Raj hai.", phonetic: "nuh-muh-stay! may-rah naam Raaj hai.", english: "Hello! My name is Raj." },
                { devanagari: "आप कैसे हैं? क्या सब ठीक है?", latin: "Aap kaise hain? Kya sab theek hai?", phonetic: "aap kye-say hain? kyah sub theek hai?", english: "How are you? Is everything okay?" }
            ],
            challenge: { devanagari: "नमस्ते! मेरा नाम राज है।", latin: "Namaste! Mera naam Raj hai.", instruction: "Speak your graduation introduction." }
        },

        // --- MONTH 2: DAILY LIFE, FOOD & SHOPPING (DAYS 31 - 60) ---
        {
            day: 31,
            month: 2,
            week: 5,
            title: "The Magic of Indian Chai",
            hindiTitle: "चाय की चुस्की",
            theme: "Chai Culture",
            objective: "Order freshly brewed tea at an Indian tea stall.",
            tip: "Say 'Bhaiya, ek garam chai dena' (Brother, give one hot tea).",
            phrases: [
                { devanagari: "चाय मिलेगी?", latin: "Chai milegi?", phonetic: "chaay mee-lay-gee?", english: "Can I get tea?" },
                { devanagari: "एक कप मसाला चाय", latin: "Ek cup masala chai", phonetic: "ayk cup muh-saa-laa chaay", english: "One cup masala tea" },
                { devanagari: "कम चीनी", latin: "Kam cheeni", phonetic: "kum chee-nee", english: "Less sugar" }
            ],
            challenge: { devanagari: "चाय मिलेगी?", latin: "Chai milegi?", instruction: "Ask 'Chai milegi?' at the stall." }
        },
        {
            day: 32,
            month: 2,
            week: 5,
            title: "Getting a Table at a Restaurant",
            hindiTitle: "रेस्तरां में टेबल",
            theme: "Dining Out",
            objective: "Enter a restaurant and request seating.",
            tip: "'Table for two' = 'Do logon ke liye table'.",
            phrases: [
                { devanagari: "दो लोगों के लिए टेबल", latin: "Do logon ke liye table", phonetic: "doh lo-gon kay lee-yay tay-bul", english: "Table for two people" },
                { devanagari: "मेनू कार्ड दिखाइए", latin: "Menu card dikhaiye", phonetic: "may-noo kaard dikh-aa-ee-yay", english: "Please show the menu card" }
            ],
            challenge: { devanagari: "मेनू कार्ड दिखाइए", latin: "Menu card dikhaiye", instruction: "Ask for the menu card." }
        },
        {
            day: 33,
            month: 2,
            week: 5,
            title: "Controlling the Spice Level",
            hindiTitle: "तीखा कम रखना",
            theme: "Spices & Food",
            objective: "Never get burned by hidden spicy green chilies.",
            tip: "Say 'Zyada teekha mat banaiye' (Do not make it too spicy). 'Mirchi' means chili.",
            phrases: [
                { devanagari: "ज़्यादा तीखा नहीं", latin: "Zyada teekha nahi", phonetic: "zyaa-daa tee-khaa nuh-hee", english: "Not too spicy" },
                { devanagari: "कम मिर्च डालना", latin: "Kam mirch daalna", phonetic: "kum mirch daal-naa", english: "Put less chili" }
            ],
            challenge: { devanagari: "ज़्यादा तीखा नहीं", latin: "Zyada teekha nahi", instruction: "State 'Zyada teekha nahi' clearly." }
        },
        {
            day: 34,
            month: 2,
            week: 5,
            title: "Ordering Roti, Rice & Dal",
            hindiTitle: "रोटी, चावल और दाल",
            theme: "Staple Foods",
            objective: "Order the foundational staples of Indian cuisine.",
            tip: "'Roti' is flatbread, 'Chawal' is rice, 'Makkhan' is butter. 'Makkhan roti' = Butter roti.",
            phrases: [
                { devanagari: "चार रोटियाँ", latin: "Chaar rotiyan", phonetic: "chaar ro-tee-yaan", english: "Four rotis" },
                { devanagari: "दाल मखनी और चावल", latin: "Daal makhani aur chawal", phonetic: "daal mukh-nee owr chaa-wul", english: "Dal makhani and rice" }
            ],
            challenge: { devanagari: "दाल मखनी और चावल", latin: "Daal makhani aur chawal", instruction: "Order dal makhani and rice." }
        },
        {
            day: 35,
            month: 2,
            week: 5,
            title: "Complimenting the Delicious Food",
            hindiTitle: "खाना बहुत स्वादिष्ट है!",
            theme: "Compliments",
            objective: "Make the cook or waiter smile with heartfelt praise.",
            tip: "'Swaadisht' = delicious. 'Laajawaab' = matchless / extraordinary!",
            phrases: [
                { devanagari: "खाना बहुत स्वादिष्ट है", latin: "Khaana bahut swaadisht hai", phonetic: "khaa-naa buh-hoot svaa-disht hai", english: "The food is very delicious" },
                { devanagari: "मज़ा आ गया!", latin: "Maza aa gaya!", phonetic: "muh-zaa aa guy-aa!", english: "Thoroughly enjoyed it / It was wonderful!" }
            ],
            challenge: { devanagari: "खाना बहुत स्वादिष्ट है", latin: "Khaana bahut swaadisht hai", instruction: "Praise the food enthusiastically." }
        },
        {
            day: 36,
            month: 2,
            week: 5,
            title: "Asking for the Check / Bill",
            hindiTitle: "बिल ले आइए",
            theme: "Payment",
            objective: "Finish your meal and pay.",
            tip: "'Bill le aaiye' is polite. You can also ask 'Card chalega?' (Does card work?).",
            phrases: [
                { devanagari: "बिल ले आइए", latin: "Bill le aaiye", phonetic: "bill lay aa-ee-yay", english: "Please bring the bill" },
                { devanagari: "क्या आप कार्ड लेते हैं?", latin: "Kya aap card lete hain?", phonetic: "kyah aap card lay-tay hain?", english: "Do you accept cards?" }
            ],
            challenge: { devanagari: "बिल ले आइए", latin: "Bill le aaiye", instruction: "Ask for the bill: 'Bill le aaiye'." }
        },
        {
            day: 37,
            month: 2,
            week: 6,
            title: "Hailing an Auto-Rickshaw",
            hindiTitle: "ऑटो-रिक्शा रोकना",
            theme: "Transportation",
            objective: "Flag down an auto and check their destination.",
            tip: "Call the driver 'Bhaiya' (brother). Ask: '[Place name] chalenge?' (Will you go to [Place]?).",
            phrases: [
                { devanagari: "भैया, कनाट प्लेस चलेंगे?", latin: "Bhaiya, Connaught Place chalenge?", phonetic: "bhaa-ee-yaa, kuh-naat plays chul-eng-ay?", english: "Brother, will you go to Connaught Place?" },
                { devanagari: "हाँ बैठिए", latin: "Haan baithiye", phonetic: "haan by-thee-yay", english: "Yes, please sit (Driver reply)" }
            ],
            challenge: { devanagari: "भैया, स्टेशन चलेंगे?", latin: "Bhaiya, station chalenge?", instruction: "Ask 'Bhaiya, station chalenge?'." }
        },
        {
            day: 38,
            month: 2,
            week: 6,
            title: "Asking for the Meter",
            hindiTitle: "मीटर से चलिए",
            theme: "Transportation",
            objective: "Ensure you get a fair, regulated auto fare.",
            tip: "'Meter chalu kijiye' = Please start the meter.",
            phrases: [
                { devanagari: "मीटर से चलिए", latin: "Meter se chaliye", phonetic: "mee-tur say chul-ee-yay", english: "Please go by the meter" },
                { devanagari: "मीटर चालू कीजिये", latin: "Meter chaalu kijiye", phonetic: "mee-tur chaa-loo kee-jee-yay", english: "Please start the meter" }
            ],
            challenge: { devanagari: "मीटर से चलिए", latin: "Meter se chaliye", instruction: "Say 'Meter se chaliye'." }
        },
        {
            day: 39,
            month: 2,
            week: 6,
            title: "Directing the Driver: Straight, Left, Right",
            hindiTitle: "सीधे, बाएँ, दाएँ",
            theme: "Navigation Directions",
            objective: "Guide your driver turns without confusion.",
            tip: "Seedhe = Straight. Baayein = Left. Daayein = Right.",
            phrases: [
                { devanagari: "सीधे जाइये", latin: "Seedhe jaiye", phonetic: "see-dhay jaa-ee-yay", english: "Go straight" },
                { devanagari: "बाएँ मुड़िये", latin: "Baayein mudiye", phonetic: "baa-yay moo-dee-yay", english: "Turn left" },
                { devanagari: "दाएँ मुड़िये", latin: "Daayein mudiye", phonetic: "daa-yay moo-dee-yay", english: "Turn right" }
            ],
            challenge: { devanagari: "सीधे जाइये", latin: "Seedhe jaiye", instruction: "Give direction 'Seedhe jaiye'." }
        },
        {
            day: 40,
            month: 2,
            week: 6,
            title: "Stopping the Ride & Paying",
            hindiTitle: "यहाँ रोक दीजिए",
            theme: "Ride Completion",
            objective: "Tell your cab or rickshaw exactly where to halt.",
            tip: "'Bas yahan' = Just here. 'Yeh lijiye paise' = Here is the money.",
            phrases: [
                { devanagari: "यहाँ रोक दीजिए", latin: "Yahan rok dijiye", phonetic: "yuh-haan roak dee-jee-yay", english: "Stop here please" },
                { devanagari: "यह लीजिए पैसे", latin: "Yeh lijiye paise", phonetic: "yeh lee-jee-yay pie-say", english: "Here is the money" }
            ],
            challenge: { devanagari: "यहाँ रोक दीजिए", latin: "Yahan rok dijiye", instruction: "Ask to halt: 'Yahan rok dijiye'." }
        },
        {
            day: 41,
            month: 2,
            week: 6,
            title: "How Much is This? (Bazaar Gold)",
            hindiTitle: "यह कितने का है?",
            theme: "Bazaar Shopping",
            objective: "Inquire about prices in local street markets.",
            tip: "Point your finger at any item and say 'Yeh kitne ka hai?'.",
            phrases: [
                { devanagari: "यह कितने का है?", latin: "Yeh kitne ka hai?", phonetic: "yeh kit-nay kaa hai?", english: "How much is this?" },
                { devanagari: "वह कितने का है?", latin: "Voh kitne ka hai?", phonetic: "voh kit-nay kaa hai?", english: "How much is that over there?" }
            ],
            challenge: { devanagari: "यह कितने का है?", latin: "Yeh kitne ka hai?", instruction: "Ask 'Yeh kitne ka hai?'." }
        },
        {
            day: 42,
            month: 2,
            week: 6,
            title: "Bargaining Rule #1: Too Expensive!",
            hindiTitle: "यह बहुत महंगा है!",
            theme: "Bargaining",
            objective: "React appropriately to start the negotiation dance.",
            tip: "Say it with a surprised smile! 'Mehanga' = expensive. 'Sasta' = cheap.",
            phrases: [
                { devanagari: "यह बहुत महंगा है", latin: "Yeh bahut mehanga hai", phonetic: "yeh buh-hoot men-guh hai", english: "This is too expensive" },
                { devanagari: "कुछ सस्ता दिखाइए", latin: "Kuch sasta dikhaiye", phonetic: "kooch sus-taa dikh-aa-ee-yay", english: "Show something cheaper" }
            ],
            challenge: { devanagari: "यह बहुत महंगा है", latin: "Yeh bahut mehanga hai", instruction: "Say 'Yeh bahut mehanga hai'." }
        },
        {
            day: 43,
            month: 2,
            week: 7,
            title: "Bargaining Rule #2: Reduce the Price",
            hindiTitle: "थोड़ा कम कीजिये",
            theme: "Bargaining",
            objective: "Politely negotiate the price down.",
            tip: "'Thoda' = a little. 'Kam' = less. 'Thoda kam kijiye' = Please make it a bit less.",
            phrases: [
                { devanagari: "थोड़ा कम कीजिये", latin: "Thoda kam kijiye", phonetic: "tho-daa kum kee-jee-yay", english: "Please reduce the price a little" },
                { devanagari: "अंतिम दाम क्या है?", latin: "Antim daam kya hai?", phonetic: "un-tim daam kyah hai?", english: "What is your final price?" }
            ],
            challenge: { devanagari: "थोड़ा कम कीजिये", latin: "Thoda kam kijiye", instruction: "Ask 'Thoda kam kijiye'." }
        },
        {
            day: 44,
            month: 2,
            week: 7,
            title: "Colors of India: Red, Green, Yellow",
            hindiTitle: "रंग: लाल, हरा, पीला",
            theme: "Colors & Fabrics",
            objective: "Pick clothing and items by their color name.",
            tip: "Laal = Red. Hara = Green. Peela = Yellow.",
            phrases: [
                { devanagari: "लाल", latin: "Laal", phonetic: "laal", english: "Red" },
                { devanagari: "हरा", latin: "Hara", phonetic: "huh-raa", english: "Green" },
                { devanagari: "पीला", latin: "Peela", phonetic: "pee-laa", english: "Yellow" },
                { devanagari: "मुझे लाल कुर्ता चाहिए", latin: "Mujhe laal kurta chahiye", phonetic: "moojh-ay laal koor-taa chaa-hee-yay", english: "I want the red kurta" }
            ],
            challenge: { devanagari: "लाल और हरा", latin: "Laal aur hara", instruction: "Say 'Laal aur hara' (Red and green)." }
        },
        {
            day: 45,
            month: 2,
            week: 7,
            title: "Colors: White, Black, Blue",
            hindiTitle: "रंग: सफ़ेद, काला, नीला",
            theme: "Colors",
            objective: "Learn White, Black, and Blue.",
            tip: "Safed = White. Kaala = Black. Neela = Blue.",
            phrases: [
                { devanagari: "सफ़ेद", latin: "Safed", phonetic: "suh-fayd", english: "White" },
                { devanagari: "काला", latin: "Kaala", phonetic: "kaa-laa", english: "Black" },
                { devanagari: "नीला", latin: "Neela", phonetic: "nee-laa", english: "Blue" }
            ],
            challenge: { devanagari: "सफ़ेद और काला", latin: "Safed aur kaala", instruction: "Say 'Safed aur kaala' (White and black)." }
        },
        {
            day: 46,
            month: 2,
            week: 7,
            title: "Family: Father & Mother",
            hindiTitle: "पिताजी और माताजी",
            theme: "Family & Kinship",
            objective: "Address parents with traditional Indian honor.",
            tip: "'Pitaji' (Father) and 'Mataji' (Mother). You can also affectionately say 'Papa' and 'Maa'.",
            phrases: [
                { devanagari: "पिताजी", latin: "Pitaji", phonetic: "pee-taa-jee", english: "Father (Respectful)" },
                { devanagari: "माताजी", latin: "Mataji", phonetic: "maa-taa-jee", english: "Mother (Respectful)" }
            ],
            challenge: { devanagari: "माताजी और पिताजी", latin: "Mataji aur Pitaji", instruction: "Say 'Mataji aur Pitaji'." }
        },
        {
            day: 47,
            month: 2,
            week: 7,
            title: "Siblings: Bhaiya & Didi",
            hindiTitle: "भैया और दीदी",
            theme: "Family & Society",
            objective: "Use the two most common social honorifics in Indian society.",
            tip: "In India, older brother is 'Bhaiya' and older sister is 'Didi'. Strangers are also warmly addressed as Bhaiya or Didi!",
            phrases: [
                { devanagari: "बड़ा भाई", latin: "Bada bhai / Bhaiya", phonetic: "buh-daa bhaa-ee", english: "Older brother" },
                { devanagari: "बड़ी बहन", latin: "Badi behen / Didi", phonetic: "buh-dee beh-hun", english: "Older sister" }
            ],
            challenge: { devanagari: "नमस्ते भैया", latin: "Namaste bhaiya", instruction: "Greet someone warmly: 'Namaste bhaiya'." }
        },
        {
            day: 48,
            month: 2,
            week: 7,
            title: "Grandparents: Dadaji vs Nanaji",
            hindiTitle: "दादाजी और नानाजी",
            theme: "Family Culture",
            objective: "Understand Hindi's distinct maternal vs paternal family tree.",
            tip: "Father's parents = Dadaji & Dadiji. Mother's parents = Nanaji & Naniji.",
            phrases: [
                { devanagari: "दादाजी", latin: "Dadaji", phonetic: "daa-daa-jee", english: "Paternal Grandfather" },
                { devanagari: "दादीजी", latin: "Dadiji", phonetic: "daa-dee-jee", english: "Paternal Grandmother" },
                { devanagari: "नानाजी", latin: "Nanaji", phonetic: "naa-naa-jee", english: "Maternal Grandfather" },
                { devanagari: "नानीजी", latin: "Naniji", phonetic: "naa-nee-jee", english: "Maternal Grandmother" }
            ],
            challenge: { devanagari: "दादाजी और दादीजी", latin: "Dadaji aur Dadiji", instruction: "Say 'Dadaji aur Dadiji'." }
        },
        {
            day: 49,
            month: 2,
            week: 7,
            title: "Children & Friends: Beta, Beti, Dost",
            hindiTitle: "बेटा, बेटी, दोस्त",
            theme: "Family & Friends",
            objective: "Talk about sons, daughters, and best friends.",
            tip: "Dost = Friend. Yaar = Buddy/Pal.",
            phrases: [
                { devanagari: "बेटा", latin: "Beta", phonetic: "bay-taa", english: "Son" },
                { devanagari: "बेटी", latin: "Beti", phonetic: "bay-tee", english: "Daughter" },
                { devanagari: "दोस्त", latin: "Dost", phonetic: "dost", english: "Friend" },
                { devanagari: "मेरा अच्छा दोस्त", latin: "Mera achha dost", phonetic: "may-rah uch-haa dost", english: "My good friend" }
            ],
            challenge: { devanagari: "मेरा अच्छा दोस्त", latin: "Mera achha dost", instruction: "Say 'Mera achha dost' (My good friend)." }
        },
        {
            day: 50,
            month: 2,
            week: 8,
            title: "Grammar Secret: Subject-Object-Verb (SOV)",
            hindiTitle: "हिंदी वाक्य रचना (SOV)",
            theme: "Grammar Architecture",
            objective: "Understand why Hindi puts verbs at the end.",
            tip: "English says: 'I drink water' (S-V-O). Hindi says: 'Main paani peeta hoon' (I water drink = S-O-V)!",
            phrases: [
                { devanagari: "मैं पानी पीता हूँ", latin: "Main paani peeta hoon", phonetic: "main paa-nee pee-taa hoon", english: "I drink water (Male)" },
                { devanagari: "मैं पानी पीती हूँ", latin: "Main paani peeti hoon", phonetic: "main paa-nee pee-tee hoon", english: "I drink water (Female)" }
            ],
            challenge: { devanagari: "मैं पानी पीता हूँ", latin: "Main paani peeta hoon", instruction: "Speak the SOV sentence 'Main paani peeta hoon'." }
        },
        {
            day: 51,
            month: 2,
            week: 8,
            title: "I Eat Food: Khaana Khaana",
            hindiTitle: "खाना खाना",
            theme: "Verbs",
            objective: "Learn the common verb 'to eat' (Khaana).",
            tip: "In Hindi, 'Khaana' is both the noun (Food) and the verb (To eat)!",
            phrases: [
                { devanagari: "मैं खाना खाता हूँ", latin: "Main khaana khaata hoon", phonetic: "main khaa-naa khaa-taa hoon", english: "I eat food (Male)" },
                { devanagari: "मैं खाना खाती हूँ", latin: "Main khaana khaati hoon", phonetic: "main khaa-naa khaa-tee hoon", english: "I eat food (Female)" }
            ],
            challenge: { devanagari: "मैं खाना खाता हूँ", latin: "Main khaana khaata hoon", instruction: "Say 'Main khaana khaata hoon'." }
        },
        {
            day: 52,
            month: 2,
            week: 8,
            title: "Going & Coming: Jaana aur Aana",
            hindiTitle: "जाना और आना",
            theme: "Movement Verbs",
            objective: "Express going somewhere and arriving.",
            tip: "Jaana = to go. Aana = to come.",
            phrases: [
                { devanagari: "मैं घर जा रहा हूँ", latin: "Main ghar jaa raha hoon", phonetic: "main ghur jaa ruh-haa hoon", english: "I am going home (Male)" },
                { devanagari: "वह आ रहा है", latin: "Voh aa raha hai", phonetic: "voh aa ruh-haa hai", english: "He is coming" }
            ],
            challenge: { devanagari: "मैं घर जा रहा हूँ", latin: "Main ghar jaa raha hoon", instruction: "Say 'Main ghar jaa raha hoon'." }
        },
        {
            day: 53,
            month: 2,
            week: 8,
            title: "What Time is It?",
            hindiTitle: "कितने बजे हैं?",
            theme: "Telling Time",
            objective: "Ask and tell the time of day.",
            tip: "'Kitne baje hain?' = What time is it? 'Do baje hain' = It is two o'clock.",
            phrases: [
                { devanagari: "कितने बजे हैं?", latin: "Kitne baje hain?", phonetic: "kit-nay buh-jay hain?", english: "What time is it?" },
                { devanagari: "तीन बजे हैं", latin: "Teen baje hain", phonetic: "teen buh-jay hain", english: "It is three o'clock" }
            ],
            challenge: { devanagari: "कितने बजे हैं?", latin: "Kitne baje hain?", instruction: "Ask the time: 'Kitne baje hain?'." }
        },
        {
            day: 54,
            month: 2,
            week: 8,
            title: "Talking About the Weather",
            hindiTitle: "मौसम: गर्मी, सर्दी, बारिश",
            theme: "Weather",
            objective: "Comment on heat, cold, and rain in India.",
            tip: "Mausam = Weather. Garmi = Heat. Sardi = Cold. Baarish = Rain.",
            phrases: [
                { devanagari: "आज बहुत गर्मी है", latin: "Aaj bahut garmi hai", phonetic: "aaj buh-hoot gur-mee hai", english: "It is very hot today" },
                { devanagari: "आज मौसम बहुत अच्छा है", latin: "Aaj mausam bahut achha hai", phonetic: "aaj mow-sum buh-hoot uch-haa hai", english: "The weather is very pleasant today" }
            ],
            challenge: { devanagari: "आज बहुत गर्मी है", latin: "Aaj bahut garmi hai", instruction: "Say 'Aaj bahut garmi hai'." }
        },
        {
            day: 55,
            month: 2,
            week: 8,
            title: "I Like This: Mujhe Pasand Hai",
            hindiTitle: "मुझे यह पसंद है",
            theme: "Expressing Preferences",
            objective: "Share what you love and enjoy.",
            tip: "'Mujhe [thing] pasand hai' = I like [thing]. 'Mujhe chai pasand hai' = I like tea.",
            phrases: [
                { devanagari: "मुझे यह पसंद है", latin: "Mujhe yeh pasand hai", phonetic: "moojh-ay yeh puh-sund hai", english: "I like this" },
                { devanagari: "मुझे चाय बहुत पसंद है", latin: "Mujhe chai bahut pasand hai", phonetic: "moojh-ay chaay buh-hoot puh-sund hai", english: "I really like chai" }
            ],
            challenge: { devanagari: "मुझे चाय बहुत पसंद है", latin: "Mujhe chai bahut pasand hai", instruction: "Say 'Mujhe chai bahut pasand hai'." }
        },
        {
            day: 56,
            month: 2,
            week: 8,
            title: "I Don't Like This: Pasand Nahi",
            hindiTitle: "मुझे पसंद नहीं है",
            theme: "Dislikes",
            objective: "Politely decline things you don't care for.",
            tip: "Just add 'nahi' before 'hai'.",
            phrases: [
                { devanagari: "मुझे यह पसंद नहीं है", latin: "Mujhe yeh pasand nahi hai", phonetic: "moojh-ay yeh puh-sund nuh-hee hai", english: "I do not like this" },
                { devanagari: "मुझे मीठा पसंद नहीं", latin: "Mujhe meetha pasand nahi", phonetic: "moojh-ay mee-thaa puh-sund nuh-hee", english: "I don't like sweets" }
            ],
            challenge: { devanagari: "मुझे यह पसंद नहीं है", latin: "Mujhe yeh pasand nahi hai", instruction: "State 'Mujhe yeh pasand nahi hai'." }
        },
        {
            day: 57,
            month: 2,
            week: 8,
            title: "Talking on the Phone: Hello, Kaun Bol Raha Hai?",
            hindiTitle: "फ़ोन पर बातचीत",
            theme: "Telephone Hindi",
            objective: "Answer phone calls like a native speaker.",
            tip: "Indians answer phones saying 'Hello, kaun bol raha hai?' (Who is speaking?).",
            phrases: [
                { devanagari: "हेलो, कौन बोल रहा है?", latin: "Hello, kaun bol raha hai?", phonetic: "heh-lo, kown boal ruh-haa hai?", english: "Hello, who is speaking?" },
                { devanagari: "मेरी आवाज़ आ रही है?", latin: "Meri aawaaz aa rahi hai?", phonetic: "may-ree aa-waaz aa ruh-hee hai?", english: "Can you hear my voice?" }
            ],
            challenge: { devanagari: "हेलो, कौन बोल रहा है?", latin: "Hello, kaun bol raha hai?", instruction: "Answer phone: 'Hello, kaun bol raha hai?'." }
        },
        {
            day: 58,
            month: 2,
            week: 8,
            title: "Online Payments & QR Codes",
            hindiTitle: "यूपीआई और ऑनलाइन पेमेंट",
            theme: "Modern Tech in India",
            objective: "Pay via UPI QR code in any street shop.",
            tip: "In India, almost every fruit vendor and tea stall has a UPI QR code! Ask 'QR code kahan hai?'.",
            phrases: [
                { devanagari: "क्यूआर कोड कहाँ है?", latin: "QR code kahan hai?", phonetic: "QR code kuh-haan hai?", english: "Where is the QR code?" },
                { devanagari: "पेमेंट हो गया", latin: "Payment ho gaya", phonetic: "pay-ment ho guy-aa", english: "Payment is done!" }
            ],
            challenge: { devanagari: "पेमेंट हो गया", latin: "Payment ho gaya", instruction: "Say 'Payment ho gaya'." }
        },
        {
            day: 59,
            month: 2,
            week: 8,
            title: "Where is the Train Station?",
            hindiTitle: "रेलवे स्टेशन कहाँ है?",
            theme: "Travel & Trains",
            objective: "Navigate Indian railway stations.",
            tip: "'Gadi' means train or car. 'Platfarm' = Platform.",
            phrases: [
                { devanagari: "रेलवे स्टेशन कहाँ है?", latin: "Railway station kahan hai?", phonetic: "rail-way stay-shun kuh-haan hai?", english: "Where is the railway station?" },
                { devanagari: "ट्रेन कब आएगी?", latin: "Train kab aayegi?", phonetic: "train kub aa-yay-gee?", english: "When will the train arrive?" }
            ],
            challenge: { devanagari: "ट्रेन कब आएगी?", latin: "Train kab aayegi?", instruction: "Ask 'Train kab aayegi?'." }
        },
        {
            day: 60,
            month: 2,
            week: 8,
            title: "Month 2 Graduation: The Market Master",
            hindiTitle: "महीना २ समापन: बाज़ार की पूरी बातचीत",
            theme: "Milestone Dialogue",
            objective: "Perform a complete bargaining and payment role-play!",
            tip: "You have crossed 60 days of Hindi! You can now shop, dine, take taxis, direct drivers, and navigate cities alone.",
            phrases: [
                { devanagari: "भैया, यह कुर्ता कितने का है? थोड़ा कम कीजिए।", latin: "Bhaiya, yeh kurta kitne ka hai? Thoda kam kijiye.", phonetic: "bhaa-ee-yaa, yeh koor-taa kit-nay kaa hai? tho-daa kum kee-jee-yay.", english: "Brother, how much is this kurta? Please reduce it a bit." },
                { devanagari: "ठीक है, मैं ऑनलाइन पेमेंट कर देता हूँ।", latin: "Theek hai, main online payment kar deta hoon.", phonetic: "theek hai, main own-line pay-ment kur day-taa hoon.", english: "Alright, I will do online payment." }
            ],
            challenge: { devanagari: "भैया, यह कितने का है? थोड़ा कम कीजिए।", latin: "Bhaiya, yeh kitne ka hai? Thoda kam kijiye.", instruction: "Perform the bargaining challenge." }
        },

        // --- MONTH 3: FLUENCY, EXTENDED DIALOGUES & MASTERY (DAYS 61 - 90) ---
        {
            day: 61,
            month: 3,
            week: 9,
            title: "Past Tense: What Did You Do?",
            hindiTitle: "भूतकाल: आपने क्या किया?",
            theme: "Past Tense",
            objective: "Talk about events that happened yesterday or earlier.",
            tip: "'Kiya' = Did. 'Gaya' = Went. 'Khaaya' = Ate.",
            phrases: [
                { devanagari: "आपने क्या किया?", latin: "Aapne kya kiya?", phonetic: "aap-nay kyah kee-yaa?", english: "What did you do?" },
                { devanagari: "मैंने खाना खाया", latin: "Maine khaana khaaya", phonetic: "main-ay khaa-naa khaa-yaa", english: "I ate food" }
            ],
            challenge: { devanagari: "मैंने खाना खाया", latin: "Maine khaana khaaya", instruction: "State 'Maine khaana khaaya' (I ate food)." }
        },
        {
            day: 62,
            month: 3,
            week: 9,
            title: "Past Tense: Where Did You Go?",
            hindiTitle: "आप कहाँ गए थे?",
            theme: "Past Travel",
            objective: "Describe where you went.",
            tip: "'Gaye the' = Went (past). 'Main Delhi gaya tha' = I went to Delhi.",
            phrases: [
                { devanagari: "आप कहाँ गए थे?", latin: "Aap kahan gaye the?", phonetic: "aap kuh-haan guy-ay thay?", english: "Where did you go?" },
                { devanagari: "मैं दिल्ली गया था", latin: "Main Delhi gaya tha", phonetic: "main dil-lee guy-aa thaa", english: "I went to Delhi (Male)" }
            ],
            challenge: { devanagari: "मैं दिल्ली गया था", latin: "Main Delhi gaya tha", instruction: "Say 'Main Delhi gaya tha'." }
        },
        {
            day: 63,
            month: 3,
            week: 9,
            title: "Future Tense: What Will You Do?",
            hindiTitle: "भविष्य काल: आप क्या करेंगे?",
            theme: "Future Tense",
            objective: "Talk about tomorrow and future plans.",
            tip: "Future verbs end in '-ega', '-egi', or '-enge'. 'Karenge' = Will do.",
            phrases: [
                { devanagari: "आप क्या करेंगे?", latin: "Aap kya karenge?", phonetic: "aap kyah kuh-reng-ay?", english: "What will you do?" },
                { devanagari: "मैं कल आऊँगा", latin: "Main kal aaoonga", phonetic: "main kul aa-oon-gaa", english: "I will come tomorrow (Male)" }
            ],
            challenge: { devanagari: "मैं कल आऊँगा", latin: "Main kal aaoonga", instruction: "Say 'Main kal aaoonga' (I will come tomorrow)." }
        },
        {
            day: 64,
            month: 3,
            week: 9,
            title: "Making Plans: Let's Meet Tomorrow",
            hindiTitle: "कल मिलते हैं",
            theme: "Making Appointments",
            objective: "Set up meetups and dates with friends.",
            tip: "'Kal milte hain' = Let's meet tomorrow. 'Shaam ko' = In the evening.",
            phrases: [
                { devanagari: "कल शाम को मिलते हैं", latin: "Kal shaam ko milte hain", phonetic: "kul shaam ko mil-tay hain", english: "Let's meet tomorrow evening" },
                { devanagari: "कितने बजे?", latin: "Kitne baje?", phonetic: "kit-nay buh-jay?", english: "At what time?" }
            ],
            challenge: { devanagari: "कल शाम को मिलते हैं", latin: "Kal shaam ko milte hain", instruction: "Say 'Kal shaam ko milte hain'." }
        },
        {
            day: 65,
            month: 3,
            week: 9,
            title: "Expressing Feelings: I Am Very Happy",
            hindiTitle: "भावनाएं: मुझे बहुत खुशी है",
            theme: "Emotions",
            objective: "Express joy and delight in Hindi.",
            tip: "Khush = Happy. Khushi = Happiness.",
            phrases: [
                { devanagari: "मैं बहुत खुश हूँ", latin: "Main bahut khush hoon", phonetic: "main buh-hoot khoosh hoon", english: "I am very happy" },
                { devanagari: "यह जानकर खुशी हुई", latin: "Yeh jaankar khushi hui", phonetic: "yeh jaan-kur khoo-shee hoo-ee", english: "Glad to know this" }
            ],
            challenge: { devanagari: "मैं बहुत खुश हूँ", latin: "Main bahut khush hoon", instruction: "Say 'Main bahut khush hoon'." }
        },
        {
            day: 66,
            month: 3,
            week: 10,
            title: "Feeling Tired or Unwell",
            hindiTitle: "थकान और तबीयत",
            theme: "Health & Well-being",
            objective: "Tell someone you need rest.",
            tip: "'Thak gaya' = Got tired. 'Tabiyat theek nahi' = Not feeling well.",
            phrases: [
                { devanagari: "मैं बहुत थक गया हूँ", latin: "Main bahut thak gaya hoon", phonetic: "main buh-hoot thuk guy-aa hoon", english: "I am very tired (Male)" },
                { devanagari: "मेरी तबीयत थोड़ी खराब है", latin: "Meri tabiyat thodi kharaab hai", phonetic: "may-ree tuh-bee-yut tho-dee khuh-raab hai", english: "My health is a bit unwell" }
            ],
            challenge: { devanagari: "मैं बहुत थक गया हूँ", latin: "Main bahut thak gaya hoon", instruction: "Express fatigue: 'Main bahut thak gaya hoon'." }
        },
        {
            day: 67,
            month: 3,
            week: 10,
            title: "Asking for a Recommendation",
            hindiTitle: "आप क्या सुझाव देंगे?",
            theme: "Advice",
            objective: "Ask locals what they recommend to eat or visit.",
            tip: "'Sujhav' = Recommendation / Suggestion.",
            phrases: [
                { devanagari: "आप क्या सुझाव देंगे?", latin: "Aap kya sujhav denge?", phonetic: "aap kyah soo-jhaav dayng-ay?", english: "What do you recommend?" },
                { devanagari: "यहाँ सबसे अच्छा क्या है?", latin: "Yahan sabse achha kya hai?", phonetic: "yuh-haan sub-say uch-haa kyah hai?", english: "What is best here?" }
            ],
            challenge: { devanagari: "आप क्या सुझाव देंगे?", latin: "Aap kya sujhav denge?", instruction: "Ask 'Aap kya sujhav denge?'." }
        },
        {
            day: 68,
            month: 3,
            week: 10,
            title: "Checking In at a Hotel",
            hindiTitle: "होटल में कमरा",
            theme: "Hotel & Lodging",
            objective: "Book or check into a hotel room.",
            tip: "'Kamra' = Room. 'Ek raat ke liye' = For one night.",
            phrases: [
                { devanagari: "क्या कोई कमरा खाली है?", latin: "Kya koi kamra khaali hai?", phonetic: "kyah koy kum-raa khaa-lee hai?", english: "Is any room available?" },
                { devanagari: "एक रात का कितना किराया है?", latin: "Ek raat ka kitna kiraaya hai?", phonetic: "ayk raat kaa kit-naa kee-raa-yaa hai?", english: "How much is the rent for one night?" }
            ],
            challenge: { devanagari: "क्या कोई कमरा खाली है?", latin: "Kya koi kamra khaali hai?", instruction: "Ask 'Kya koi kamra khaali hai?'." }
        },
        {
            day: 69,
            month: 3,
            week: 10,
            title: "Connecting to WiFi & Tech",
            hindiTitle: "वाईफाई पासवर्ड क्या है?",
            theme: "Tech & Internet",
            objective: "Get internet access in cafes and hotels.",
            tip: "'WiFi password kya hai?' is understood everywhere.",
            phrases: [
                { devanagari: "वाईफाई का पासवर्ड क्या है?", latin: "WiFi ka password kya hai?", phonetic: "WiFi kaa password kyah hai?", english: "What is the WiFi password?" },
                { devanagari: "इंटरनेट नहीं चल रहा है", latin: "Internet nahi chal raha hai", phonetic: "internet nuh-hee chul ruh-haa hai", english: "The internet is not working" }
            ],
            challenge: { devanagari: "वाईफाई का पासवर्ड क्या है?", latin: "WiFi ka password kya hai?", instruction: "Ask for WiFi password." }
        },
        {
            day: 70,
            month: 3,
            week: 10,
            title: "Super-Useful Slang: Arre Yaar & Wah",
            hindiTitle: "अरे यार! और वाह!",
            theme: "Indian Expressions & Slang",
            objective: "Sound like an authentic local with native exclamations.",
            tip: "'Arre yaar!' = Oh man / Come on buddy! 'Wah!' = Wow / Bravo!",
            phrases: [
                { devanagari: "अरे यार!", latin: "Arre yaar!", phonetic: "uh-ray yaar!", english: "Oh man! / Come on buddy!" },
                { devanagari: "वाह भाई वाह!", latin: "Waah bhai waah!", phonetic: "waah bhaa-ee waah!", english: "Bravo brother, amazing!" }
            ],
            challenge: { devanagari: "अरे यार! चलो चलें", latin: "Arre yaar! Chalo chalein", instruction: "Say with feeling: 'Arre yaar! Chalo chalein'." }
        },
        {
            day: 71,
            month: 3,
            week: 11,
            title: "Asking Permissions: Can I Sit Here?",
            hindiTitle: "क्या मैं यहाँ बैठ सकता हूँ?",
            theme: "Polite Permissions",
            objective: "Ask to join a table, take photos, or enter.",
            tip: "'Sakta hoon' = Can I (male). 'Sakti hoon' = Can I (female).",
            phrases: [
                { devanagari: "क्या मैं यहाँ बैठ सकता हूँ?", latin: "Kya main yahan baith sakta hoon?", phonetic: "kyah main yuh-haan by-th suk-taa hoon?", english: "Can I sit here? (Male)" },
                { devanagari: "क्या मैं फ़ोटो ले सकता हूँ?", latin: "Kya main photo le sakta hoon?", phonetic: "kyah main photo lay suk-taa hoon?", english: "Can I take a photo?" }
            ],
            challenge: { devanagari: "क्या मैं यहाँ बैठ सकता हूँ?", latin: "Kya main yahan baith sakta hoon?", instruction: "Ask 'Kya main yahan baith sakta hoon?'." }
        },
        {
            day: 72,
            month: 3,
            week: 11,
            title: "Shopping for Gifts & Souvenirs",
            hindiTitle: "उपहार और स्मृति-चिह्न",
            theme: "Gift Shopping",
            objective: "Buy gifts for friends and family.",
            tip: "'Uphaar' = Gift. 'Mujhe doston ke liye kuch chahiye' = I want something for friends.",
            phrases: [
                { devanagari: "मुझे दोस्तों के लिए उपहार चाहिए", latin: "Mujhe doston ke liye uphaar chahiye", phonetic: "moojh-ay dos-ton kay lee-yay oop-haar chaa-hee-yay", english: "I need gifts for my friends" },
                { devanagari: "कृपया इसे पैक कर दीजिए", latin: "Kripya ise pack kar dijiye", phonetic: "krip-yah ee-say pack kur dee-jee-yay", english: "Please pack/gift-wrap this" }
            ],
            challenge: { devanagari: "कृपया इसे पैक कर दीजिए", latin: "Kripya ise pack kar dijiye", instruction: "Say 'Kripya ise pack kar dijiye'." }
        },
        {
            day: 73,
            month: 3,
            week: 11,
            title: "Expressing Agreement: Bilkul!",
            hindiTitle: "बिल्कुल! (Exactly / Absolutely)",
            theme: "Fluency Connectors",
            objective: "Show enthusiastic agreement in dialogue.",
            tip: "'Bilkul' is used to say 'Exactly!', 'Absolutely!', or '100% true!'.",
            phrases: [
                { devanagari: "बिल्कुल सही!", latin: "Bilkul sahi!", phonetic: "bil-kool suh-hee!", english: "Absolutely right!" },
                { devanagari: "मैं आपसे सहमत हूँ", latin: "Main aapse sahmat hoon", phonetic: "main aap-say suh-mut hoon", english: "I agree with you" }
            ],
            challenge: { devanagari: "बिल्कुल सही!", latin: "Bilkul sahi!", instruction: "Say 'Bilkul sahi!' with enthusiasm." }
        },
        {
            day: 74,
            month: 3,
            week: 11,
            title: "Saying Maybe & Perhaps",
            hindiTitle: "शायद (Perhaps / Maybe)",
            theme: "Nuance",
            objective: "Express uncertainty politely.",
            tip: "'Shaayad' = Maybe / Perhaps.",
            phrases: [
                { devanagari: "शायद कल", latin: "Shaayad kal", phonetic: "shaa-yud kul", english: "Maybe tomorrow" },
                { devanagari: "मुझे पक्का नहीं पता", latin: "Mujhe pakka nahi pata", phonetic: "moojh-ay puk-kaa nuh-hee puh-taa", english: "I am not sure / I don't know for sure" }
            ],
            challenge: { devanagari: "शायद कल", latin: "Shaayad kal", instruction: "Say 'Shaayad kal' (Maybe tomorrow)." }
        },
        {
            day: 75,
            month: 3,
            week: 11,
            title: "Describing Places: Beautiful & Crowded",
            hindiTitle: "सुंदर और भीड़-भाड़",
            theme: "Descriptions",
            objective: "Describe India's monuments and vibrant streets.",
            tip: "Sundar = Beautiful. Bheed = Crowd. 'Bheed-bhaad' = Crowded.",
            phrases: [
                { devanagari: "यह जगह बहुत सुंदर है", latin: "Yeh jagah bahut sundar hai", phonetic: "yeh juh-guh buh-hoot soon-dur hai", english: "This place is very beautiful" },
                { devanagari: "यहाँ बहुत भीड़ है", latin: "Yahan bahut bheed hai", phonetic: "yuh-haan buh-hoot bheed hai", english: "It is very crowded here" }
            ],
            challenge: { devanagari: "यह जगह बहुत सुंदर है", latin: "Yeh jagah bahut sundar hai", instruction: "Praise a place: 'Yeh jagah bahut sundar hai'." }
        },
        {
            day: 76,
            month: 3,
            week: 11,
            title: "Expressing Intent: I Want to Go",
            hindiTitle: "मैं जाना चाहता हूँ",
            theme: "Wants & Desires",
            objective: "Express desires using 'Chahta hoon / Chaahti hoon'.",
            tip: "Male says: 'Chahta hoon'. Female says: 'Chaahti hoon'.",
            phrases: [
                { devanagari: "मैं ताजमहल जाना चाहता हूँ", latin: "Main Taj Mahal jaana chahta hoon", phonetic: "main Taj Mahal jaa-naa chaah-taa hoon", english: "I want to go to the Taj Mahal (Male)" },
                { devanagari: "मैं हिंदी बोलना चाहता हूँ", latin: "Main Hindi bolna chahta hoon", phonetic: "main hin-dee boal-naa chaah-taa hoon", english: "I want to speak Hindi (Male)" }
            ],
            challenge: { devanagari: "मैं हिंदी बोलना चाहता हूँ", latin: "Main Hindi bolna chahta hoon", instruction: "Declare 'Main Hindi bolna chahta hoon'." }
        },
        {
            day: 77,
            month: 3,
            week: 11,
            title: "Asking Why & Explaining: Kyonki",
            hindiTitle: "क्योंकि (Because)",
            theme: "Sentence Connectors",
            objective: "Connect ideas with 'Because' (Kyonki).",
            tip: "'Kyon' = Why. 'Kyonki' = Because.",
            phrases: [
                { devanagari: "आप क्यों हँस रहे हैं?", latin: "Aap kyon hans rahe hain?", phonetic: "aap kyon huns ruh-hay hain?", english: "Why are you laughing?" },
                { devanagari: "क्योंकि मैं खुश हूँ", latin: "Kyonki main khush hoon", phonetic: "kyon-kee main khoosh hoon", english: "Because I am happy" }
            ],
            challenge: { devanagari: "क्योंकि मैं खुश हूँ", latin: "Kyonki main khush hoon", instruction: "Say 'Kyonki main khush hoon'." }
        },
        {
            day: 78,
            month: 3,
            week: 12,
            title: "Giving Blessings: Shubhkaamnayein",
            hindiTitle: "शुभकामनाएँ और बधाई",
            theme: "Celebrations & Blessings",
            objective: "Wish people well on festivals and birthdays.",
            tip: "'Shubhkaamnayein' = Best wishes. 'Badhaai ho' = Congratulations!",
            phrases: [
                { devanagari: "हार्दिक शुभकामनाएँ", latin: "Haardik shubhkaamnayein", phonetic: "haar-dik shoobh-kaam-nuh-yay", english: "Heartiest best wishes" },
                { devanagari: "बधाई हो!", latin: "Badhaai ho!", phonetic: "buh-dhaa-ee ho!", english: "Congratulations!" }
            ],
            challenge: { devanagari: "बधाई हो!", latin: "Badhaai ho!", instruction: "Say 'Badhaai ho!' (Congratulations!)." }
        },
        {
            day: 79,
            month: 3,
            week: 12,
            title: "Essential Idiom: Daal Mein Kuch Kaala Hai",
            hindiTitle: "दाल में कुछ काला है",
            theme: "Idioms & Proverbs",
            objective: "Learn India's favorite proverb for 'Something is fishy!'.",
            tip: "Literally means 'There is something black in the lentils'. It means something is suspicious!",
            phrases: [
                { devanagari: "दाल में कुछ काला है", latin: "Daal mein kuch kaala hai", phonetic: "daal mayn kooch kaa-laa hai", english: "Something is fishy / suspicious!" },
                { devanagari: "चिंता मत करो", latin: "Chinta mat karo", phonetic: "chin-taa mut kuh-ro", english: "Don't worry" }
            ],
            challenge: { devanagari: "चिंता मत करो", latin: "Chinta mat karo", instruction: "Reassure someone: 'Chinta mat karo'." }
        },
        {
            day: 80,
            month: 3,
            week: 12,
            title: "Talking About Hobbies: Sangeet aur Filmon",
            hindiTitle: "संगीत और फ़िल्में",
            theme: "Music & Bollywood",
            objective: "Discuss Indian cinema and classical music.",
            tip: "'Gaana' = Song. 'Film' = Movie. 'Sangeet' = Music.",
            phrases: [
                { devanagari: "मुझे भारतीय संगीत पसंद है", latin: "Mujhe Bharatiya sangeet pasand hai", phonetic: "moojh-ay bhaar-tee-yuh sun-geet puh-sund hai", english: "I like Indian music" },
                { devanagari: "यह गाना बहुत प्यारा है", latin: "Yeh gaana bahut pyaara hai", phonetic: "yeh gaa-naa buh-hoot pyaa-raa hai", english: "This song is very lovely" }
            ],
            challenge: { devanagari: "मुझे भारतीय संगीत पसंद है", latin: "Mujhe Bharatiya sangeet pasand hai", instruction: "Express love for music: 'Mujhe Bharatiya sangeet pasand hai'." }
        },
        {
            day: 81,
            month: 3,
            week: 12,
            title: "Describing People: Kind, Honest, Helpful",
            hindiTitle: "दयालु और मददगार",
            theme: "Character Descriptions",
            objective: "Praise the warmth of people you meet.",
            tip: "'Madadgaar' = Helpful. 'Dayalu' = Kind/compassionate.",
            phrases: [
                { devanagari: "यहाँ के लोग बहुत मददगार हैं", latin: "Yahan ke log bahut madadgaar hain", phonetic: "yuh-haan kay loag buh-hoot muh-dud-gaar hain", english: "People here are very helpful" },
                { devanagari: "आप बहुत अच्छे हैं", latin: "Aap bahut achhe hain", phonetic: "aap buh-hoot uch-hay hain", english: "You are very kind/good" }
            ],
            challenge: { devanagari: "यहाँ के लोग बहुत मददगार हैं", latin: "Yahan ke log bahut madadgaar hain", instruction: "Compliment: 'Yahan ke log bahut madadgaar hain'." }
        },
        {
            day: 82,
            month: 3,
            week: 12,
            title: "Saying 'I Am Ready': Main Taiyaar Hoon",
            hindiTitle: "मैं तैयार हूँ",
            theme: "Readiness",
            objective: "Announce readiness to head out.",
            tip: "'Taiyaar' = Ready / Prepared.",
            phrases: [
                { devanagari: "मैं तैयार हूँ", latin: "Main taiyaar hoon", phonetic: "main tie-yaar hoon", english: "I am ready" },
                { devanagari: "क्या आप तैयार हैं?", latin: "Kya aap taiyaar hain?", phonetic: "kyah aap tie-yaar hain?", english: "Are you ready?" }
            ],
            challenge: { devanagari: "मैं तैयार हूँ", latin: "Main taiyaar hoon", instruction: "Declare 'Main taiyaar hoon'." }
        },
        {
            day: 83,
            month: 3,
            week: 12,
            title: "Describing Distance: Pass vs Door",
            hindiTitle: "पास और दूर",
            theme: "Spatial Awareness",
            objective: "Ask if a place is near or far.",
            tip: "'Paas' = Near/Close. 'Door' = Far away.",
            phrases: [
                { devanagari: "क्या यह पास में है?", latin: "Kya yeh paas mein hai?", phonetic: "kyah yeh paas mayn hai?", english: "Is this nearby?" },
                { devanagari: "नहीं, यह काफ़ी दूर है", latin: "Nahin, yeh kaafi door hai", phonetic: "nuh-hee, yeh kaa-fee door hai", english: "No, this is quite far" }
            ],
            challenge: { devanagari: "क्या यह पास में है?", latin: "Kya yeh paas mein hai?", instruction: "Ask 'Kya yeh paas mein hai?'." }
        },
        {
            day: 84,
            month: 3,
            week: 12,
            title: "Expressing Certainty: Zaroor!",
            hindiTitle: "ज़रूर! (Certainly / Of course)",
            theme: "Polite Readiness",
            objective: "Accept an invitation warmly.",
            tip: "'Zaroor' means 'Of course!', 'Certainly!', or 'Without a doubt!'.",
            phrases: [
                { devanagari: "हाँ, ज़रूर!", latin: "Haan, zaroor!", phonetic: "haan, zuh-roor!", english: "Yes, certainly / of course!" },
                { devanagari: "मैं ज़रूर आऊँगा", latin: "Main zaroor aaoonga", phonetic: "main zuh-roor aa-oon-gaa", english: "I will definitely come (Male)" }
            ],
            challenge: { devanagari: "हाँ, ज़रूर!", latin: "Haan, zaroor!", instruction: "Say 'Haan, zaroor!'." }
        },
        {
            day: 85,
            month: 3,
            week: 12,
            title: "Talking About Love & Affection: Pyaar",
            hindiTitle: "प्यार और अपनापन",
            theme: "Affection",
            objective: "Express love for a place, language, or culture.",
            tip: "'Pyaar' = Love. 'Mujhe Bharat se pyaar hai' = I love India.",
            phrases: [
                { devanagari: "मुझे भारत से प्यार है", latin: "Mujhe Bharat se pyaar hai", phonetic: "moojh-ay bhaa-rut say pyaar hai", english: "I love India" },
                { devanagari: "मुझे हिंदी भाषा से प्यार है", latin: "Mujhe Hindi bhasha se pyaar hai", phonetic: "moojh-ay hin-dee bhaa-shaa say pyaar hai", english: "I love the Hindi language" }
            ],
            challenge: { devanagari: "मुझे हिंदी से प्यार है", latin: "Mujhe Hindi se pyaar hai", instruction: "State 'Mujhe Hindi se pyaar hai'." }
        },
        {
            day: 86,
            month: 3,
            week: 12,
            title: "Final Review 1: Greetings & Introductions",
            hindiTitle: "अंतिम समीक्षा १: परिचय और शिष्टाचार",
            theme: "Comprehensive Review",
            objective: "Quick-fire review of all greetings and introductions.",
            tip: "Practice speaking each phrase without looking at the transliteration!",
            phrases: [
                { devanagari: "नमस्ते, आप कैसे हैं?", latin: "Namaste, aap kaise hain?", phonetic: "nuh-muh-stay, aap kye-say hain?", english: "Hello, how are you?" },
                { devanagari: "मेरा नाम ... है और मैं ठीक हूँ।", latin: "Mera naam ... hai aur main theek hoon.", phonetic: "may-rah naam ... hai owr main theek hoon.", english: "My name is ... and I am fine." }
            ],
            challenge: { devanagari: "नमस्ते, आप कैसे हैं?", latin: "Namaste, aap kaise hain?", instruction: "Master the greeting combo." }
        },
        {
            day: 87,
            month: 3,
            week: 12,
            title: "Final Review 2: Food & Shopping",
            hindiTitle: "अंतिम समीक्षा २: खान-पान और खरीदारी",
            theme: "Comprehensive Review",
            objective: "Review bargaining and ordering food.",
            tip: "You can seamlessly order meals, control spices, and negotiate bazaar goods.",
            phrases: [
                { devanagari: "एक कप कड़क चाय और दो रोटियाँ", latin: "Ek cup kadak chai aur do rotiyan", phonetic: "ayk cup kuh-duk chaay owr doh ro-tee-yaan", english: "One cup strong tea and two rotis" },
                { devanagari: "यह कितने का है? थोड़ा कम कीजिए।", latin: "Yeh kitne ka hai? Thoda kam kijiye.", phonetic: "yeh kit-nay kaa hai? tho-daa kum kee-jee-yay.", english: "How much is this? Please reduce a little." }
            ],
            challenge: { devanagari: "एक कप कड़क चाय", latin: "Ek cup kadak chai", instruction: "Order 'Ek cup kadak chai'." }
        },
        {
            day: 88,
            month: 3,
            week: 12,
            title: "Final Review 3: Navigation & Directions",
            hindiTitle: "अंतिम समीक्षा ३: रास्ता और सफ़र",
            theme: "Comprehensive Review",
            objective: "Review street directions and hailing transport.",
            tip: "You are fully equipped to travel independently across Delhi, Mumbai, Jaipur, and Varanasi.",
            phrases: [
                { devanagari: "भैया, सीधे जाइये और लाल बत्ती से बाएँ मुड़िये।", latin: "Bhaiya, seedhe jaiye aur laal batti se baayein mudiye.", phonetic: "bhaa-ee-yaa, see-dhay jaa-ee-yay owr laal but-tee say baa-yay moo-dee-yay.", english: "Brother, go straight and turn left from the red light." },
                { devanagari: "यहाँ रोक दीजिए, धन्यवाद!", latin: "Yahan rok dijiye, dhanyavaad!", phonetic: "yuh-haan roak dee-jee-yay, dhun-yuh-vaad!", english: "Stop here please, thank you!" }
            ],
            challenge: { devanagari: "यहाँ रोक दीजिए, धन्यवाद!", latin: "Yahan rok dijiye, dhanyavaad!", instruction: "Say 'Yahan rok dijiye, dhanyavaad!'." }
        },
        {
            day: 89,
            month: 3,
            week: 12,
            title: "The Ultimate Conversational Monologue",
            hindiTitle: "संपूर्ण हिंदी भाषण",
            theme: "Fluency Speech",
            objective: "Speak a complete 3-sentence Hindi monologue expressing your journey.",
            tip: "Speak slowly, proudly, and with full confidence!",
            phrases: [
                { devanagari: "नमस्ते दोस्तों! मैंने नब्बे दिन में हिंदी सीखी है।", latin: "Namaste doston! Maine nabbe din mein Hindi seekhi hai.", phonetic: "nuh-muh-stay dos-ton! main-ay nub-bay din mayn hin-dee seekh-ee hai.", english: "Hello friends! I learned Hindi in 90 days." },
                { devanagari: "मुझे भारत और हिंदी भाषा बहुत पसंद है।", latin: "Mujhe Bharat aur Hindi bhasha bahut pasand hai.", phonetic: "moojh-ay bhaa-rut owr hin-dee bhaa-shaa buh-hoot puh-sund hai.", english: "I really like India and the Hindi language." }
            ],
            challenge: { devanagari: "मैंने नब्बे दिन में हिंदी सीखी है", latin: "Maine nabbe din mein Hindi seekhi hai", instruction: "Pronounce your graduation sentence!" }
        },
        {
            day: 90,
            month: 3,
            week: 12,
            title: "Day 90: Hindi Speaker Graduation!",
            hindiTitle: "दिवस ९०: बधाई! आप अब हिंदी बोल सकते हैं!",
            theme: "Graduation & Certificate",
            objective: "Claim your 90-Day Spoken Hindi Mastery Certificate!",
            tip: "Shabaash! (Wonderful!) You have completed all 90 days of Hindi learning. Keep speaking, keep watching Hindi movies, and keep greeting people with a warm Namaste!",
            phrases: [
                { devanagari: "बहुत बहुत धन्यवाद और फिर मिलेंगे!", latin: "Bahut bahut dhanyavaad aur phir milenge!", phonetic: "buh-hoot buh-hoot dhun-yuh-vaad owr feer mee-leng-ay!", english: "Thank you very very much and see you again!" }
            ],
            challenge: { devanagari: "बहुत बहुत धन्यवाद और फिर मिलेंगे!", latin: "Bahut bahut dhanyavaad aur phir milenge!", instruction: "Speak your final graduation line into the mic!" }
        }
    ]
};
