// Major Indian Languages Translation Dictionary
const translations = {
    en: {
        appTitle: "Scam Shield", appSubtitle: "Offline Scam Protector", totalChecked: "Total Checked", scamsFound: "Scams Found",
        pasteLabel: "Paste SMS or Upload Screenshot", pasteBtn: "📋 Paste", uploadBtn: "📷 Upload",
        textareaPlaceholder: "Paste message here or upload a screenshot...", ocrLoading: "⏳ Scanning image for text... Please wait.",
        tryExamples: "Try quick examples:", checkBtn: "Check Message 🔍", listenBtn: "🔊 Listen", shareBtn: "📲 Share",
        reportBtn: "🚨 Report a New Scam Trend", historyTitle: "🕘 Test History Log", clearHistory: "Clear History",
        emptyHistory: "No checked messages in history yet.", helplineText: "Cybercrime Helpline:",
        modalTitle: "🚨 Report New Scam Pattern", modalDesc: "Enter details of the new scam message:",
        modalPlaceholder: "Type scam message or details...", submitReport: "Submit Report"
    },
    hi: {
        appTitle: "स्कैम शील्ड", appSubtitle: "ऑफ़लाइन धोखाधड़ी सुरक्षा", totalChecked: "कुल जाँच की गई", scamsFound: "स्कैम मिले",
        pasteLabel: "एसएमएस पेस्ट करें या स्क्रीनशॉट अपलोड करें", pasteBtn: "📋 पेस्ट", uploadBtn: "📷 अपलोड",
        textareaPlaceholder: "यहाँ संदेश पेस्ट करें या स्क्रीनशॉट अपलोड करें...", ocrLoading: "⏳ छवि से टेक्स्ट स्कैन हो रहा है... कृपया प्रतीक्षा करें।",
        tryExamples: "त्वरित उदाहरण आज़माएं:", checkBtn: "संदेश जांचें 🔍", listenBtn: "🔊 सुनें", shareBtn: "📲 शेयर",
        reportBtn: "🚨 नए स्कैम की रिपोर्ट करें", historyTitle: "🕘 परीक्षण इतिहास लॉग", clearHistory: "इतिहास साफ़ करें",
        emptyHistory: "इतिहास में अभी तक कोई संदेश नहीं है।", helplineText: "साइबर क्राइम हेल्पलाइन:",
        modalTitle: "🚨 नए स्कैम पैटर्न की रिपोर्ट करें", modalDesc: "नए स्कैम संदेश का विवरण दर्ज करें:",
        modalPlaceholder: "स्कैम संदेश या विवरण टाइप करें...", submitReport: "रिपोर्ट सबमिट करें"
    },
    te: {
        appTitle: "Scam Shield", appSubtitle: "మోసాల నుండి రక్షణ (Offline)", totalChecked: "Total Checked", scamsFound: "Scams Found",
        pasteLabel: "మెసేజ్ పేస్ట్ చేయండి లేదా ఫోటో అప్లోడ్ చేయండి", pasteBtn: "📋 పేస్ట్", uploadBtn: "📷 అప్లోడ్",
        textareaPlaceholder: "ఇక్కడ మెసేజ్ పేస్ట్ చేయండి...", ocrLoading: "⏳ ఫోటో స్కాన్ అవుతుంది... దయచేసి వేచి ఉండండి.",
        tryExamples: "ఉదాహరణల ద్వారా చెక్ చేయండి:", checkBtn: "తనిఖీ చేయి / Check 🔍", listenBtn: "🔊 వినండి", shareBtn: "📲 షేర్",
        reportBtn: "🚨 కొత్త స్కామ్ రిపోర్ట్ చేయండి", historyTitle: "🕘 చరిత్ర లాగ్ (History Log)", clearHistory: "చరిత్ర తొలగించు",
        emptyHistory: "ఇదివరకు చెక్ చేసిన మెసేజ్ చరిత్ర లేదు.", helplineText: "సైబర్ క్రైమ్ హెల్ప్‌లైన్:",
        modalTitle: "🚨 కొత్త స్కామ్ వివరాలు తెలపండి", modalDesc: "మీకు వచ్చిన కొత్త మోసపూరిత మెసేజ్ వివరాలు రాయండి:",
        modalPlaceholder: "కొత్త స్కామ్ మెసేజ్ లేదా వివరాలు రాయండి...", submitReport: "సమర్పించు (Submit)"
    },
    ta: {
        appTitle: "ஊழல் காப்பகம்", appSubtitle: "இணைய மோசடி பாதுகாப்பு", totalChecked: "மொத்தம் சோதிக்கப்பட்டது", scamsFound: "மோசடிகள் கண்டறியப்பட்டன",
        pasteLabel: "SMS ஐ ஒட்டவும் அல்லது ஸ்கிரீன்ஷாட்டை பதிவேற்றவும்", pasteBtn: "📋 ஒட்டு", uploadBtn: "📷 பதிவேற்று",
        textareaPlaceholder: "செய்தியை இங்கு ஒட்டவும்...", ocrLoading: "⏳ படம் ஸ்கேன் செய்யப்படுகிறது...",
        tryExamples: "உதாரணங்களை முயற்சிக்கவும்:", checkBtn: "செய்தியை சரிபார்க்கவும் 🔍", listenBtn: "🔊 கேள்", shareBtn: "📲 பகிர்",
        reportBtn: "🚨 புதிய மோசடியை புகாரளி", historyTitle: "🕘 வரலாற்று பதிவு", clearHistory: "வரலாற்றை அழி",
        emptyHistory: "வரலாறு காலியாக உள்ளது.", helplineText: "சைபர் கிரைம் உதவி எண்:",
        modalTitle: "🚨 புதிய மோசடி வடிவத்தை புகாரளி", modalDesc: "விவரங்களை உள்ளிடவும்:",
        modalPlaceholder: "செய்தி விவரங்களை தட்டச்சு செய்க...", submitReport: "சமர்ப்பிக்கவும்"
    },
    ml: {
        appTitle: "സ്കാം ഷീൽഡ്", appSubtitle: "ഓഫ്‌ലൈൻ തട്ടിപ്പ് പ്രതിരോധം", totalChecked: "ആകെ പരിശോധിച്ചത്", scamsFound: "കണ്ടെത്തിയ തട്ടിപ്പുകൾ",
        pasteLabel: "SMS ഒട്ടിക്കുക അല്ലെങ്കിൽ സ്ക്രീൻഷോട്ട് അപ്‌ലോഡ് ചെയ്യുക", pasteBtn: "📋 ഒട്ടിക്കുക", uploadBtn: "📷 അപ്‌ലോഡ്",
        textareaPlaceholder: "സന്ദേശം ഇവിടെ ഒട്ടിക്കുക...", ocrLoading: "⏳ ഇമേജ് സ്കാൻ ചെയ്യുന്നു...",
        tryExamples: "ഉദാഹരണങ്ങൾ പരിശോധിക്കുക:", checkBtn: "സന്ദേശം പരിശോധിക്കുക 🔍", listenBtn: "🔊 കേൾക്കുക", shareBtn: "📲 പങ്കിടുക",
        reportBtn: "🚨 പുതിയ തട്ടിപ്പ് റിപ്പോർട്ട് ചെയ്യുക", historyTitle: "🕘 ചരിത്ര ലോഗ്", clearHistory: "ചരിത്രം മായ്ക്കുക",
        emptyHistory: "ചരിത്രമില്ല.", helplineText: "സൈബർ ക്രൈം ഹെൽപ്പ്‌ലൈൻ:",
        modalTitle: "🚨 പുതിയ തട്ടിപ്പ് റിപ്പോർട്ട് ചെയ്യുക", modalDesc: "വിവരങ്ങൾ നൽകുക:",
        modalPlaceholder: "വിവരങ്ങൾ ടൈപ്പ് ചെയ്യുക...", submitReport: "സമർപ്പിക്കുക"
    },
    kn: {
        appTitle: "ಸ್ಕ್ಯಾಮ್ ಶೀಲ್ಡ್", appSubtitle: "ಆಫ್‌ಲೈನ್ ವಂಚನೆ ರಕ್ಷಣೆ", totalChecked: "ಒಟ್ಟು ಪರಿಶೀಲಿಸಲಾಗಿದೆ", scamsFound: "ಪತ್ತೆಯಾದ ವಂಚನೆಗಳು",
        pasteLabel: "SMS ಅಂಟಿಸಿ ಅಥವಾ ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ", pasteBtn: "📋 ಅಂಟಿಸಿ", uploadBtn: "📷 ಅಪ್‌ಲೋಡ್",
        textareaPlaceholder: "ಸಂದೇಶವನ್ನು ಇಲ್ಲಿ ಅಂಟಿಸಿ...", ocrLoading: "⏳ ಚಿತ್ರವನ್ನು ಸ್ಕ್ಯಾನ್ ಮಾಡಲಾಗುತ್ತಿದೆ...",
        tryExamples: "ಉದಾಹರಣೆಗಳನ್ನು ಪ್ರಯತ್ನಿಸಿ:", checkBtn: "ಪರಿಶೀಲಿಸಿ 🔍", listenBtn: "🔊 ಆಲಿಸಿ", shareBtn: "📲 ಹಂಚಿಕೊಳ್ಳಿ",
        reportBtn: "🚨 ಹೊಸ ವಂಚನೆಯನ್ನು ವರದಿ ಮಾಡಿ", historyTitle: "🕘 ಇತಿಹಾಸ ಲಾಗ್", clearHistory: "ಇತಿಹಾಸ ಅಳಿಸು",
        emptyHistory: "ಯಾವುದೇ ಇತಿಹಾಸವಿಲ್ಲ.", helplineText: "ಸೈಬರ್ ಕ್ರೈಮ್ ಸಹಾಯವಾಣಿ:",
        modalTitle: "🚨 ಹೊಸ ವಂಚನೆ ವರದಿ", modalDesc: "ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ:",
        modalPlaceholder: "ವಿವರಗಳನ್ನು ಟೈಪ್ ಮಾಡಿ...", submitReport: "ಸಲ್ಲಿಸು"
    },
    bn: {
        appTitle: "স্ক্যাম শিল্ড", appSubtitle: "অফলাইন স্ক্যাম সুরক্ষা", totalChecked: "মোট পরীক্ষিত", scamsFound: "স্ক্যাম পাওয়া গেছে",
        pasteLabel: "এসএমএস পেস্ট করুন বা স্ক্রিনশট আপলোড করুন", pasteBtn: "📋 পেস্ট", uploadBtn: "📷 আপলোড",
        textareaPlaceholder: "এখানে বার্তা পেস্ট করুন...", ocrLoading: "⏳ ছবি স্ক্যান করা হচ্ছে...",
        tryExamples: "উদাহরণ চেষ্টা করুন:", checkBtn: "বার্তা পরীক্ষা করুন 🔍", listenBtn: "🔊 শুনুন", shareBtn: "📲 শেয়ার",
        reportBtn: "🚨 নতুন স্ক্যাম রিপোর্ট করুন", historyTitle: "🕘 ইতিহাস লগ", clearHistory: "ইতিহাস মুছুন",
        emptyHistory: "কোনো ইতিহাস নেই।", helplineText: "সাইবার ক্রাইম হেল্পলাইন:",
        modalTitle: "🚨 নতুন স্ক্যাম রিপোর্ট", modalDesc: "বিবরণ লিখুন:",
        modalPlaceholder: "বিস্তারিত লিখুন...", submitReport: "জমা দিন"
    },
    mr: {
        appTitle: "स्कॅम शील्ड", appSubtitle: "ऑफलाइन फसवणूक संरक्षण", totalChecked: "एकूण तपासले", scamsFound: "स्कॅम सापडले",
        pasteLabel: "एसएमएस पेस्ट करा किंवा स्क्रीनशॉट अपलोड करा", pasteBtn: "📋 पेस्ट", uploadBtn: "📷 अपलोड",
        textareaPlaceholder: "येथे संदेश पेस्ट करा...", ocrLoading: "⏳ प्रतिमा स्कॅन करत आहे...",
        tryExamples: "उदाहरणे तपासा:", checkBtn: "संदेश तपासा 🔍", listenBtn: "🔊 ऐका", shareBtn: "📲 शेअर",
        reportBtn: "🚨 नवीन स्कॅम नोंदवा", historyTitle: "🕘 इतिहास लॉग", clearHistory: "इतिहास साफ करा",
        emptyHistory: "इतिहास रिक्त आहे.", helplineText: "सायबर क्राईम हेल्पलाइन:",
        modalTitle: "🚨 नवीन स्कॅम तक्रार", modalDesc: "तपशील प्रविष्ट करा:",
        modalPlaceholder: "तपशील टाईप करा...", submitReport: "सबमिट करा"
    },
    gu: {
        appTitle: "સ્કેમ શિલ્ડ", appSubtitle: "ઓફલાઇન છેતરપિંડી સુરક્ષા", totalChecked: "કુલ ચકાસાયેલ", scamsFound: "સ્કેમ મળ્યા",
        pasteLabel: "SMS પેસ્ટ કરો અથવા સ્ક્રીનશોટ અપલોડ કરો", pasteBtn: "📋 પેસ્ટ", uploadBtn: "📷 અપલોડ",
        textareaPlaceholder: "અહીં સંદેશ પેસ્ટ કરો...", ocrLoading: "⏳ ઇમેજ સ્કેન થઈ રહી છે...",
        tryExamples: "ઉદાહરણો અજમાવો:", checkBtn: "સંદેશ ચકાસો 🔍", listenBtn: "🔊 સાંભળો", shareBtn: "📲 શેર",
        reportBtn: "🚨 નવા સ્કેમની જાણ કરો", historyTitle: "🕘 ઇતિહાસ લૉગ", clearHistory: "ઇતિહાસ સાફ કરો",
        emptyHistory: "કોઈ ઇતિહાસ નથી.", helplineText: "સાઇબર ક્રાઇમ હેલ્પલાઇન:",
        modalTitle: "🚨 નવો સ્કેમ રિપોર્ટ", modalDesc: "વિગતો દાખલ કરો:",
        modalPlaceholder: "વિગતો ટાઇપ કરો...", submitReport: "સબમિટ કરો"
    },
    pa: {
        appTitle: "ਸਕੈਮ ਸ਼ੀਲਡ", appSubtitle: "ਆਫ਼ਲਾਈਨ ਧੋਖਾਧੜੀ ਸੁਰੱਖਿਆ", totalChecked: "ਕੁੱਲ ਜਾਂਚ ਕੀਤੀ", scamsFound: "ਸਕੈਮ ਮਿਲੇ",
        pasteLabel: "SMS ਪੇਸਟ ਕਰੋ ਜਾਂ ਸਕ੍ਰੀਨਸ਼ਾਟ ਅੱਪਲੋਡ ਕਰੋ", pasteBtn: "📋 ਪੇਸਟ", uploadBtn: "📷 ਅੱਪਲੋਡ",
        textareaPlaceholder: "ਸੁਨੇਹਾ ਇੱਥੇ ਪੇਸਟ ਕਰੋ...", ocrLoading: "⏳ ਤਸਵੀਰ ਸਕੈਨ ਕੀਤੀ ਜਾ ਰਹੀ ਹੈ...",
        tryExamples: "ਉਦਾਹਰਣਾਂ ਅਜ਼ਮਾਓ:", checkBtn: "ਸੁਨੇਹਾ ਜਾਂਚੋ 🔍", listenBtn: "🔊 ਸੁਣੋ", shareBtn: "📲 ਸ਼ੇਅਰ",
        reportBtn: "🚨 ਨਵੇਂ ਸਕੈਮ ਦੀ ਰਿਪੋਰਟ ਕਰੋ", historyTitle: "🕘 ਇਤਿਹਾਸ ਲੌਗ", clearHistory: "ਇਤਿਹਾਸ ਸਾਫ਼ ਕਰੋ",
        emptyHistory: "ਕੋਈ ਇਤਿਹਾਸ ਨਹੀਂ ਹੈ।", helplineText: "ਸਾਈਬਰ ਕ੍ਰਾਈਮ ਹੈਲਪਲਾਈਨ:",
        modalTitle: "🚨 ਨਵੇਂ ਸਕੈਮ ਦੀ ਰਿਪੋਰਟ", modalDesc: "ਵੇਰਵੇ ਦਾਖਲ ਕਰੋ:",
        modalPlaceholder: "ਵੇਰਵੇ ਟਾਈਪ ਕਰੋ...", submitReport: "ਸਬਮਿਟ ਕਰੋ"
    },
    ur: {
        appTitle: "اسکام شیلڈ", appSubtitle: "آف لائن فراڈ سے بچاؤ", totalChecked: "کل چیک کیا گیا", scamsFound: "اسکام ملے",
        pasteLabel: "ایس ایم ایس پیسٹ کریں یا اسکرین شاٹ اپ لوڈ کریں", pasteBtn: "📋 پیسٹ", uploadBtn: "📷 اپ لوڈ",
        textareaPlaceholder: "یہاں پیغام پیسٹ کریں...", ocrLoading: "⏳ اسکیننگ جاری ہے...",
        tryExamples: "مثالیں آزمائیں:", checkBtn: "پیغام چیک کریں 🔍", listenBtn: "🔊 سنیں", shareBtn: "📲 شیئر",
        reportBtn: "🚨 نئے اسکام کی اطلاع دیں", historyTitle: "🕘 ہسٹری لاگ", clearHistory: "ہسٹری صاف کریں",
        emptyHistory: "کوئی ہسٹری موجود نہیں ہے۔", helplineText: "سائبر کرائم ہیلپ لائن:",
        modalTitle: "🚨 نئے اسکام کی اطلاع", modalDesc: "تفصیلات درج کریں:",
        modalPlaceholder: "تفصیلات ٹائپ کریں...", submitReport: "جمع کرائیں"
    },
    or: {
        appTitle: "ସ୍କାମ୍ ଶିଲ୍ଡ", appSubtitle: "ଅଫଲାଇନ୍ ଠକେଇ ସୁରକ୍ଷା", totalChecked: "ମୋଟ ଯାଞ୍ଚ", scamsFound: "ସ୍କାମ୍ ମିଳିଛି",
        pasteLabel: "SMS ପେଷ୍ଟ କରନ୍ତୁ କିମ୍ବା ସ୍କ୍ରିନସଟ୍ ଅପଲୋଡ୍ କରନ୍ତୁ", pasteBtn: "📋 ପେଷ୍ଟ", uploadBtn: "📷 ଅପଲୋଡ୍",
        textareaPlaceholder: "ଏଠାରେ ବାର୍ତ୍ତା ପେଷ୍ଟ କରନ୍ତୁ...", ocrLoading: "⏳ ସ୍କ୍ଯାନ୍ ହେଉଛି...",
        tryExamples: "ଉଦାହରଣ ଦେଖନ୍ତୁ:", checkBtn: "ଯାଞ୍ଚ କରନ୍ତୁ 🔍", listenBtn: "🔊 ଶୁଣନ୍ତୁ", shareBtn: "📲 ସେୟାର୍",
        reportBtn: "🚨 ନୂତନ ସ୍କାମ୍ ରିପୋର୍ଟ କରନ୍ତୁ", historyTitle: "🕘 ଇତିହାସ", clearHistory: "ଇତିହାସ ଲିଭାନ୍ତୁ",
        emptyHistory: "କୌଣସି ଇତିହାସ ନାହିଁ।", helplineText: "ସାଇବର କ୍ରାଇମ ହେଲପଲାଇନ:",
        modalTitle: "🚨 ନୂତନ ସ୍କାମ୍ ରିପୋର୍ଟ", modalDesc: "ବିବରଣୀ ପ୍ରବେଶ କରନ୍ତୁ:",
        modalPlaceholder: "ବିବରଣୀ ଟାଇପ୍ କରନ୍ତୁ...", submitReport: "ଜମା କରନ୍ତୁ"
    }
};

