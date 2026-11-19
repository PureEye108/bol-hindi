// Comprehensive Hindi Learning Dataset
// Step-by-step phrases, structured curriculum course modules, dialogues, and alphabet guides.

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
            notes: "Extremely common in day-to-day spoken Hindi.",
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
            notes: "Often people also say 'Phir milenge' (See you again).",
            audioFile: null
        },
        {
            id: "greet-6",
            category: "greetings",
            devanagari: "फिर मिलेंगे",
            latin: "Phir milenge",
            phonetic: "feer mee-leng-ay",
            english: "See you again",
            notes: "The most natural and warm way to say goodbye.",
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
            notes: "Equivalent to 'You are welcome' or 'Don't worry about it'.",
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
            audioFile: "audio/phrases_2.mp3"
        },
        {
            id: "intro-2",
            category: "introductions",
            devanagari: "मेरा नाम ... है",
            latin: "Mera naam ... hai",
            phonetic: "may-rah naam ... hai",
            english: "My name is ...",
            notes: "E.g., 'Mera naam John hai'.",
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
            audioFile: "audio/phrases_3.mp3"
        },
        {
            id: "intro-6",
            category: "introductions",
            devanagari: "मैं अच्छा महसूस कर रहा हूं",
            latin: "Main achha mehsoos kar raha hoon",
            phonetic: "main uch-haa meh-soos kur ruh-haa hoon",
            english: "I am feeling good (Male speaker)",
            notes: "Females say 'kar rahi hoon' instead of 'kar raha hoon'.",
            audioFile: "audio/phrases_4.mp3"
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
            notes: "Encouraging a companion to move.",
            audioFile: "audio/phrases_7.mp3"
        },
        {
            id: "daily-5",
            category: "daily",
            devanagari: "यहाँ आओ",
            latin: "Yahan aao",
            phonetic: "yuh-haan aa-oh",
            english: "Come here",
            notes: "Polite version is 'Yahan aaiye'.",
            audioFile: "audio/phrases_8.mp3"
        },
        {
            id: "daily-6",
            category: "daily",
            devanagari: "क्या आप आ रहे हैं?",
            latin: "Kya aap aa rahe hain?",
            phonetic: "kyah aap aa ruh-hay hain",
            english: "Are you coming?",
            notes: "Useful question when planning a meetup.",
            audioFile: "audio/phrases_5.mp3"
        },
        {
            id: "daily-7",
            category: "daily",
            devanagari: "हां, मैं आ रहा हूं",
            latin: "Haan, main aa raha hoon",
            phonetic: "haan main aa ruh-haa hoon",
            english: "Yes, I am coming",
            notes: "Female speaker says 'Haan, main aa rahi hoon'.",
            audioFile: "audio/phrases_6.mp3"
        },
        {
            id: "daily-8",
            category: "daily",
            devanagari: "आप कहाँ जा रहे हैं?",
            latin: "Aap kahan jaa rahe hain?",
            phonetic: "aap kuh-haan jaa ruh-hay hain",
            english: "Where are you going?",
            notes: "Very common daily question.",
            audioFile: "audio/phrases_1.mp3"
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
            audioFile: "audio/number_one.mp3"
        },
        {
            id: "num-2",
            category: "numbers",
            devanagari: "दो",
            latin: "Do",
            phonetic: "doh",
            english: "Two (2)",
            notes: "Number 2 in Hindi.",
            audioFile: "audio/number_two.mp3"
        },
        {
            id: "num-3",
            category: "numbers",
            devanagari: "तीन",
            latin: "Teen",
            phonetic: "teen",
            english: "Three (3)",
            notes: "Number 3 in Hindi.",
            audioFile: "audio/number_three.mp3"
        },
        {
            id: "num-4",
            category: "numbers",
            devanagari: "चार",
            latin: "Chaar",
            phonetic: "chaar",
            english: "Four (4)",
            notes: "Number 4 in Hindi.",
            audioFile: "audio/number_four.mp3"
        },
        {
            id: "num-5",
            category: "numbers",
            devanagari: "पाँच",
            latin: "Paanch",
            phonetic: "paanch",
            english: "Five (5)",
            notes: "Number 5 in Hindi.",
            audioFile: "audio/number_five.mp3"
        },
        {
            id: "num-6",
            category: "numbers",
            devanagari: "छह",
            latin: "Chhah",
            phonetic: "chhah",
            english: "Six (6)",
            notes: "Number 6 in Hindi.",
            audioFile: "audio/number_six.mp3"
        },
        {
            id: "num-7",
            category: "numbers",
            devanagari: "सात",
            latin: "Saat",
            phonetic: "saat",
            english: "Seven (7)",
            notes: "Number 7 in Hindi.",
            audioFile: "audio/number_seven.mp3"
        },
        {
            id: "num-8",
            category: "numbers",
            devanagari: "आठ",
            latin: "Aath",
            phonetic: "aath",
            english: "Eight (8)",
            notes: "Number 8 in Hindi.",
            audioFile: "audio/number_eight.mp3"
        },
        {
            id: "num-9",
            category: "numbers",
            devanagari: "नौ",
            latin: "Nau",
            phonetic: "now",
            english: "Nine (9)",
            notes: "Number 9 in Hindi.",
            audioFile: "audio/number_nine.mp3"
        },
        {
            id: "num-10",
            category: "numbers",
            devanagari: "दस",
            latin: "Das",
            phonetic: "dus",
            english: "Ten (10)",
            notes: "Number 10 in Hindi.",
            audioFile: "audio/number_ten.mp3"
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

        // --- LEVEL 5: DIRECTIONS & HELP ---
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
            audioFile: "audio/family_father.mp3"
        },
        {
            id: "fam-mother",
            category: "family",
            devanagari: "माताजी",
            latin: "Mataji / Maa",
            phonetic: "maa-taa-jee",
            english: "Mother",
            notes: "Respectful term for mother.",
            audioFile: "audio/family_mother.mp3"
        },
        {
            id: "fam-older-brother",
            category: "family",
            devanagari: "बड़ा भाई",
            latin: "Bada bhai / Bhaiya",
            phonetic: "buh-daa bhaa-ee",
            english: "Older brother",
            notes: "Older brother is often called 'Bhaiya'.",
            audioFile: "audio/family_elderbrother.mp3"
        },
        {
            id: "fam-young-brother",
            category: "family",
            devanagari: "छोटा भाई",
            latin: "Chhota bhai",
            phonetic: "chho-taa bhaa-ee",
            english: "Younger brother",
            notes: "Younger brother in the family.",
            audioFile: "audio/family_youngbrother.mp3"
        },
        {
            id: "fam-older-sister",
            category: "family",
            devanagari: "बड़ी बहन",
            latin: "Badi behen / Didi",
            phonetic: "buh-dee beh-hun",
            english: "Older sister",
            notes: "Older sister is affectionately addressed as 'Didi'.",
            audioFile: "audio/family_eldersister.mp3"
        },
        {
            id: "fam-young-sister",
            category: "family",
            devanagari: "छोटी बहन",
            latin: "Chhoti behen",
            phonetic: "chho-tee beh-hun",
            english: "Younger sister",
            notes: "Younger sister.",
            audioFile: "audio/family_youngersister.mp3"
        },
        {
            id: "fam-grandfather-paternal",
            category: "family",
            devanagari: "दादाजी",
            latin: "Dadaji",
            phonetic: "daa-daa-jee",
            english: "Grandfather (Paternal / Father's father)",
            notes: "Hindi has distinct words for maternal and paternal relatives.",
            audioFile: "audio/family_dada.mp3"
        },
        {
            id: "fam-grandmother-paternal",
            category: "family",
            devanagari: "दादीजी",
            latin: "Dadiji",
            phonetic: "daa-dee-jee",
            english: "Grandmother (Paternal / Father's mother)",
            notes: "Paternal grandmother.",
            audioFile: "audio/family_dadi.mp3"
        },
        {
            id: "fam-grandfather-maternal",
            category: "family",
            devanagari: "नानाजी",
            latin: "Nanaji",
            phonetic: "naa-naa-jee",
            english: "Grandfather (Maternal / Mother's father)",
            notes: "Maternal grandfather.",
            audioFile: "audio/family_nana.mp3"
        },
        {
            id: "fam-grandmother-maternal",
            category: "family",
            devanagari: "नानीजी",
            latin: "Naniji",
            phonetic: "naa-nee-jee",
            english: "Grandmother (Maternal / Mother's mother)",
            notes: "Maternal grandmother.",
            audioFile: "audio/family_nani.mp3"
        },
        {
            id: "fam-son",
            category: "family",
            devanagari: "बेटा",
            latin: "Beta",
            phonetic: "bay-taa",
            english: "Son",
            notes: "Son / also an affectionate address for younger male.",
            audioFile: "audio/family_son.mp3"
        },
        {
            id: "fam-daughter",
            category: "family",
            devanagari: "बेटी",
            latin: "Beti",
            phonetic: "bay-tee",
            english: "Daughter",
            notes: "Daughter / affectionate address for younger female.",
            audioFile: "audio/family_daughter.mp3"
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
            audioFile: "audio/color_red.mp3"
        },
        {
            id: "col-green",
            category: "colors",
            devanagari: "हरा",
            latin: "Hara",
            phonetic: "huh-raa",
            english: "Green",
            notes: "Color green.",
            audioFile: "audio/color_green.mp3"
        },
        {
            id: "col-yellow",
            category: "colors",
            devanagari: "पीला",
            latin: "Peela",
            phonetic: "pee-laa",
            english: "Yellow",
            notes: "Color yellow.",
            audioFile: "audio/color_yellow.mp3"
        },
        {
            id: "col-white",
            category: "colors",
            devanagari: "सफ़ेद",
            latin: "Safed",
            phonetic: "suh-fayd",
            english: "White",
            notes: "Color white.",
            audioFile: "audio/color_white.mp3"
        },
        {
            id: "col-black",
            category: "colors",
            devanagari: "काला",
            latin: "Kaala",
            phonetic: "kaa-laa",
            english: "Black",
            notes: "Color black.",
            audioFile: "audio/color_black.mp3"
        },
        {
            id: "col-brown",
            category: "colors",
            devanagari: "भूरा",
            latin: "Bhoora",
            phonetic: "bhoo-raa",
            english: "Brown",
            notes: "Color brown.",
            audioFile: "audio/color_brown.mp3"
        },
        {
            id: "col-gray",
            category: "colors",
            devanagari: "स्लेटी",
            latin: "Sleti",
            phonetic: "slay-tee",
            english: "Gray",
            notes: "Color gray.",
            audioFile: "audio/color_gray.mp3"
        }
    ],

    // --- STRUCTURED 6-MODULE HINDI MASTERY COURSE ---
    courseModules: [
        {
            id: "mod-1",
            title: "Module 1: First Words & Essential Etiquette",
            hindiTitle: "पहला कदम - नमस्ते और शिष्टाचार",
            icon: "🙏",
            description: "Master universal greetings, respectful body language, expressing gratitude, and polite conversational responses.",
            lessons: [
                {
                    id: "les-1-1",
                    title: "Lesson 1: The Sacred 'Namaste' & Greetings",
                    concept: "In Hindi, greeting someone with 'Namaste' (नमस्ते) acknowledges the divinity in them. Press both palms together flat in front of your chest and give a slight respectful nod. It works morning, noon, or night!",
                    phrases: ["greet-1", "greet-7", "greet-8", "greet-5"],
                    challengePhraseId: "greet-1",
                    quiz: {
                        question: "What is the polite, universal Hindi greeting for any time of day?",
                        options: ["Shukriya", "Namaste", "Theek hai", "Haanji"],
                        correct: 1
                    }
                },
                {
                    id: "les-1-2",
                    title: "Lesson 2: Saying Thank You & Please",
                    concept: "Hindi has two main ways to say thank you: 'Dhanyavaad' (धन्यवाद) is formal and traditional, while 'Shukriya' (शुक्रिया) is common, conversational, and friendly. When asking for a favor, use 'Kripya' (कृपया).",
                    phrases: ["greet-2", "greet-3", "greet-4", "greet-10"],
                    challengePhraseId: "greet-3",
                    quiz: {
                        question: "Which of these is the most common casual way to say 'Thank you' in everyday spoken Hindi?",
                        options: ["Dhanyavaad", "Kripya", "Shukriya", "Alvida"],
                        correct: 2
                    }
                },
                {
                    id: "les-1-3",
                    title: "Lesson 3: The Golden Responses: Yes, No & Okay",
                    concept: "Saying 'Theek hai' (ठीक है) is the ultimate multi-purpose phrase in India—it means 'Okay', 'Alright', 'Got it', and 'Sounds good'. Adding 'ji' to 'Haan' (Haanji) makes 'Yes' deeply respectful.",
                    phrases: ["daily-1", "daily-2", "daily-3", "greet-9"],
                    challengePhraseId: "daily-3",
                    quiz: {
                        question: "What does 'Theek hai' mean in daily conversation?",
                        options: ["No thanks", "Okay / Alright", "Where is it?", "Come here"],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: "mod-2",
            title: "Module 2: Self-Introduction & Meeting People",
            hindiTitle: "परिचय - नाम और बातचीत",
            icon: "🤝",
            description: "Learn how to introduce yourself, state your name and home country, ask how others are doing, and build friendship.",
            lessons: [
                {
                    id: "les-2-1",
                    title: "Lesson 4: Asking Names & Introducing Yourself",
                    concept: "To ask someone's name respectfully, say 'Aapka naam kya hai?'. To answer, say 'Mera naam [Your Name] hai'. After learning their name, warmly say 'Aapse milkar khushi hui' (Nice to meet you).",
                    phrases: ["intro-1", "intro-2", "intro-7"],
                    challengePhraseId: "intro-1",
                    quiz: {
                        question: "How do you say 'My name is Alex' in Hindi?",
                        options: ["Aapka naam Alex hai", "Mera naam Alex hai", "Main Alex hoon kahan", "Alex theek hai"],
                        correct: 1
                    }
                },
                {
                    id: "les-2-2",
                    title: "Lesson 5: Inquiring About Well-Being",
                    concept: "When speaking to someone politely, ask 'Aap kaise hain?'. To reply, simply say 'Main theek hoon' (I am fine). If speaking to a female specifically, the question becomes 'Aap kaisi hain?'.",
                    phrases: ["intro-3", "intro-4", "intro-5", "intro-6"],
                    challengePhraseId: "intro-3",
                    quiz: {
                        question: "What is the polite standard way to ask someone 'How are you?'",
                        options: ["Aap kaise hain?", "Chalo chalein?", "Aap kahan se hain?", "Kya haal hai"],
                        correct: 0
                    }
                },
                {
                    id: "les-2-3",
                    title: "Lesson 6: Countries & Origins",
                    concept: "To ask someone where they are from, say 'Aap kahan se hain?'. To answer, insert your country: 'Main America / Vietnam / England se hoon'.",
                    phrases: ["intro-8", "intro-9", "daily-9"],
                    challengePhraseId: "intro-8",
                    quiz: {
                        question: "How do you say 'Where are you from?'",
                        options: ["Aap kahan jaa rahe hain?", "Aap kahan se hain?", "Aap kaise hain?", "Kripya yahan aaiye"],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: "mod-3",
            title: "Module 3: Numbers, Money & Market Bargaining",
            hindiTitle: "संख्या, पैसे और खरीदारी",
            icon: "🔢",
            description: "Gain complete confidence counting numbers 1 to 10, asking prices in bustling bazaars, and negotiating with polite charm.",
            lessons: [
                {
                    id: "les-3-1",
                    title: "Lesson 7: Foundation Numbers (1 to 5)",
                    concept: "The first five numbers in Hindi are essential for ordering items and telling quantities: Ek (1), Do (2), Teen (3), Chaar (4), Paanch (5).",
                    phrases: ["num-1", "num-2", "num-3", "num-4", "num-5"],
                    challengePhraseId: "num-1",
                    quiz: {
                        question: "What is the Hindi word for number Three (3)?",
                        options: ["Do", "Chaar", "Teen", "Paanch"],
                        correct: 2
                    }
                },
                {
                    id: "les-3-2",
                    title: "Lesson 8: Numbers (6 to 10) & Currency",
                    concept: "Continuing your numbers: Chhah (6), Saat (7), Aath (8), Nau (9), Das (10). Crucial big numbers are Bees (20), Pachaas (50), and Sau (100).",
                    phrases: ["num-6", "num-7", "num-8", "num-9", "num-10", "num-100"],
                    challengePhraseId: "num-10",
                    quiz: {
                        question: "What does 'Sau' mean?",
                        options: ["Ten (10)", "Twenty (20)", "Fifty (50)", "One Hundred (100)"],
                        correct: 3
                    }
                },
                {
                    id: "les-3-3",
                    title: "Lesson 9: Shopping & Bargaining Like a Local",
                    concept: "Whenever you point to an item in an Indian market, ask 'Yeh kitne ka hai?' (How much is this?). If the price is steep, counter with 'Yeh bahut mehanga hai!' and politely request 'Thoda kam kijiye' (Please reduce it a bit).",
                    phrases: ["shop-1", "shop-2", "shop-3", "shop-4", "shop-5"],
                    challengePhraseId: "shop-1",
                    quiz: {
                        question: "What phrase should you say to ask 'How much is this?'",
                        options: ["Yeh kitne ka hai?", "Thoda kam kijiye", "Mujhe paani chahiye", "Yeh kahan hai?"],
                        correct: 0
                    }
                }
            ]
        },
        {
            id: "mod-4",
            title: "Module 4: Food, Dining & Chai Culture",
            hindiTitle: "खाना, चाय और रेस्तरां",
            icon: "🍛",
            description: "Order legendary Indian dishes, specify your spice tolerance, order chai at tea stalls, and compliment your host.",
            lessons: [
                {
                    id: "les-4-1",
                    title: "Lesson 10: Chai Stall Secrets",
                    concept: "Chai stalls (chai ki tapri) are the social heart of India. To order, ask 'Chai milegi?' (Can I get tea?) and customize it: 'Kam cheeni' (less sugar) or 'Adrak masala chai' (ginger masala tea).",
                    phrases: ["food-4", "food-1", "daily-4"],
                    challengePhraseId: "food-4",
                    quiz: {
                        question: "How do you ask 'Can I get tea/chai?'",
                        options: ["Paani chahiye", "Chai milegi?", "Bhookh lagi hai", "Bill le aaiye"],
                        correct: 1
                    }
                },
                {
                    id: "les-4-2",
                    title: "Lesson 11: Food Ordering & Spice Control",
                    concept: "If you want to survive spicy Indian food, remember this golden phrase: 'Zyada teekha nahi' (Not too spicy!). When thirsty, ask 'Mujhe paani chahiye' (I want water).",
                    phrases: ["food-1", "food-3", "food-5", "food-6"],
                    challengePhraseId: "food-5",
                    quiz: {
                        question: "Which phrase means 'Not too spicy'?",
                        options: ["Bahut swaadisht hai", "Zyada teekha nahi", "Bhookh lagi hai", "Theek hai"],
                        correct: 1
                    }
                },
                {
                    id: "les-4-3",
                    title: "Lesson 12: Complimenting the Chef & Bill",
                    concept: "After a delicious meal, praising the food with 'Khaana bahut swaadisht hai' (The food is very delicious) will bring huge smiles. Then conclude with 'Bill le aaiye' (Please bring the bill).",
                    phrases: ["food-2", "food-6", "greet-3"],
                    challengePhraseId: "food-2",
                    quiz: {
                        question: "How do you tell the waiter or host 'The food is very delicious'?",
                        options: ["Khaana bahut swaadisht hai", "Bill le aaiye", "Mujhe madad chahiye", "Thoda kam kijiye"],
                        correct: 0
                    }
                }
            ]
        },
        {
            id: "mod-5",
            title: "Module 5: Getting Around, Taxis & Directions",
            hindiTitle: "रास्ता, ऑटो-रिक्शा और सफ़र",
            icon: "🧭",
            description: "Navigate cities with ease: hailing auto-rickshaws, asking for meters, giving street directions, and asking for help.",
            lessons: [
                {
                    id: "les-5-1",
                    title: "Lesson 13: Finding Facilities & Asking for Help",
                    concept: "When in need of help, say 'Mujhe madad chahiye' (I need help). If you need a washroom, ask 'Bathroom kahan hai?' (Where is the bathroom?). Point to an address and ask 'Yeh kahan hai?'.",
                    phrases: ["dir-1", "dir-2", "dir-3"],
                    challengePhraseId: "dir-2",
                    quiz: {
                        question: "How do you ask 'Where is the bathroom?' in Hindi?",
                        options: ["Yeh kahan hai?", "Bathroom kahan hai?", "Madad kijiye", "Seedhe jaiye"],
                        correct: 1
                    }
                },
                {
                    id: "les-5-2",
                    title: "Lesson 14: Giving Street Directions",
                    concept: "When directing an auto driver or taxi: 'Seedhe jaiye' (Go straight), 'Baayein mudiye' (Turn left), 'Daayein mudiye' (Turn right), and 'Yahan rukiye' (Stop here please).",
                    phrases: ["dir-4", "dir-5", "dir-6", "dir-7"],
                    challengePhraseId: "dir-4",
                    quiz: {
                        question: "What does 'Seedhe jaiye' mean?",
                        options: ["Turn left", "Turn right", "Go straight", "Stop here"],
                        correct: 2
                    }
                },
                {
                    id: "les-5-3",
                    title: "Lesson 15: Understanding Speed & Comprehension",
                    concept: "Native speakers often speak fast. Politely ask them 'Kripya dheere boliye' (Please speak slowly), or tell them 'Mujhe samajh nahi aaya' (I didn't understand).",
                    phrases: ["daily-10", "daily-11", "daily-9"],
                    challengePhraseId: "daily-11",
                    quiz: {
                        question: "If someone is speaking too fast, what should you say?",
                        options: ["Kripya dheere boliye", "Chalo chalein", "Yahan aao", "Main theek hoon"],
                        correct: 0
                    }
                }
            ]
        },
        {
            id: "mod-6",
            title: "Module 6: People, Family & Relationships",
            hindiTitle: "परिवार और रिश्ते",
            icon: "👨‍👩‍👧",
            description: "Understand the deep culture of Indian family relationships, respectful terms of address, and honorific suffixes like 'ji'.",
            lessons: [
                {
                    id: "les-6-1",
                    title: "Lesson 16: Parents & The Honorific 'Ji'",
                    concept: "In Hindi, adding 'ji' after a title shows deep respect and warmth: 'Pitaji' (Father) and 'Mataji' (Mother). You can also affectionately say 'Papa' and 'Maa'.",
                    phrases: ["fam-father", "fam-mother"],
                    challengePhraseId: "fam-father",
                    quiz: {
                        question: "Why do Hindi speakers attach 'ji' to words like 'Pitaji' or 'Haanji'?",
                        options: ["It signifies plural", "It conveys deep honor, polite respect, and affection", "It is for questions only", "It indicates anger"],
                        correct: 1
                    }
                },
                {
                    id: "les-6-2",
                    title: "Lesson 17: Siblings & Addressing Elders",
                    concept: "An older brother is called 'Bhaiya' or 'Bada bhai'. An older sister is respectfully and affectionately addressed as 'Didi' or 'Badi behen'. In India, strangers are also often politely called Bhaiya or Didi!",
                    phrases: ["fam-older-brother", "fam-young-brother", "fam-older-sister", "fam-young-sister"],
                    challengePhraseId: "fam-older-brother",
                    quiz: {
                        question: "What is the common respectful way to address an older sister or young woman in India?",
                        options: ["Bhaiya", "Didi", "Dadiji", "Naniji"],
                        correct: 1
                    }
                },
                {
                    id: "les-6-3",
                    title: "Lesson 18: Grandparents & Children",
                    concept: "Hindi uniquely distinguishes paternal from maternal grandparents: Dadaji & Dadiji (Father's side), and Nanaji & Naniji (Mother's side). Children are called Beta (Son) and Beti (Daughter).",
                    phrases: ["fam-grandfather-paternal", "fam-grandmother-paternal", "fam-grandfather-maternal", "fam-grandmother-maternal", "fam-son", "fam-daughter"],
                    challengePhraseId: "fam-grandfather-paternal",
                    quiz: {
                        question: "Who are 'Nanaji' and 'Naniji'?",
                        options: ["Paternal Grandparents (Father's side)", "Maternal Grandparents (Mother's side)", "Older brothers", "Neighbors"],
                        correct: 1
                    }
                }
            ]
        }
    ],

    // --- LONG CONVERSATIONS & REAL DIALOGUES ---
    conversations: [
        {
            id: "conv-chai",
            title: "Meeting a Friend at a Chai Stall",
            hindiTitle: "दोस्त से मिलना और चाय पीना",
            description: "A friendly, warm everyday catchup between two close friends meeting at an Indian tea corner.",
            icon: "☕",
            dialogues: [
                {
                    speaker: "Rahul",
                    avatar: "👨‍🦱",
                    devanagari: "नमस्ते अमित! कैसे हो भाई?",
                    latin: "Namaste Amit! Kaise ho bhai?",
                    phonetic: "nuh-muh-stay uh-mit! kye-say ho bhaa-ee?",
                    english: "Hello Amit! How are you brother?"
                },
                {
                    speaker: "Amit",
                    avatar: "🧑",
                    devanagari: "अरे राहुल! मैं बिल्कुल ठीक हूँ। तुम कैसे हो?",
                    latin: "Are Rahul! Main bilkul theek hoon. Tum kaise ho?",
                    phonetic: "uh-ray raa-hool! main bil-kool theek hoon. toom kye-say ho?",
                    english: "Hey Rahul! I am totally fine. How are you?"
                },
                {
                    speaker: "Rahul",
                    avatar: "👨‍🦱",
                    devanagari: "सब बढ़िया। बहुत दिन बाद मिले!",
                    latin: "Sab badhiya. Bahut din baad mile!",
                    phonetic: "sub budh-ee-yaa. buh-hoot din baad mee-lay!",
                    english: "Everything is great. We met after such a long time!"
                },
                {
                    speaker: "Amit",
                    avatar: "🧑",
                    devanagari: "हाँ यार! चलो एक-एक गर्म चाय पीते हैं।",
                    latin: "Haan yaar! Chalo ek-ek garam chai peete hain.",
                    phonetic: "haan yaar! chuh-lo ayk ayk guh-rum chaay pee-tay hain.",
                    english: "Yes buddy! Let's drink a cup of hot chai each."
                },
                {
                    speaker: "Rahul",
                    avatar: "👨‍🦱",
                    devanagari: "भैया, दो कड़क मसाला चाय देना, कम चीनी के साथ।",
                    latin: "Bhaiya, do kadak masala chai dena, kam cheeni ke saath.",
                    phonetic: "bhaa-ee-yaa, doh kuh-duk muh-saa-laa chaay day-naa, kum chee-nee kay saath.",
                    english: "Brother, give two strong masala teas, with less sugar."
                },
                {
                    speaker: "Tea Vendor",
                    avatar: "👳",
                    devanagari: "हाँ साहब, अभी दो मिनट में ताज़ा चाय बनाता हूँ।",
                    latin: "Haan sahab, abhi do minute mein taaza chai banata hoon.",
                    phonetic: "haan saa-hub, uh-bhee doh mi-nut mayn taa-zaa chaay buh-naa-taa hoon.",
                    english: "Yes sir, making fresh tea in just two minutes."
                },
                {
                    speaker: "Amit",
                    avatar: "🧑",
                    devanagari: "और बताओ, तुम्हारा नया काम कैसा चल रहा है?",
                    latin: "Aur batao, tumhara naya kaam kaisa chal raha hai?",
                    phonetic: "owr buh-taa-o, toom-haa-raa nuh-yaa kaam kye-saa chul ruh-haa hai?",
                    english: "Tell me more, how is your new work going?"
                },
                {
                    speaker: "Rahul",
                    avatar: "👨‍🦱",
                    devanagari: "काफ़ी व्यस्त रहता हूँ, लेकिन सब बहुत अच्छा चल रहा है।",
                    latin: "Kaafi vyast rehta hoon, lekin sab bahut achha chal raha hai.",
                    phonetic: "kaa-fee vyust reh-taa hoon, lay-kin sub buh-hoot uch-haa chul ruh-haa hai.",
                    english: "I stay quite busy, but everything is going very well."
                },
                {
                    speaker: "Amit",
                    avatar: "🧑",
                    devanagari: "वाह! यह चाय सच में बहुत स्वादिष्ट और कड़क है।",
                    latin: "Waah! Yeh chai sach mein bahut swaadisht aur kadak hai.",
                    phonetic: "waah! yeh chaay such mayn buh-hoot svaa-disht owr kuh-duk hai.",
                    english: "Wow! This tea really is very delicious and strong."
                },
                {
                    speaker: "Rahul",
                    avatar: "👨‍🦱",
                    devanagari: "बिलकुल! चलो शाम को फिर मिलेंगे। अपना ख्याल रखना।",
                    latin: "Bilkul! Chalo shaam ko phir milenge. Apna khayal rakhna.",
                    phonetic: "bil-kool! chuh-lo shaam ko feer mee-leng-ay. up-naa khyaa-al rukh-naa.",
                    english: "Absolutely! Let's meet again in the evening. Take care of yourself."
                }
            ]
        },
        {
            id: "conv-restaurant",
            title: "Ordering Food at a Restaurant",
            hindiTitle: "रेस्तरां में खाना मंगाना",
            description: "A complete dialogue for seating, asking recommendations, customizing spice levels, and getting the bill.",
            icon: "🍛",
            dialogues: [
                {
                    speaker: "Customer",
                    avatar: "🙋",
                    devanagari: "नमस्ते, क्या हमें दो लोगों के लिए एक टेबल मिल सकती है?",
                    latin: "Namaste, kya humein do logon ke liye ek table mil sakti hai?",
                    phonetic: "nuh-muh-stay, kyah hoo-mayn doh lo-gon kay lee-yay ayk tay-bul mil suk-tee hai?",
                    english: "Hello, can we get a table for two people?"
                },
                {
                    speaker: "Waiter",
                    avatar: "🤵",
                    devanagari: "जी हाँ ज़रूर, कृपया यहाँ बैठिए। यह रहा मेनू कार्ड।",
                    latin: "Ji haan zaroor, kripya yahan baithiye. Yeh raha menu card.",
                    phonetic: "jee haan zuh-roor, krip-yah yuh-haan by-thee-yay. yeh ruh-haa may-noo kaard.",
                    english: "Yes certainly, please sit here. Here is the menu card."
                },
                {
                    speaker: "Customer",
                    avatar: "🙋",
                    devanagari: "यहाँ का सबसे प्रसिद्ध खाना क्या है? आप क्या सुझाव देंगे?",
                    latin: "Yahan ka sabse prasiddh khaana kya hai? Aap kya sujhav denge?",
                    phonetic: "yuh-haan kaa sub-say pruh-sidh khaa-naa kyah hai? aap kyah soo-jhaav dayng-ay?",
                    english: "What is the most famous food here? What do you suggest?"
                },
                {
                    speaker: "Waiter",
                    avatar: "🤵",
                    devanagari: "हमारा बटर पनीर मसाला और दाल मखनी बहुत लोकप्रिय है।",
                    latin: "Humara butter paneer masala aur daal makhani bahut lokpriya hai.",
                    phonetic: "hoo-maa-raa buh-tur puh-neer muh-saa-laa owr daal mukh-nee buh-hoot loak-pree-yuh hai.",
                    english: "Our butter paneer masala and dal makhani are very popular."
                },
                {
                    speaker: "Customer",
                    avatar: "🙋",
                    devanagari: "बहुत बढ़िया। एक बटर पनीर, दाल मखनी और चार मक्खन रोटियाँ ले आइए।",
                    latin: "Bahut badhiya. Ek butter paneer, daal makhani aur chaar makkhan rotiyan le aaiye.",
                    phonetic: "buh-hoot budh-ee-yaa. ayk buh-tur puh-neer, daal mukh-nee owr chaar muk-khun ro-tee-yaan lay aa-ee-yay.",
                    english: "Very good. Bring one butter paneer, dal makhani and four butter rotis."
                },
                {
                    speaker: "Customer",
                    avatar: "🙋",
                    devanagari: "कृपया ध्यान रखिएगा, खाने में ज़्यादा तीखा मिर्च मत डालिएगा।",
                    latin: "Kripya dhyan rakhiyega, khaane mein zyada teekha mirch mat daaliyega.",
                    phonetic: "krip-yah dhyaan rukh-ee-yay-gaa, khaa-nay mayn zyaa-daa tee-khaa mirch mut daa-lee-yay-gaa.",
                    english: "Please take care, do not make the food too spicy with hot chilies."
                },
                {
                    speaker: "Waiter",
                    avatar: "🤵",
                    devanagari: "बिल्कुल साहब, मध्यम तीखा रखेंगे। क्या कुछ ठंडा पीने के लिए लाऊँ?",
                    latin: "Bilkul sahab, madhyam teekha rakhenge. Kya kuch thanda peene ke liye laaoon?",
                    phonetic: "bil-kool saa-hub, mudh-yum tee-khaa rukh-eng-ay. kyah kooch thun-daa pee-nay kay lee-yay laa-oon?",
                    english: "Certainly sir, we will keep it medium spicy. Shall I bring something cold to drink?"
                },
                {
                    speaker: "Customer",
                    avatar: "🙋",
                    devanagari: "हाँ, दो ठंडी मीठी लस्सी भी साथ में ले आइएगा।",
                    latin: "Haan, do thandi meethi lassi bhi saath mein le aaiyega.",
                    phonetic: "haan, doh thun-dee mee-thee lus-see bhee saath mayn lay aa-ee-yay-gaa.",
                    english: "Yes, also bring two cold sweet lassis along with it."
                },
                {
                    speaker: "Customer",
                    avatar: "🙋",
                    devanagari: "वाह भाई, खाना सच में बहुत लाजवाब और स्वादिष्ट था!",
                    latin: "Waah bhai, khaana sach mein bahut laajawaab aur swaadisht tha!",
                    phonetic: "waah bhaa-ee, khaa-naa such mayn buh-hoot laa-juh-waab owr svaa-disht thaa!",
                    english: "Wow brother, the food truly was outstanding and delicious!"
                },
                {
                    speaker: "Customer",
                    avatar: "🙋",
                    devanagari: "भैया, कृपया बिल ले आइए। क्या आप ऑनलाइन पेमेंट लेते हैं?",
                    latin: "Bhaiya, kripya bill le aaiye. Kya aap online payment lete hain?",
                    phonetic: "bhaa-ee-yaa, krip-yah bill lay aa-ee-yay. kyah aap own-line pay-ment lay-tay hain?",
                    english: "Brother, please bring the bill. Do you accept online payment?"
                }
            ]
        },
        {
            id: "conv-taxi",
            title: "Taking an Auto-Rickshaw & Bargaining",
            hindiTitle: "ऑटो-रिक्शा और रास्ता पूछना",
            description: "Essential real-world travel dialogue: negotiating fare, giving street directions, and paying the driver.",
            icon: "🛺",
            dialogues: [
                {
                    speaker: "Passenger",
                    avatar: "🧳",
                    devanagari: "भैया, क्या आप कनाट प्लेस चलेंगे?",
                    latin: "Bhaiya, kya aap Connaught Place chalenge?",
                    phonetic: "bhaa-ee-yaa, kyah aap kuh-naat plays chul-eng-ay?",
                    english: "Brother, will you go to Connaught Place?"
                },
                {
                    speaker: "Driver",
                    avatar: "👨‍✈️",
                    devanagari: "हाँ साहब, बिल्कुल चलेंगे। बैठिए।",
                    latin: "Haan sahab, bilkul chalenge. Baithiye.",
                    phonetic: "haan saa-hub, bil-kool chul-eng-ay. by-thee-yay.",
                    english: "Yes sir, absolutely will go. Please sit."
                },
                {
                    speaker: "Passenger",
                    avatar: "🧳",
                    devanagari: "वहाँ तक का कितना किराया लेंगे?",
                    latin: "Wahan tak ka kitna kiraaya lenge?",
                    phonetic: "wuh-haan tuk kaa kit-naa kee-raa-yaa layng-ay?",
                    english: "How much fare will you charge till there?"
                },
                {
                    speaker: "Driver",
                    avatar: "👨‍✈️",
                    devanagari: "दो सौ रुपये लगेंगे साहब।",
                    latin: "Do sau rupaye lagenge sahab.",
                    phonetic: "doh sow roo-puh-yay luh-geng-ay saa-hub.",
                    english: "It will cost two hundred rupees, sir."
                },
                {
                    speaker: "Passenger",
                    avatar: "🧳",
                    devanagari: "अरे, यह तो बहुत ज़्यादा है! कृपया मीटर से चलिए।",
                    latin: "Are, yeh toh bahut zyada hai! Kripya meter se chaliye.",
                    phonetic: "uh-ray, yeh toh buh-hoot zyaa-daa hai! krip-yah mee-tur say chul-ee-yay.",
                    english: "Oh, that is way too much! Please go by the meter."
                },
                {
                    speaker: "Driver",
                    avatar: "👨‍✈️",
                    devanagari: "साहब मीटर खराब है, चलिए एक सौ पचास दे देना।",
                    latin: "Sahab meter kharaab hai, chaliye ek sau pachaas de dena.",
                    phonetic: "saa-hub mee-tur khuh-raab hai, chul-ee-yay ayk sow puh-chaas day day-naa.",
                    english: "Sir the meter is broken, alright just give one hundred fifty."
                },
                {
                    speaker: "Passenger",
                    avatar: "🧳",
                    devanagari: "एक सौ बीस रुपये ठीक है, और जल्दी चलिएगा, जाम मत लगाना।",
                    latin: "Ek sau bees rupaye theek hai, aur jaldi chaliyega, jaam mat lagana.",
                    phonetic: "ayk sow bees roo-puh-yay theek hai, owr jul-dee chul-ee-yay-gaa, jaam mut luh-gaa-naa.",
                    english: "One hundred twenty rupees is fair, and drive quickly, avoid traffic jams."
                },
                {
                    speaker: "Driver",
                    avatar: "👨‍✈️",
                    devanagari: "ठीक है साहब, बैठिए, मैं सीधे शॉर्टकट रास्ते से चलता हूँ।",
                    latin: "Theek hai sahab, baithiye, main seedhe shortcut raaste se chalta hoon.",
                    phonetic: "theek hai saa-hub, by-thee-yay, main see-dhay shoart-cut raas-tay say chul-taa hoon.",
                    english: "Alright sir, sit, I will go straight through a shortcut route."
                },
                {
                    speaker: "Passenger",
                    avatar: "🧳",
                    devanagari: "यहाँ आगे लाल बत्ती से दाएँ मुड़ना, फिर मेट्रो स्टेशन के पास रोक देना।",
                    latin: "Yahan aage laal batti se daayein mudna, phir metro station ke paas rok dena.",
                    phonetic: "yuh-haan aa-gay laal but-tee say daa-yay mood-naa, feer met-ro stay-shun kay paas roak day-naa.",
                    english: "Turn right ahead at the red traffic light, then stop near the metro station."
                },
                {
                    speaker: "Passenger",
                    avatar: "🧳",
                    devanagari: "बस यहाँ रोक दीजिए। यह लीजिए आपके एक सौ बीस रुपये। धन्यवाद!",
                    latin: "Bas yahan rok dijiye. Yeh lijiye aapke ek sau bees rupaye. Dhanyavaad!",
                    phonetic: "bus yuh-haan roak dee-jee-yay. yeh lee-jee-yay aap-kay ayk sow bees roo-puh-yay. dhun-yuh-vaad!",
                    english: "Just stop here. Here are your one hundred twenty rupees. Thank you!"
                }
            ]
        }
    ]
};
