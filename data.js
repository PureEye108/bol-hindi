// Comprehensive Hindi Learning Dataset
// Step-by-step phrases with Devanagari script, Latin transliteration (Hinglish), English meaning, and phonetic breakdown.

const HINDI_DATA = {
    alphabet: {
        vowels: [
            { devanagari: "अ", latin: "a", phonetic: "u in cup", example: "अमर (Amar)" },
            { devanagari: "आ", latin: "aa / ā", phonetic: "a in father", example: "आम (Aam - mango)" },
            { devanagari: "इ", latin: "i", phonetic: "i in sit", example: "इधर (Idhar - here)" },
            { devanagari: "ई", latin: "ee / ī", phonetic: "ee in meet", example: "ईख (Eekh - sugarcane)" },
            { devanagari: "उ", latin: "u", phonetic: "u in put", example: "उठ (Uth - get up)" },
            { devanagari: "ऊ", latin: "oo / ū", phonetic: "oo in boot", example: "ऊन (Oon - wool)" },
            { devanagari: "ऋ", latin: "ri", phonetic: "ri in rhythm", example: "ऋषि (Rishi - sage)" },
            { devanagari: "ए", latin: "e", phonetic: "ay in play", example: "एक (Ek - one)" },
            { devanagari: "ऐ", latin: "ai", phonetic: "ai in hair / cat", example: "ऐनक (Ainak - glasses)" },
            { devanagari: "ओ", latin: "o", phonetic: "o in boat", example: "ओस (Oas - dew)" },
            { devanagari: "औ", latin: "au", phonetic: "ow in cow", example: "और (Aur - and)" },
            { devanagari: "अं", latin: "am / an", phonetic: "nasal m/n", example: "अंगूर (Angoor - grapes)" }
        ],
        consonants: [
            { devanagari: "क", latin: "k", phonetic: "k in kite", example: "कल (Kal - yesterday/tomorrow)" },
            { devanagari: "ख", latin: "kh", phonetic: "aspirated k (k+h)", example: "खाना (Khaana - food/eat)" },
            { devanagari: "ग", latin: "g", phonetic: "g in go", example: "गाना (Gaana - song/sing)" },
            { devanagari: "घ", latin: "gh", phonetic: "aspirated g", example: "घर (Ghar - house/home)" },
            { devanagari: "च", latin: "ch", phonetic: "ch in chair", example: "चाय (Chai - tea)" },
            { devanagari: "छ", latin: "chh", phonetic: "aspirated ch", example: "छोटा (Chhota - small)" },
            { devanagari: "ज", latin: "j", phonetic: "j in joy", example: "जल (Jal - water)" },
            { devanagari: "झ", latin: "jh", phonetic: "aspirated j", example: "झूठ (Jhooth - lie)" },
            { devanagari: "ट", latin: "t (hard)", phonetic: "retroflex t (curled tongue)", example: "टमाटर (Tamaatar - tomato)" },
            { devanagari: "ठ", latin: "th (hard)", phonetic: "aspirated retroflex t", example: "ठंडा (Thanda - cold)" },
            { devanagari: "ड", latin: "d (hard)", phonetic: "retroflex d", example: "डाल (Daal - branch)" },
            { devanagari: "ढ", latin: "dh (hard)", phonetic: "aspirated retroflex d", example: "ढक्कन (Dhakkan - lid)" },
            { devanagari: "त", latin: "t (soft)", phonetic: "soft dental t (Spanish t)", example: "तुम (Tum - you)" },
            { devanagari: "थ", latin: "th (soft)", phonetic: "aspirated dental th (think)", example: "थोड़ा (Thoda - a little)" },
            { devanagari: "द", latin: "d (soft)", phonetic: "soft dental d (the)", example: "दिल (Dil - heart)" },
            { devanagari: "ध", latin: "dh (soft)", phonetic: "aspirated dental dh", example: "धन्यवाद (Dhanyavaad - thank you)" },
            { devanagari: "न", latin: "n", phonetic: "n in no", example: "नमस्ते (Namaste - hello)" },
            { devanagari: "प", latin: "p", phonetic: "p in pen", example: "पानी (Paani - water)" },
            { devanagari: "फ", latin: "ph / f", phonetic: "aspirated p / f in fit", example: "फल (Phal - fruit)" },
            { devanagari: "ब", latin: "b", phonetic: "b in boy", example: "बड़ा (Bada - big)" },
            { devanagari: "भ", latin: "bh", phonetic: "aspirated b", example: "भारत (Bhaarat - India)" },
            { devanagari: "म", latin: "m", phonetic: "m in mother", example: "माँ (Maa - mother)" },
            { devanagari: "य", latin: "y", phonetic: "y in yes", example: "यह (Yeh - this)" },
            { devanagari: "र", latin: "r", phonetic: "tapped r", example: "रात (Raat - night)" },
            { devanagari: "ल", latin: "l", phonetic: "l in love", example: "लोग (Log - people)" },
            { devanagari: "व", latin: "v / w", phonetic: "v/w in between", example: "वह (Voh - that/he/she)" },
            { devanagari: "श", latin: "sh", phonetic: "sh in ship", example: "शुक्रिया (Shukriya - thank you)" },
            { devanagari: "स", latin: "s", phonetic: "s in sun", example: "सुबह (Subah - morning)" },
            { devanagari: "ह", latin: "h", phonetic: "h in home", example: "हाँ (Haan - yes)" }
        ]
    },
    categories: [
        { id: "all", name: "🌟 All Phrases", icon: "🌐" },
        { id: "greetings", name: "Level 1: Greetings & Politeness", icon: "🙏" },
        { id: "introductions", name: "Level 2: Introductions", icon: "🤝" },
        { id: "daily", name: "Level 3: Everyday Survival", icon: "💬" },
        { id: "numbers", name: "Level 4: Numbers & Counting", icon: "🔢" },
        { id: "directions", name: "Level 5: Directions & Help", icon: "🧭" },
        { id: "food", name: "Level 6: Food & Dining", icon: "🍛" },
        { id: "shopping", name: "Level 7: Shopping & Travel", icon: "🛍️" },
        { id: "family", name: "Level 8: Family & Relations", icon: "👨‍👩‍👧" },
        { id: "colors", name: "Bonus: Colors", icon: "🎨" }
    ],
    phrases: [
        // --- LEVEL 1: GREETINGS & POLITENESS ---
        {
            id: "greet-1",
            category: "greetings",
            devanagari: "नमस्ते",
            latin: "Namaste",
            phonetic: "nuh-muh-stay",
            english: "Hello / Greetings",
            notes: "Universal formal & friendly greeting used anytime of day with folded palms.",
            audioFile: null
        },
        {
            id: "greet-2",
            category: "greetings",
            devanagari: "धन्यवाद",
            latin: "Dhanyavaad",
            phonetic: "dhun-yuh-vaad",
            english: "Thank you (Formal)",
            notes: "Traditional formal expression of gratitude in Hindi.",
            audioFile: null
        },
        {
            id: "greet-3",
            category: "greetings",
            devanagari: "शुक्रिया",
            latin: "Shukriya",
            phonetic: "shook-ree-yah",
            english: "Thank you (Common / Conversational)",
            notes: "Extremely common in day-to-day spoken Hindi (Hinglish/Urdu origin).",
            audioFile: null
        },
        {
            id: "greet-4",
            category: "greetings",
            devanagari: "कृपया",
            latin: "Kripya",
            phonetic: "krip-yah",
            english: "Please",
            notes: "Used to politely ask for something or request assistance.",
            audioFile: null
        },
        {
            id: "greet-5",
            category: "greetings",
            devanagari: "अलविदा",
            latin: "Alvida",
            phonetic: "uhl-vee-daa",
            english: "Goodbye / Farewell",
            notes: "People also often say 'Phir milenge' (See you again).",
            audioFile: null
        },
        {
            id: "greet-6",
            category: "greetings",
            devanagari: "फिर मिलेंगे",
            latin: "Phir milenge",
            phonetic: "feer mee-leng-ay",
            english: "See you again",
            notes: "The most natural and warm way to say goodbye to friends or colleagues.",
            audioFile: null
        },
        {
            id: "greet-7",
            category: "greetings",
            devanagari: "सुप्रभात",
            latin: "Suprabhaat",
            phonetic: "soo-pruh-bhaat",
            english: "Good morning",
            notes: "Used in the morning, polite and formal.",
            audioFile: null
        },
        {
            id: "greet-8",
            category: "greetings",
            devanagari: "शुभ रात्रि",
            latin: "Shubh raatri",
            phonetic: "shoobh raat-ree",
            english: "Good night",
            notes: "Said before going to sleep.",
            audioFile: null
        },
        {
            id: "greet-9",
            category: "greetings",
            devanagari: "माफ़ कीजिये",
            latin: "Maaf kijiye",
            phonetic: "maaf kee-jee-yay",
            english: "Excuse me / Sorry",
            notes: "Polite way to apologize or get someone's attention.",
            audioFile: null
        },
        {
            id: "greet-10",
            category: "greetings",
            devanagari: "कोई बात नहीं",
            latin: "Koi baat nahi",
            phonetic: "koy baat nuh-hee",
            english: "No problem / It doesn't matter",
            notes: "Equivalent to 'You're welcome' or 'Don't worry about it'.",
            audioFile: null
        },

        // --- LEVEL 2: INTRODUCTIONS ---
        {
            id: "intro-1",
            category: "introductions",
            devanagari: "आपका नाम क्या है?",
            latin: "Aapka naam kya hai?",
            phonetic: "aap-kaa naam kyah hai",
            english: "What is your name? (Polite)",
            notes: "'Aapka' is the polite respectful form of 'your'.",
            audioFile: "audio/phrases_2.wav"
        },
        {
            id: "intro-2",
            category: "introductions",
            devanagari: "मेरा नाम ... है",
            latin: "Mera naam ... hai",
            phonetic: "may-rah naam ... hai",
            english: "My name is ...",
            notes: "Replace the dots with your name, e.g., 'Mera naam John hai'.",
            audioFile: null
        },
        {
            id: "intro-3",
            category: "introductions",
            devanagari: "आप कैसे हैं?",
            latin: "Aap kaise hain?",
            phonetic: "aap kye-say hain",
            english: "How are you? (To a male / general polite)",
            notes: "Use 'Aap kaisi hain?' when speaking specifically to a female.",
            audioFile: null
        },
        {
            id: "intro-4",
            category: "introductions",
            devanagari: "मैं ठीक हूँ",
            latin: "Main theek hoon",
            phonetic: "main theek hoon",
            english: "I am fine / good",
            notes: "Standard friendly answer to 'How are you?'.",
            audioFile: null
        },
        {
            id: "intro-5",
            category: "introductions",
            devanagari: "आप कैसा महसूस कर रहे हैं?",
            latin: "Aap kaisa mehsoos kar rahe hain?",
            phonetic: "aap kye-saa meh-soos kur rah-hay hain",
            english: "How are you feeling?",
            notes: "Inquiring about someone's health or emotional state.",
            audioFile: "audio/phrases_3.wav"
        },
        {
            id: "intro-6",
            category: "introductions",
            devanagari: "मैं अच्छा महसूस कर रहा हूं",
            latin: "Main achha mehsoos kar raha hoon",
            phonetic: "main uch-haa meh-soos kur ruh-haa hoon",
            english: "I am feeling good (Male speaker)",
            notes: "Females say 'kar rahi hoon' instead of 'kar raha hoon'.",
            audioFile: "audio/phrases_4.wav"
        },
        {
            id: "intro-7",
            category: "introductions",
            devanagari: "आपसे मिलकर खुशी हुई",
            latin: "Aapse milkar khushi hui",
            phonetic: "aap-say mil-kar khoo-shee hoo-ee",
            english: "Nice to meet you",
            notes: "Great phrase to build warmth in introductions.",
            audioFile: null
        },
        {
            id: "intro-8",
            category: "introductions",
            devanagari: "आप कहाँ से हैं?",
            latin: "Aap kahan se hain?",
            phonetic: "aap kuh-haan say hain",
            english: "Where are you from?",
            notes: "Asking someone's hometown or country.",
            audioFile: null
        },
        {
            id: "intro-9",
            category: "introductions",
            devanagari: "मैं ... से हूँ",
            latin: "Main ... se hoon",
            phonetic: "main ... say hoon",
            english: "I am from ...",
            notes: "E.g., 'Main America se hoon' (I am from America).",
            audioFile: null
        },

        // --- LEVEL 3: EVERYDAY SURVIVAL ---
        {
            id: "daily-1",
            category: "daily",
            devanagari: "हाँ",
            latin: "Haan",
            phonetic: "haan (nasal)",
            english: "Yes",
            notes: "Polite variation is 'Haanji'.",
            audioFile: null
        },
        {
            id: "daily-2",
            category: "daily",
            devanagari: "नहीं",
            latin: "Nahin",
            phonetic: "nuh-hee (nasal)",
            english: "No",
            notes: "Polite variation is 'Nahin ji'.",
            audioFile: null
        },
        {
            id: "daily-3",
            category: "daily",
            devanagari: "ठीक है",
            latin: "Theek hai",
            phonetic: "theek hai",
            english: "Okay / Alright",
            notes: "One of the most frequently used conversational phrases in India.",
            audioFile: null
        },
        {
            id: "daily-4",
            category: "daily",
            devanagari: "चलो चलें",
            latin: "Chalo chalein",
            phonetic: "chuh-lo chuh-lay",
            english: "Let's go",
            notes: "Encouraging a group or companion to start moving.",
            audioFile: "audio/phrases_7.wav"
        },
        {
            id: "daily-5",
            category: "daily",
            devanagari: "यहाँ आओ",
            latin: "Yahan aao",
            phonetic: "yuh-haan aa-oh",
            english: "Come here",
            notes: "Polite version is 'Yahan aaiye'.",
            audioFile: "audio/phrases_8.wav"
        },
        {
            id: "daily-6",
            category: "daily",
            devanagari: "क्या आप आ रहे हैं?",
            latin: "Kya aap aa rahe hain?",
            phonetic: "kyah aap aa ruh-hay hain",
            english: "Are you coming?",
            notes: "Useful question when planning a meetup.",
            audioFile: "audio/phrases_5.wav"
        },
        {
            id: "daily-7",
            category: "daily",
            devanagari: "हां, मैं आ रहा हूं",
            latin: "Haan, main aa raha hoon",
            phonetic: "haan main aa ruh-haa hoon",
            english: "Yes, I am coming",
            notes: "Female speaker says 'Haan, main aa rahi hoon'.",
            audioFile: "audio/phrases_6.wav"
        },
        {
            id: "daily-8",
            category: "daily",
            devanagari: "आप कहाँ जा रहे हैं?",
            latin: "Aap kahan jaa rahe hain?",
            phonetic: "aap kuh-haan jaa ruh-hay hain",
            english: "Where are you going?",
            notes: "Very common daily question.",
            audioFile: "audio/phrases_1.wav"
        },
        {
            id: "daily-9",
            category: "daily",
            devanagari: "क्या आप अंग्रेज़ी बोलते हैं?",
            latin: "Kya aap angrezi bolte hain?",
            phonetic: "kyah aap ung-ray-zee boal-tay hain",
            english: "Do you speak English?",
            notes: "Essential question for travelers in India.",
            audioFile: null
        },
        {
            id: "daily-10",
            category: "daily",
            devanagari: "मुझे समझ नहीं आया",
            latin: "Mujhe samajh nahi aaya",
            phonetic: "moojh-ay suh-mujh nuh-hee aa-yaa",
            english: "I didn't understand",
            notes: "Use whenever someone speaks too fast or with unfamiliar words.",
            audioFile: null
        },
        {
            id: "daily-11",
            category: "daily",
            devanagari: "कृपया धीरे बोलिये",
            latin: "Kripya dheere boliye",
            phonetic: "krip-yah dhee-ray boal-ee-yay",
            english: "Please speak slowly",
            notes: "Helps native speakers adjust their speed for you.",
            audioFile: null
        },

        // --- LEVEL 4: NUMBERS & COUNTING ---
        {
            id: "num-1",
            category: "numbers",
            devanagari: "एक",
            latin: "Ek",
            phonetic: "ay-k",
            english: "One (1)",
            notes: "Number 1 in Hindi.",
            audioFile: "audio/number_one.wav"
        },
        {
            id: "num-2",
            category: "numbers",
            devanagari: "दो",
            latin: "Do",
            phonetic: "doh",
            english: "Two (2)",
            notes: "Number 2 in Hindi.",
            audioFile: "audio/number_two.wav"
        },
        {
            id: "num-3",
            category: "numbers",
            devanagari: "तीन",
            latin: "Teen",
            phonetic: "teen",
            english: "Three (3)",
            notes: "Number 3 in Hindi.",
            audioFile: "audio/number_three.wav"
        },
        {
            id: "num-4",
            category: "numbers",
            devanagari: "चार",
            latin: "Chaar",
            phonetic: "chaar",
            english: "Four (4)",
            notes: "Number 4 in Hindi.",
            audioFile: "audio/number_four.wav"
        },
        {
            id: "num-5",
            category: "numbers",
            devanagari: "पाँच",
            latin: "Paanch",
            phonetic: "paanch",
            english: "Five (5)",
            notes: "Number 5 in Hindi.",
            audioFile: "audio/number_five.wav"
        },
        {
            id: "num-6",
            category: "numbers",
            devanagari: "छह",
            latin: "Chhah",
            phonetic: "chhah",
            english: "Six (6)",
            notes: "Number 6 in Hindi.",
            audioFile: "audio/number_six.wav"
        },
        {
            id: "num-7",
            category: "numbers",
            devanagari: "सात",
            latin: "Saat",
            phonetic: "saat",
            english: "Seven (7)",
            notes: "Number 7 in Hindi.",
            audioFile: "audio/number_seven.wav"
        },
        {
            id: "num-8",
            category: "numbers",
            devanagari: "आठ",
            latin: "Aath",
            phonetic: "aath",
            english: "Eight (8)",
            notes: "Number 8 in Hindi.",
            audioFile: "audio/number_eight.wav"
        },
        {
            id: "num-9",
            category: "numbers",
            devanagari: "नौ",
            latin: "Nau",
            phonetic: "now",
            english: "Nine (9)",
            notes: "Number 9 in Hindi.",
            audioFile: "audio/number_nine.wav"
        },
        {
            id: "num-10",
            category: "numbers",
            devanagari: "दस",
            latin: "Das",
            phonetic: "dus",
            english: "Ten (10)",
            notes: "Number 10 in Hindi.",
            audioFile: "audio/number_ten.wav"
        },
        {
            id: "num-20",
            category: "numbers",
            devanagari: "बीस",
            latin: "Bees",
            phonetic: "bees",
            english: "Twenty (20)",
            notes: "Important number for shopping and auto fares.",
            audioFile: null
        },
        {
            id: "num-50",
            category: "numbers",
            devanagari: "पचास",
            latin: "Pachaas",
            phonetic: "puh-chaas",
            english: "Fifty (50)",
            notes: "Very useful for currency notes.",
            audioFile: null
        },
        {
            id: "num-100",
            category: "numbers",
            devanagari: "सौ",
            latin: "Sau",
            phonetic: "sow",
            english: "One Hundred (100)",
            notes: "'Ek Sau' or just 'Sau'.",
            audioFile: null
        },

        // --- LEVEL 5: DIRECTIONS & ASKING FOR HELP ---
        {
            id: "dir-1",
            category: "directions",
            devanagari: "मुझे मदद चाहिए",
            latin: "Mujhe madad chahiye",
            phonetic: "moojh-ay muh-dud chaa-hee-yay",
            english: "I need help",
            notes: "'Madad' means help / assistance.",
            audioFile: null
        },
        {
            id: "dir-2",
            category: "directions",
            devanagari: "बाथरूम कहाँ है?",
            latin: "Bathroom kahan hai?",
            phonetic: "baath-room kuh-haan hai",
            english: "Where is the bathroom / washroom?",
            notes: "'Shauchalaya' is formal, but 'Bathroom' is widely recognized.",
            audioFile: null
        },
        {
            id: "dir-3",
            category: "directions",
            devanagari: "यह कहाँ है?",
            latin: "Yeh kahan hai?",
            phonetic: "yeh kuh-haan hai",
            english: "Where is this?",
            notes: "Point to a map or card and ask this.",
            audioFile: null
        },
        {
            id: "dir-4",
            category: "directions",
            devanagari: "सीधे जाइये",
            latin: "Seedhe jaiye",
            phonetic: "see-dhay jaa-ee-yay",
            english: "Go straight",
            notes: "Common navigation direction given by taxi or auto drivers.",
            audioFile: null
        },
        {
            id: "dir-5",
            category: "directions",
            devanagari: "बाएँ मुड़िये",
            latin: "Baayein mudiye",
            phonetic: "baa-yay moo-dee-yay",
            english: "Turn left",
            notes: "Direction instruction.",
            audioFile: null
        },
        {
            id: "dir-6",
            category: "directions",
            devanagari: "दाएँ मुड़िये",
            latin: "Daayein mudiye",
            phonetic: "daa-yay moo-dee-yay",
            english: "Turn right",
            notes: "Direction instruction.",
            audioFile: null
        },
        {
            id: "dir-7",
            category: "directions",
            devanagari: "यहाँ रुकिए",
            latin: "Yahan rukiye",
            phonetic: "yuh-haan roo-kee-yay",
            english: "Stop here please",
            notes: "Essential phrase when riding a cab, rickshaw or bus.",
            audioFile: null
        },

        // --- LEVEL 6: FOOD & DINING ---
        {
            id: "food-1",
            category: "food",
            devanagari: "मुझे पानी चाहिए",
            latin: "Mujhe paani chahiye",
            phonetic: "moojh-ay paa-nee chaa-hee-yay",
            english: "I want water",
            notes: "'Paani' is the Hindi word for water.",
            audioFile: null
        },
        {
            id: "food-2",
            category: "food",
            devanagari: "खाना बहुत स्वादिष्ट है",
            latin: "Khaana bahut swaadisht hai",
            phonetic: "khaa-naa buh-hoot svaa-disht hai",
            english: "The food is very delicious",
            notes: "One of the best compliments you can pay to an Indian chef or host!",
            audioFile: null
        },
        {
            id: "food-3",
            category: "food",
            devanagari: "मुझे भूख लगी है",
            latin: "Mujhe bhookh lagi hai",
            phonetic: "moojh-ay bhoo-kh luh-gee hai",
            english: "I am hungry",
            notes: "Expressing appetite.",
            audioFile: null
        },
        {
            id: "food-4",
            category: "food",
            devanagari: "चाय मिलेगी?",
            latin: "Chai milegi?",
            phonetic: "chaay mee-lay-gee",
            english: "Can I get tea / chai?",
            notes: "Asking at a tea stall or cafe.",
            audioFile: null
        },
        {
            id: "food-5",
            category: "food",
            devanagari: "ज़्यादा तीखा नहीं",
            latin: "Zyada teekha nahi",
            phonetic: "zyaa-daa tee-khaa nuh-hee",
            english: "Not too spicy",
            notes: "Crucial survival phrase if you are sensitive to spicy chilies.",
            audioFile: null
        },
        {
            id: "food-6",
            category: "food",
            devanagari: "बिल ले आइए",
            latin: "Bill le aaiye",
            phonetic: "bill lay aa-ee-yay",
            english: "Please bring the bill / check",
            notes: "Asking for the restaurant tab.",
            audioFile: null
        },

        // --- LEVEL 7: SHOPPING & TRAVEL ---
        {
            id: "shop-1",
            category: "shopping",
            devanagari: "यह कितने का है?",
            latin: "Yeh kitne ka hai?",
            phonetic: "yeh kit-nay kaa hai",
            english: "How much is this?",
            notes: "The #1 phrase for local bazaars and street shopping.",
            audioFile: null
        },
        {
            id: "shop-2",
            category: "shopping",
            devanagari: "यह बहुत महंगा है",
            latin: "Yeh bahut mehanga hai",
            phonetic: "yeh buh-hoot men-guh hai",
            english: "This is too expensive",
            notes: "Classic opening line for bargaining.",
            audioFile: null
        },
        {
            id: "shop-3",
            category: "shopping",
            devanagari: "थोड़ा कम कीजिये",
            latin: "Thoda kam kijiye",
            phonetic: "tho-daa kum kee-jee-yay",
            english: "Please reduce the price a little",
            notes: "Polite bargaining request in markets.",
            audioFile: null
        },
        {
            id: "shop-4",
            category: "shopping",
            devanagari: "मुझे यह पसंद है",
            latin: "Mujhe yeh pasand hai",
            phonetic: "moojh-ay yeh puh-sund hai",
            english: "I like this",
            notes: "Expressing preference.",
            audioFile: null
        },
        {
            id: "shop-5",
            category: "shopping",
            devanagari: "क्या आप कार्ड लेते हैं?",
            latin: "Kya aap card lete hain?",
            phonetic: "kyah aap card lay-tay hain",
            english: "Do you accept credit/debit card?",
            notes: "Asking about electronic payment methods.",
            audioFile: null
        },

        // --- LEVEL 8: FAMILY & RELATIONS ---
        {
            id: "fam-father",
            category: "family",
            devanagari: "पिताजी",
            latin: "Pitaji / Papa",
            phonetic: "pee-taa-jee",
            english: "Father",
            notes: "Adding 'ji' conveys honor and deep respect.",
            audioFile: "audio/family_father.wav"
        },
        {
            id: "fam-mother",
            category: "family",
            devanagari: "माताजी",
            latin: "Mataji / Maa",
            phonetic: "maa-taa-jee",
            english: "Mother",
            notes: "Respectful term for mother.",
            audioFile: "audio/family_mother.wav"
        },
        {
            id: "fam-older-brother",
            category: "family",
            devanagari: "बड़ा भाई",
            latin: "Bada bhai / Bhaiya",
            phonetic: "buh-daa bhaa-ee",
            english: "Older brother",
            notes: "Older brother is often called 'Bhaiya'.",
            audioFile: "audio/family_elderbrother.wav"
        },
        {
            id: "fam-young-brother",
            category: "family",
            devanagari: "छोटा भाई",
            latin: "Chhota bhai",
            phonetic: "chho-taa bhaa-ee",
            english: "Younger brother",
            notes: "Younger brother in the family.",
            audioFile: "audio/family_youngbrother.wav"
        },
        {
            id: "fam-older-sister",
            category: "family",
            devanagari: "बड़ी बहन",
            latin: "Badi behen / Didi",
            phonetic: "buh-dee beh-hun",
            english: "Older sister",
            notes: "Older sister is affectionately and respectfully addressed as 'Didi'.",
            audioFile: "audio/family_eldersister.wav"
        },
        {
            id: "fam-young-sister",
            category: "family",
            devanagari: "छोटी बहन",
            latin: "Chhoti behen",
            phonetic: "chho-tee beh-hun",
            english: "Younger sister",
            notes: "Younger sister.",
            audioFile: "audio/family_youngersister.wav"
        },
        {
            id: "fam-grandfather-paternal",
            category: "family",
            devanagari: "दादाजी",
            latin: "Dadaji",
            phonetic: "daa-daa-jee",
            english: "Grandfather (Paternal / Father's father)",
            notes: "Hindi has distinct words for maternal and paternal relatives.",
            audioFile: "audio/family_dada.wav"
        },
        {
            id: "fam-grandmother-paternal",
            category: "family",
            devanagari: "दादीजी",
            latin: "Dadiji",
            phonetic: "daa-dee-jee",
            english: "Grandmother (Paternal / Father's mother)",
            notes: "Paternal grandmother.",
            audioFile: "audio/family_dadi.wav"
        },
        {
            id: "fam-grandfather-maternal",
            category: "family",
            devanagari: "नानाजी",
            latin: "Nanaji",
            phonetic: "naa-naa-jee",
            english: "Grandfather (Maternal / Mother's father)",
            notes: "Maternal grandfather.",
            audioFile: "audio/family_nana.wav"
        },
        {
            id: "fam-grandmother-maternal",
            category: "family",
            devanagari: "नानीजी",
            latin: "Naniji",
            phonetic: "naa-nee-jee",
            english: "Grandmother (Maternal / Mother's mother)",
            notes: "Maternal grandmother.",
            audioFile: "audio/family_nani.wav"
        },
        {
            id: "fam-son",
            category: "family",
            devanagari: "बेटा",
            latin: "Beta",
            phonetic: "bay-taa",
            english: "Son",
            notes: "Son / also an affectionate address for younger male.",
            audioFile: "audio/family_son.wav"
        },
        {
            id: "fam-daughter",
            category: "family",
            devanagari: "बेटी",
            latin: "Beti",
            phonetic: "bay-tee",
            english: "Daughter",
            notes: "Daughter / affectionate address for younger female.",
            audioFile: "audio/family_daughter.wav"
        },

        // --- BONUS: COLORS ---
        {
            id: "col-red",
            category: "colors",
            devanagari: "लाल",
            latin: "Laal",
            phonetic: "laal",
            english: "Red",
            notes: "Color red.",
            audioFile: "audio/color_red.wav"
        },
        {
            id: "col-green",
            category: "colors",
            devanagari: "हरा",
            latin: "Hara",
            phonetic: "huh-raa",
            english: "Green",
            notes: "Color green.",
            audioFile: "audio/color_green.wav"
        },
        {
            id: "col-yellow",
            category: "colors",
            devanagari: "पीला",
            latin: "Peela",
            phonetic: "pee-laa",
            english: "Yellow",
            notes: "Color yellow.",
            audioFile: "audio/color_yellow.wav"
        },
        {
            id: "col-white",
            category: "colors",
            devanagari: "सफ़ेद",
            latin: "Safed",
            phonetic: "suh-fayd",
            english: "White",
            notes: "Color white.",
            audioFile: "audio/color_white.wav"
        },
        {
            id: "col-black",
            category: "colors",
            devanagari: "काला",
            latin: "Kaala",
            phonetic: "kaa-laa",
            english: "Black",
            notes: "Color black.",
            audioFile: "audio/color_black.wav"
        },
        {
            id: "col-brown",
            category: "colors",
            devanagari: "भूरा",
            latin: "Bhoora",
            phonetic: "bhoo-raa",
            english: "Brown",
            notes: "Color brown.",
            audioFile: "audio/color_brown.wav"
        },
        {
            id: "col-gray",
            category: "colors",
            devanagari: "स्लेटी / धूसर",
            latin: "Sleti / Dhoosar",
            phonetic: "slay-tee",
            english: "Gray",
            notes: "Color gray.",
            audioFile: "audio/color_gray.wav"
        }
    ]
};