let currentLang = localStorage.getItem("scam_shield_lang") || "en";

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("scam_shield_lang", lang);
    document.getElementById("langSelect").value = lang;

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
}

const samples = [
    ["KYC", "Dear customer, your SBI account will be blocked today. Update KYC immediately: http://bit.ly/sbi-kyc"],
    ["Lottery", "Congratulations! You won Rs 25,00,000 lottery. Pay Rs 5000 processing fee to claim your prize."],
    ["Electricity", "Your electricity will be disconnected tonight. Call 98XXXXXXXX immediately."],
    ["Part-Time", "Work from home and earn Rs 5000 daily by liking YouTube videos. WhatsApp now."],
    ["FedEx Scam", "Your FedEx parcel has been held by Mumbai Customs due to illegal items. Call immediately."],
    ["Real OTP", "123456 is your OTP for login to your bank app. Do not share this OTP with anyone. -HDFC Bank"]
];

const rules = [
    { words: ["kyc", "blocked", "suspend", "deactivated", "expired"], points: 30, text: "Account block/suspension threat detected" },
    { words: ["lottery", "you won", "prize", "congratulations", "lucky draw"], points: 30, text: "Lottery or prize win claim" },
    { words: ["processing fee", "registration fee", "pay rs", "security deposit"], points: 35, text: "Advance payment or fee requested" },
    { words: ["send otp", "share your otp", "enter your upi pin"], points: 35, text: "Asking for OTP or PIN details" },
    { words: ["urgent", "immediately", "today", "tonight", "disconnected"], points: 20, text: "False urgency or threat tactics" },
    { words: ["work from home", "earn daily", "part-time job"], points: 25, text: "Suspicious part-time job offer" },
    { words: ["customs", "fedex", "parcel held", "illegal items"], points: 35, text: "Customs or parcel scam threat" },
    { words: ["download apk", "instant loan"], points: 30, text: "Suspicious APK download or loan trap" }
];

const linkPattern = /bit\.ly|tinyurl|cutt\.ly|http:\/\/|\.apk/;

let historyLog = JSON.parse(localStorage.getItem("scam_shield_history")) || [];

function checkMessage() {
    const msgInput = document.getElementById("msg");
    const text = msgInput.value.toLowerCase().trim();
    const resultBox = document.getElementById("result");
    
    if (text === "") {
        alert("Please paste or type a message first!");
        return;
    }

    let score = 0;
    const matchedReasons = [];

    rules.forEach(rule => {
        const found = rule.words.some(w => text.includes(w));
        if (found) {
            score += rule.points;
            matchedReasons.push(rule.text);
        }
    });

    if (linkPattern.test(text)) {
        score += 25;
        matchedReasons.push("Suspicious or short URL link detected");
    }

    if (score > 100) score = 100;

    let verdict = "SAFE";
    let label = "🟢 SAFE – Looks Secure";
    
    if (score >= 60) {
        verdict = "SCAM";
        label = "🔴 SCAM – High Fraud Risk Detected!";
    } else if (score >= 25) {
        verdict = "DOUBTFUL";
        label = "🟡 DOUBTFUL – Exercise Caution";
    }

    resultBox.className = "result-box " + verdict;
    resultBox.style.display = "flex";
    
    document.getElementById("verdict").textContent = label;
    document.getElementById("risk").textContent = "Risk Score: " + score + "%";
    
    const reasonList = document.getElementById("reason");
    reasonList.innerHTML = "";
    
    if (matchedReasons.length > 0) {
        matchedReasons.forEach(r => {
            const li = document.createElement("li");
            li.textContent = r;
            reasonList.appendChild(li);
        });
    } else {
        const li = document.createElement("li");
        li.textContent = "No obvious scam indicators found.";
        reasonList.appendChild(li);
    }

    historyLog.unshift({
        text: msgInput.value,
        verdict: verdict,
        score: score,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });

    localStorage.setItem("scam_shield_history", JSON.stringify(historyLog));
    renderHistory();
    updateStats();
}

function renderHistory() {
    const historyList = document.getElementById("historyList");
    if (!historyList) return;

    if (historyLog.length === 0) {
        historyList.innerHTML = `<p class="empty-history">${translations[currentLang].emptyHistory}</p>`;
        return;
    }

    historyList.innerHTML = "";
    historyLog.forEach(item => {
        const div = document.createElement("div");
        div.className = `history-item ${item.verdict}`;
        div.innerHTML = `
            <div class="history-header">
                <span>${item.verdict} (${item.score}%)</span>
                <span class="history-time">${item.time}</span>
            </div>
            <p class="history-text">${item.text.substring(0, 50)}...</p>
        `;
        historyList.appendChild(div);
    });
}

function updateStats() {
    const totalCount = historyLog.length;
    const scamsCount = historyLog.filter(item => item.verdict === "SCAM").length;

    document.getElementById("totalCheckedCount").textContent = totalCount;
    document.getElementById("scamsFoundCount").textContent = scamsCount;
}

function speakResult() {
    if (!('speechSynthesis' in window)) {
        alert("Speech synthesis is not supported in this browser.");
        return;
    }

    window.speechSynthesis.cancel();
    const verdictText = document.getElementById("verdict").textContent;
    const riskText = document.getElementById("risk").textContent;
    
    const utterance = new SpeechSynthesisUtterance(`${verdictText}. ${riskText}.`);
    window.speechSynthesis.speak(utterance);
}

function shareWarning() {
    const verdictText = document.getElementById("verdict").textContent;
    const riskText = document.getElementById("risk").textContent;
    const msgText = document.getElementById("msg").value;

    const shareMessage = `⚠️ *Scam Alert via Scam Shield*\n\n*Verdict:* ${verdictText}\n*${riskText}*\n\n*Message Checked:* "${msgText.substring(0, 100)}..."`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareMessage)}`;
    window.open(whatsappUrl, '_blank');
}

document.addEventListener("DOMContentLoaded", () => {
    setLanguage(currentLang);
    renderHistory();
    updateStats();

    document.getElementById("langSelect").addEventListener("change", (e) => {
        setLanguage(e.target.value);
    });

    document.getElementById("checkBtn").addEventListener("click", checkMessage);

    document.getElementById("pasteBtn").addEventListener("click", async () => {
        try {
            const clipboardText = await navigator.clipboard.readText();
            document.getElementById("msg").value = clipboardText;
        } catch (err) {
            alert("Clipboard permission denied or unavailable.");
        }
    });

    const imageUpload = document.getElementById("imageUpload");
    const ocrStatus = document.getElementById("ocrStatus");

    imageUpload.addEventListener("change", async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        ocrStatus.style.display = "block";
        ocrStatus.textContent = translations[currentLang].ocrLoading;

        try {
            const result = await Tesseract.recognize(file, 'eng', {
                logger: m => {
                    if (m.status === 'recognizing text') {
                        const progress = Math.round(m.progress * 100);
                        ocrStatus.textContent = `⏳ Scanning: ${progress}%`;
                    }
                }
            });

            const extractedText = result.data.text.trim();
            if (extractedText) {
                document.getElementById("msg").value = extractedText;
                ocrStatus.textContent = "✅ Text extracted successfully!";
            } else {
                ocrStatus.textContent = "⚠️ No clear text found in image.";
            }
        } catch (err) {
            console.error(err);
            ocrStatus.textContent = "❌ Failed to read image text.";
        }

        setTimeout(() => { ocrStatus.style.display = "none"; }, 4000);
    });

    document.getElementById("speakBtn").addEventListener("click", speakResult);
    document.getElementById("shareBtn").addEventListener("click", shareWarning);

    document.getElementById("clearHistoryBtn").addEventListener("click", () => {
        historyLog = [];
        localStorage.removeItem("scam_shield_history");
        renderHistory();
        updateStats();
    });

    const reportModal = document.getElementById("reportModal");
    document.getElementById("openReportModalBtn").addEventListener("click", () => {
        reportModal.style.display = "flex";
    });
    document.getElementById("closeModalBtn").addEventListener("click", () => {
        reportModal.style.display = "none";
    });
    document.getElementById("submitReportBtn").addEventListener("click", () => {
        const reportText = document.getElementById("reportText").value;
        if(reportText.trim() === "") {
            alert("Please enter report details");
            return;
        }
        alert("Thank you! Your report has been submitted.");
        document.getElementById("reportText").value = "";
        reportModal.style.display = "none";
    });

    const themeToggleBtn = document.getElementById("themeToggleBtn");
    themeToggleBtn.addEventListener("click", () => {
        appTheme = document.documentElement.getAttribute("data-theme");
        if (appTheme === "light") {
            document.documentElement.setAttribute("data-theme", "dark");
            themeToggleBtn.textContent = "☀️";
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            themeToggleBtn.textContent = "🌙";
        }
    });

    const examplesDiv = document.getElementById("examples");
    if (examplesDiv) {
        samples.forEach(s => {
            const btn = document.createElement("button");
            btn.textContent = s[0];
            btn.addEventListener("click", () => {
                document.getElementById("msg").value = s[1];
            });
            examplesDiv.appendChild(btn);
        });
    }
});