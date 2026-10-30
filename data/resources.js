/*
  All resources shown on the site live in this list.

  To add one, copy an existing entry, paste it at the end of the list, and change
  the values. Field guide:

  id          unique short name, letters/numbers/dashes only
  name        resource name (shown as-is in every language)
  kind        optional label: library | government | school | university | app | course |
              tutors | creator | ai | media | podcast | community | dictionary
  categories  quick-filter tags, any of: library, government, school, instagram,
              youtube, app, tutors, courses, practice, news, tv, dictionary
  region      "NL", "BE", "TW", "online", or several joined with + (e.g. "NL+BE")
  variants    "nl" (Netherlands Dutch), "be" (Belgian Dutch / Flemish) or both
  cities      cities with in-person sessions, [] if none
  formats     any of "self" (self-paced), "inperson", "online" (live online class)
  focus       any of "speaking", "listening", "reading", "writing", "grammar", "exam"
  levels      [from, to] using A0 A1 A2 B1 B2 C1 C2
  cost        [min, max] typical euros per month; [0, 0] means free;
              use null for max when the paid price is unknown
  hours       [min, max] typical hours per month the resource expects
  url         main link
  instagram / youtube   optional profile links
  logo        optional image path or URL for the logo (e.g. "assets/logos/abc.png");
              without it the site shows the website's icon, or the name's initials
  review      true = not yet reviewed by Inka; shows a "Not yet reviewed" note
  note        short description { en: "...", zh: "...", nl: "..." } (nl in simple Dutch)
  price       optional price detail { en: "...", zh: "...", nl: "..." }
*/
// Country of each city outside the Netherlands (cities not listed here count as Netherlands).
window.CITY_COUNTRIES = {
  "Antwerpen": "BE", "Gent": "BE", "Brussel": "BE", "Leuven": "BE",
  "Taipei": "TW", "Tainan": "TW"
};

window.RESOURCES = [
  {
    id: "taalhuis",
    name: "Taalhuis (Bibliotheek)",
    kind: "library",
    categories: ["library"],
    region: "NL",
    variants: ["nl"],
    cities: ["Amsterdam", "Rotterdam", "Den Haag", "Utrecht", "Eindhoven", "Groningen", "Leiden"],
    formats: ["inperson"],
    focus: ["speaking", "reading", "writing"],
    levels: ["A0", "B1"],
    cost: [0, 0],
    hours: [2, 16],
    url: "https://www.bibliotheek.nl/",
    note: {
      en: "Most Dutch public libraries run a Taalhuis: a free drop-in desk that matches you with a course, a volunteer language buddy or a study group. Libraries can also lend NT2 textbooks.",
      zh: "荷蘭大多數公立圖書館都設有 Taalhuis（語言之家）：免費諮詢櫃台，幫你媒合課程、志工語伴或讀書會。圖書館也能借到 NT2 荷語教材。",
      nl: "De meeste bibliotheken hebben een Taalhuis. Daar krijg je gratis hulp. Ze zoeken een cursus, een taalmaatje of een groep voor je. Je kunt er ook NT2-boeken lenen."
    },
    price: { en: "Free. Library membership may be needed to borrow books.", zh: "免費。借書可能需要辦圖書證。", nl: "Gratis. Voor boeken lenen heb je soms een pasje van de bibliotheek nodig." }
  },
  {
    id: "taalcafe",
    name: "Taalcafé",
    kind: "community",
    categories: ["library", "practice"],
    region: "NL+BE",
    variants: ["nl", "be"],
    cities: ["Amsterdam", "Rotterdam", "Den Haag", "Utrecht", "Eindhoven", "Antwerpen", "Gent", "Brussel"],
    formats: ["inperson"],
    focus: ["speaking", "listening"],
    levels: ["A1", "B2"],
    cost: [0, 0],
    hours: [2, 8],
    url: "https://rotterdamstyle.com/education/practise-dutch-at-the-taalcafe-in-rotterdam",
    note: {
      en: "Informal conversation tables run by libraries, community centres and city halls. You need some basic Dutch (around A1) to join in. Search \"taalcafé\" plus your city.",
      zh: "由圖書館、社區中心或市政府舉辦的荷語聊天聚會，氣氛輕鬆。需要一點基礎（約 A1）才能加入對話。搜尋「taalcafé + 你的城市」即可找到。",
      nl: "Hier praat je Nederlands met anderen, in een bibliotheek, buurthuis of gemeente. Je moet al een beetje Nederlands kennen (ongeveer A1). Zoek op \"taalcafé\" en je stad."
    },
    price: { en: "Usually free, no booking needed.", zh: "通常免費，不需預約。", nl: "Meestal gratis. Je hoeft niet te reserveren." }
  },
  {
    id: "inburgering-gemeente",
    name: "Inburgering via your gemeente",
    kind: "government",
    categories: ["government"],
    region: "NL",
    variants: ["nl"],
    cities: ["Amsterdam", "Rotterdam", "Den Haag", "Utrecht", "Eindhoven", "Groningen", "Leiden"],
    formats: ["inperson", "online"],
    focus: ["speaking", "listening", "reading", "writing", "exam"],
    levels: ["A0", "B1"],
    cost: [0, 0],
    hours: [40, 80],
    url: "https://www.inburgeren.nl/en/",
    note: {
      en: "If you are required to complete civic integration (Wet inburgering 2021), your city hall arranges and pays for your learning route to B1. Volunteers who aren't required can sometimes join, or borrow from DUO.",
      zh: "如果你屬於需完成融入考試（Wet inburgering 2021）的對象，市政府會為你安排並支付到 B1 的學習路線。非強制者有時也能自願參加，或向 DUO 申請學習貸款。",
      nl: "Moet je inburgeren (Wet inburgering 2021)? Dan regelt en betaalt je gemeente je lessen tot B1. Moet je niet inburgeren? Soms mag je toch meedoen, of kun je geld lenen bij DUO."
    },
    price: { en: "Free if your gemeente is responsible for your integration; otherwise a DUO loan is possible.", zh: "若由市政府負責你的融入程序則免費；否則可向 DUO 申請貸款。", nl: "Gratis als je gemeente je inburgering regelt. Anders kun je geld lenen bij DUO." }
  },
  {
    id: "naar-nederland",
    name: "Naar Nederland",
    kind: "government",
    categories: ["government"],
    region: "online",
    variants: ["nl"],
    cities: [],
    formats: ["self"],
    focus: ["listening", "reading", "speaking", "exam"],
    levels: ["A0", "A1"],
    cost: [0, 0],
    hours: [4, 30],
    url: "https://www.naarnederland.nl/",
    note: {
      en: "The Dutch government's free self-study pack for the civic integration exam abroad: a film about life in the Netherlands, practice exercises and the A1 speaking test format.",
      zh: "荷蘭政府提供的免費自學包，專為海外融入考試準備：介紹荷蘭生活的影片、練習題，以及 A1 口說考試題型。",
      nl: "Gratis lespakket van de Nederlandse overheid voor het inburgeringsexamen in het buitenland. Met een film over Nederland, oefeningen en de spreektoets op A1."
    }
  },
  {
    id: "oefenen-nl",
    name: "Oefenen.nl",
    kind: "course",
    categories: ["app"],
    region: "online",
    variants: ["nl"],
    cities: [],
    formats: ["self"],
    focus: ["listening", "reading", "writing"],
    levels: ["A0", "A2"],
    cost: [0, 0],
    hours: [1, 30],
    url: "https://oefenen.nl/",
    note: {
      en: "Free online exercise programmes from Stichting Expertisecentrum Oefenen.nl, built for adults learning everyday Dutch. Short videos with practical topics such as doctors, shopping and work.",
      zh: "Oefenen.nl 提供的免費線上練習，專為學習日常荷語的成人設計。短片主題貼近生活，例如看醫生、購物和工作。",
      nl: "Gratis oefenprogramma's op internet voor volwassenen. Je leert Nederlands voor elke dag. Korte filmpjes over de dokter, boodschappen doen en werk."
    }
  },
  {
    id: "het-begint-met-taal",
    name: "Het Begint met Taal",
    kind: "community",
    categories: ["practice"],
    region: "NL",
    variants: ["nl"],
    cities: ["Amsterdam", "Rotterdam", "Den Haag", "Utrecht", "Eindhoven", "Groningen", "Leiden"],
    formats: ["inperson"],
    focus: ["speaking", "listening"],
    levels: ["A1", "B1"],
    cost: [0, 0],
    hours: [4, 8],
    url: "https://hetbegintmettaal.nl/",
    note: {
      en: "A national network of organisations that pair newcomers with a volunteer taalmaatje (language buddy) for weekly conversation practice.",
      zh: "全國性的語言志工網絡，為新移民配對志工語伴（taalmaatje），每週一起練習對話。",
      nl: "Een netwerk van organisaties in heel Nederland. Ze zoeken een vrijwilliger (taalmaatje) voor je. Jullie praten elke week Nederlands."
    }
  },
  {
    id: "nos-makkelijke-taal",
    name: "NOS Journaal in Makkelijke Taal",
    kind: "media",
    categories: ["news", "tv"],
    region: "online",
    variants: ["nl"],
    cities: [],
    formats: ["self"],
    focus: ["listening"],
    levels: ["A2", "B1"],
    cost: [0, 0],
    hours: [1, 10],
    url: "https://nos.nl/l/2536458",
    note: {
      en: "The national broadcaster's news in easy Dutch: fewer topics, slower pace and every hard word explained. Episodes are also on YouTube.",
      zh: "荷蘭國家廣播公司的簡易荷語新聞：主題較少、語速較慢，難字都會解釋。YouTube 上也看得到。",
      nl: "Het nieuws in makkelijke taal. Minder onderwerpen, rustig tempo en moeilijke woorden worden uitgelegd. Ook op YouTube."
    }
  },
  {
    id: "jeugdjournaal",
    name: "NOS Jeugdjournaal",
    kind: "media",
    categories: ["news", "tv"],
    region: "online",
    variants: ["nl"],
    cities: [],
    formats: ["self"],
    focus: ["listening", "reading"],
    levels: ["A2", "B2"],
    cost: [0, 0],
    hours: [1, 10],
    url: "https://jeugdjournaal.nl/",
    note: {
      en: "Daily news for children, with clear speech and short articles. A favourite stepping stone between textbook Dutch and the regular news.",
      zh: "給兒童看的每日新聞，發音清楚、文章簡短。是從課本荷語過渡到一般新聞的好選擇。",
      nl: "Elke dag nieuws voor kinderen. Ze praten duidelijk en de teksten zijn kort. Een goede stap tussen het lesboek en het gewone nieuws."
    }
  },
  {
    id: "npo-start",
    name: "NPO Start",
    kind: "media",
    categories: ["tv"],
    region: "online",
    variants: ["nl"],
    cities: [],
    formats: ["self"],
    focus: ["listening"],
    levels: ["B1", "C2"],
    cost: [0, 8],
    hours: [1, 40],
    url: "https://npo.nl/start",
    note: {
      en: "Dutch public TV on demand. Turn on Dutch subtitles to train your ear on real series, documentaries and talk shows.",
      zh: "荷蘭公共電視隨選平台。打開荷文字幕，用真實的影集、紀錄片和談話節目訓練聽力。",
      nl: "Nederlandse tv op internet. Zet de Nederlandse ondertiteling aan. Zo oefen je luisteren met echte series, documentaires en praatprogramma's."
    },
    price: { en: "Much is free; NPO Plus removes ads and unlocks the archive.", zh: "大部分免費；NPO Plus 付費版無廣告並可看完整片庫。", nl: "Veel is gratis. Met NPO Plus heb je geen reclame en kun je alles kijken." }
  },
  {
    id: "vrt-max",
    name: "VRT MAX",
    kind: "media",
    categories: ["tv"],
    region: "online",
    variants: ["be"],
    cities: [],
    formats: ["self"],
    focus: ["listening"],
    levels: ["B1", "C2"],
    cost: [0, 0],
    hours: [1, 40],
    url: "https://www.vrt.be/vrtmax/",
    note: {
      en: "Flemish public TV on demand: series, documentaries, news and kids' shows in Belgian Dutch. Turn on Dutch subtitles with the CC button to train your ear.",
      zh: "法蘭德斯公共電視隨選平台，有比利時荷語的影集、紀錄片、新聞和兒童節目。按 CC 鍵開啟荷文字幕，訓練聽力。",
      nl: "Vlaamse tv op internet: series, documentaires, nieuws en programma's voor kinderen, in het Vlaams. Zet de Nederlandse ondertiteling aan met de knop CC. Zo oefen je luisteren."
    },
    price: {
      en: "Free with a free VRT profile. Without a Belgian address, many programmes are blocked for rights reasons; VRT's own productions can be watched from anywhere.",
      zh: "免費，只需註冊免費的 VRT 帳號。沒有比利時地址的話，很多節目因版權限制無法觀看；VRT 自製節目在任何地方都能看。",
      nl: "Gratis met een gratis VRT-profiel. Woon je niet in België? Dan kun je veel programma's niet kijken. Programma's die VRT zelf maakt, kun je overal kijken."
    }
  },
  {
    id: "wablieft",
    name: "Wablieft",
    kind: "media",
    categories: ["news"],
    region: "BE",
    variants: ["be"],
    cities: [],
    formats: ["self"],
    focus: ["reading"],
    levels: ["A2", "B1"],
    cost: [2, 2],
    hours: [1, 10],
    url: "https://wablieft.be/nl/abonnement",
    note: {
      en: "A Flemish newspaper written in clear, simple Dutch. Good weekly reading practice if you live in Belgium or want Flemish vocabulary.",
      zh: "以清楚簡單的荷語撰寫的法蘭德斯報紙。住在比利時或想學比利時荷語詞彙的人，很適合每週閱讀練習。",
      nl: "Een Vlaamse krant in duidelijke, makkelijke taal. Goed om elke week te lezen als je in België woont of Vlaamse woorden wilt leren."
    },
    price: {
      en: "Digital subscription €20 a year, covering Wablieft and Wablieft Start. Paper copies can no longer be ordered.",
      zh: "數位訂閱每年 €20，含 Wablieft 與 Wablieft Start。紙本已停止訂購。",
      nl: "Online abonnement: €20 per jaar, voor Wablieft en Wablieft Start. Een papieren krant kun je niet meer bestellen."
    }
  },
  {
    id: "huis-nederlands-brussel",
    name: "Huis van het Nederlands Brussel",
    kind: "government",
    categories: ["government"],
    region: "BE",
    variants: ["be"],
    cities: ["Brussel"],
    formats: ["inperson", "online"],
    focus: ["speaking", "listening", "reading", "writing"],
    levels: ["A0", "C1"],
    cost: [0, 0],
    hours: [1, 2],
    url: "https://www.huisnederlandsbrussel.be/",
    note: {
      en: "Free advice and a placement test, then they point you to the right course in Brussels, free or paid, in person or online. They also list practice activities like theatre and conversation groups.",
      zh: "提供免費諮詢和分級測驗，再幫你找到布魯塞爾合適的課程（免費或付費、實體或線上）。也整理了戲劇、聊天小組等練習活動。",
      nl: "Je krijgt gratis advies en een niveautest. Daarna vinden ze de juiste cursus in Brussel voor je: gratis of betaald, in de klas of online. Ze geven ook tips om te oefenen, zoals theater en praatgroepen."
    },
    price: { en: "Advice is free; the courses they refer you to vary.", zh: "諮詢免費；推薦的課程費用不一。", nl: "Het advies is gratis. De prijs van de cursus is verschillend." }
  },
  {
    id: "atlas-antwerpen",
    name: "Atlas Antwerpen",
    kind: "government",
    categories: ["government"],
    region: "BE",
    variants: ["be"],
    cities: ["Antwerpen"],
    formats: ["inperson"],
    focus: ["speaking", "listening", "reading", "writing"],
    levels: ["A0", "C1"],
    cost: [0, 0],
    hours: [1, 2],
    url: "https://www.atlas-antwerpen.be/",
    note: {
      en: "Antwerp's integration and Dutch-learning centre. Book an intake to get matched with a course and practice opportunities in the city.",
      zh: "安特衛普的融入與荷語學習中心。預約諮詢後，他們會為你媒合城市裡的課程和練習機會。",
      nl: "Het centrum voor inburgering en Nederlands leren in Antwerpen. Maak een afspraak. Ze zoeken een cursus en plekken om te oefenen in de stad."
    },
    price: { en: "Intake and advice are free.", zh: "諮詢與分級免費。", nl: "Het gesprek en het advies zijn gratis." }
  },
  {
    id: "cvo-flanders",
    name: "CVO adult education centres",
    kind: "school",
    categories: ["school"],
    region: "BE",
    variants: ["be"],
    cities: ["Antwerpen", "Gent", "Brussel", "Leuven"],
    formats: ["inperson", "online"],
    focus: ["speaking", "listening", "reading", "writing", "grammar"],
    levels: ["A0", "C1"],
    cost: [0, 72],
    hours: [16, 48],
    url: "https://www.vlaanderen.be/onderwijs-en-vorming/school-en-studiekosten/kosten-volwassenenonderwijs",
    note: {
      en: "Flemish government-funded adult education centres (Centra voor Volwassenenonderwijs) offer full NT2 courses at subsidised prices. Your Huis van het Nederlands or Atlas can refer you.",
      zh: "法蘭德斯政府補助的成人教育中心（CVO）提供完整的 NT2 荷語課程，學費有補貼。可透過 Huis van het Nederlands 或 Atlas 轉介。",
      nl: "Centra voor Volwassenenonderwijs in Vlaanderen. De overheid betaalt mee, dus de NT2-cursussen zijn goedkoop. Het Huis van het Nederlands of Atlas kan je doorsturen."
    },
    price: {
      en: "€1.50 per lesson hour at the first level (max €180 in total), €0.60 per hour at higher levels, €0.30 with some reductions. Free with an inburgering contract or certificate. Books are extra.",
      zh: "第一級每上課時數 €1.50（總額上限 €180），較高級別每小時 €0.60，部分減免者每小時 €0.30。持有融入合約或證明者免費。教材另計。",
      nl: "Eerste niveau: €1,50 per lesuur (samen maximaal €180). Hogere niveaus: €0,60 per uur, soms €0,30. Gratis met een inburgeringscontract of -attest. Boeken betaal je zelf."
    }
  },
  {
    id: "vdab-nederlands",
    name: "VDAB Nederlands leren",
    kind: "government",
    categories: ["government"],
    region: "BE",
    variants: ["be"],
    cities: ["Antwerpen", "Gent", "Leuven"],
    formats: ["self", "inperson", "online"],
    focus: ["speaking", "listening", "reading", "writing"],
    levels: ["A0", "B2"],
    cost: [0, 0],
    hours: [10, 60],
    url: "https://www.vdab.be/anderstalig/nederlands",
    note: {
      en: "The Flemish employment service offers free Dutch courses for jobseekers, including a track for highly educated newcomers (Hogerop NT2).",
      zh: "法蘭德斯就業服務局為求職者提供免費荷語課程，也有為高學歷新移民設計的路線（Hogerop NT2）。",
      nl: "De Vlaamse dienst voor werk (VDAB) geeft gratis cursussen Nederlands aan werkzoekenden. Er is ook een cursus voor hoogopgeleide nieuwkomers (Hogerop NT2)."
    },
    price: { en: "Free for registered jobseekers.", zh: "已登記的求職者免費。", nl: "Gratis als je ingeschreven bent als werkzoekende." }
  },
  {
    id: "oefenkansen-be",
    name: "Oefenkansen",
    kind: "community",
    categories: ["practice"],
    region: "BE",
    variants: ["be"],
    cities: ["Antwerpen", "Gent", "Brussel", "Leuven"],
    formats: ["inperson"],
    focus: ["speaking", "listening"],
    levels: ["A1", "B2"],
    cost: [0, 0],
    hours: [2, 8],
    url: "https://www.oefenkansen.be/",
    note: {
      en: "A free Flemish guide to informal practice opportunities: no lessons, just ideas and places to use your Dutch in clubs, cafés and volunteering.",
      zh: "法蘭德斯的免費練習機會指南：不是上課，而是提供在社團、咖啡館和志工活動中使用荷語的點子與地點。",
      nl: "Een gratis Vlaamse gids met plekken om Nederlands te oefenen. Geen lessen, wel ideeën: in clubs, cafés en als vrijwilliger."
    }
  },
  {
    id: "volksuniversiteit",
    name: "Volksuniversiteit",
    kind: "school",
    categories: ["school"],
    region: "NL",
    variants: ["nl"],
    cities: ["Amsterdam", "Rotterdam", "Den Haag", "Utrecht", "Eindhoven", "Groningen", "Leiden"],
    formats: ["inperson", "online"],
    focus: ["speaking", "listening", "reading", "writing", "grammar"],
    levels: ["A0", "B2"],
    cost: [100, 270],
    hours: [10, 16],
    url: "https://www.volksuniversiteit.nl/",
    note: {
      en: "Affordable evening group courses run by local non-profits in most Dutch cities. Prices and schedules differ per city.",
      zh: "由各地非營利機構開設的平價晚間團體班，荷蘭大多數城市都有。價格和時間依城市而異。",
      nl: "Goedkope groepscursussen in de avond, in de meeste Nederlandse steden. Prijzen en lestijden zijn per stad anders."
    },
    price: { en: "Den Haag A1: €265 for 8 × 3 h (autumn 2026). Amsterdam A0–A1: €528.", zh: "海牙 A1：8 堂 × 3 小時共 €265（2026 秋季）。阿姆斯特丹 A0–A1：€528。", nl: "Den Haag A1: €265 voor 8 lessen van 3 uur (najaar 2026). Amsterdam A0–A1: €528." }
  },
  {
    id: "uva-talen",
    name: "UvA Talen",
    kind: "university",
    categories: ["school"],
    region: "NL",
    variants: ["nl"],
    cities: ["Amsterdam"],
    formats: ["self", "inperson", "online"],
    focus: ["speaking", "listening", "reading", "writing", "grammar", "exam"],
    levels: ["A0", "B2"],
    cost: [100, 410],
    hours: [10, 40],
    url: "https://www.uvatalen.nl/nederlands",
    note: {
      en: "The University of Amsterdam's language centre, open to everyone. Courses from beginner to B2, e-learning, writing and fluency courses, and Staatsexamen preparation.",
      zh: "阿姆斯特丹大學語言中心，對所有人開放。提供入門到 B2 的課程、線上自學、寫作與流利度課程，以及國家考試準備班。",
      nl: "Het talencentrum van de Universiteit van Amsterdam. Iedereen mag meedoen. Cursussen van beginner tot B2, online leren, schrijven, vloeiend spreken en voorbereiding op het Staatsexamen."
    },
    price: {
      en: "Per course: e-learning from €195, Staatsexamen prep and Fluency Skills from €485, Writing Skills from €710, Beginners intensive (A0–A2) from €815. Materials €30–48 extra.",
      zh: "每期課程：線上自學 €195 起，國家考試準備班與流利度課程 €485 起，寫作課 €710 起，入門密集班（A0–A2）€815 起。教材另計 €30–48。",
      nl: "Per cursus: online leren vanaf €195. Staatsexamen en Fluency Skills vanaf €485. Writing Skills vanaf €710. Beginners intensief (A0–A2) vanaf €815. Boeken €30–48 extra."
    }
  },
  {
    id: "babel-utrecht",
    name: "Babel (Utrecht)",
    kind: "school",
    categories: ["school"],
    region: "NL",
    variants: ["nl"],
    cities: ["Utrecht"],
    formats: ["self", "inperson", "online"],
    focus: ["speaking", "listening", "reading", "writing", "grammar", "exam"],
    levels: ["A0", "C1"],
    cost: [110, 540],
    hours: [8, 40],
    url: "https://www.babel.nl/cursus/",
    note: {
      en: "A language school in Utrecht with Dutch courses from beginner to C1, in the classroom or a virtual classroom, plus conversation courses, e-learning and Staatsexamen training.",
      zh: "烏特勒支的語言學校，提供入門到 C1 的荷語課程（實體或線上教室），另有會話課、線上自學和國家考試訓練。",
      nl: "Een taalschool in Utrecht. Cursussen van beginner tot C1, in de klas of online. Ook praatcursussen, online leren en training voor het Staatsexamen."
    },
    price: {
      en: "Per course: e-learning from €225, conversation €295, A0–A1 €550, advanced 9-week courses €795, full A0–A2 or B1–B2 €1,075, Staatsexamen training €565–590.",
      zh: "每期課程：線上自學 €225 起、會話課 €295、A0–A1 €550、9 週高級課程 €795、完整 A0–A2 或 B1–B2 €1,075、國家考試訓練 €565–590。",
      nl: "Per cursus: online leren vanaf €225, praatcursus €295, A0–A1 €550, cursus van 9 weken voor gevorderden €795, A0–A2 of B1–B2 €1.075, Staatsexamen €565–590."
    }
  },
  {
    id: "eur-language-centre",
    name: "EUR Language & Training Centre",
    kind: "university",
    categories: ["school"],
    region: "NL",
    variants: ["nl"],
    cities: ["Rotterdam"],
    formats: ["inperson"],
    focus: ["speaking", "listening", "reading", "writing", "grammar"],
    levels: ["A0", "B2"],
    cost: [25, 300],
    hours: [10, 24],
    url: "https://www.eur.nl/onderwijs/taal-trainingscentrum/nederlands/nederlands-a1-beginners",
    note: {
      en: "Erasmus University Rotterdam's Dutch courses, open to all. International EUR students pay a heavily reduced fee once per level.",
      zh: "鹿特丹伊拉斯謨大學的荷語課程，對外開放。EUR 國際學生每個級別可享一次大幅優惠價。",
      nl: "Cursussen Nederlands van de Erasmus Universiteit Rotterdam. Iedereen mag meedoen. Internationale studenten van de EUR betalen veel minder, één keer per niveau."
    },
    price: { en: "€50 per level for international EUR students; regular price higher.", zh: "EUR 國際學生每級 €50；一般價格較高。", nl: "€50 per niveau voor internationale EUR-studenten. Voor anderen is de prijs hoger." }
  },
  {
    id: "wur-into",
    name: "In'to Languages (Wageningen)",
    kind: "university",
    categories: ["school"],
    region: "NL",
    variants: ["nl"],
    cities: ["Wageningen"],
    formats: ["inperson", "online"],
    focus: ["speaking", "listening", "reading", "writing"],
    levels: ["A0", "B2"],
    cost: [100, 300],
    hours: [10, 40],
    url: "https://www.wur.nl/nl/onderwijs/into-languages",
    note: {
      en: "Wageningen University's language centre, including social Dutch courses and intensive summer courses.",
      zh: "瓦赫寧恩大學語言中心，提供生活荷語課程和暑期密集班。",
      nl: "Het talencentrum van Wageningen University. Met cursussen Nederlands voor het dagelijks leven en intensieve zomercursussen."
    }
  },
  {
    id: "kuleuven-ilt",
    name: "KU Leuven ILT",
    kind: "university",
    categories: ["school"],
    region: "BE",
    variants: ["be"],
    cities: ["Leuven"],
    formats: ["inperson", "online"],
    focus: ["speaking", "listening", "reading", "writing", "grammar", "exam"],
    levels: ["A0", "C2"],
    cost: [0, 320],
    hours: [16, 40],
    url: "https://ilt.kuleuven.be/cursus/nt2_prijs_voorwaarden.php",
    note: {
      en: "KU Leuven's Institute for Living Languages teaches Dutch in six levels in small groups, plus pronunciation and online writing classes and a summer course. Open to adults outside the university.",
      zh: "魯汶大學現代語言學院以小班教授六個級別的荷語，另有發音課、線上寫作課和暑期課程，校外成人也能報名。",
      nl: "Het talencentrum van de KU Leuven. Nederlands in 6 niveaus, in kleine groepen. Ook lessen uitspraak, online schrijven en een zomercursus. Ook voor volwassenen die niet aan de universiteit studeren."
    },
    price: {
      en: "Per module: €300 (levels 1–3) or €320 (levels 4–6) for external students, €175–195 for KU Leuven students and staff, syllabus included. Summer course €460–480. Free for Erasmus students.",
      zh: "每個模組：校外學員 €300（1–3 級）或 €320（4–6 級），KU Leuven 學生與教職員 €175–195，含講義。暑期課程 €460–480。Erasmus 學生免費。",
      nl: "Per module: €300 (niveau 1–3) of €320 (niveau 4–6). Studenten en personeel van de KU Leuven: €175–195. Boek inbegrepen. Zomercursus €460–480. Gratis voor Erasmusstudenten."
    }
  },
  {
    id: "ugent-uct",
    name: "UCT Gent",
    kind: "university",
    categories: ["school"],
    region: "BE",
    variants: ["be"],
    cities: ["Gent"],
    formats: ["inperson"],
    focus: ["speaking", "listening", "reading", "writing", "grammar", "exam"],
    levels: ["A1", "C1"],
    cost: [200, 588],
    hours: [16, 40],
    url: "https://www.uct.ugent.be/en",
    note: {
      en: "Ghent University's language centre teaches Dutch from level 1 (A1) to level 6 (C1), as intensive day courses or evening courses, open to residents as well as students.",
      zh: "根特大學語言中心教授 1 級（A1）到 6 級（C1）荷語，有密集日間班和晚間班，居民與學生皆可報名。",
      nl: "Het talencentrum van de Universiteit Gent. Nederlands van niveau 1 (A1) tot niveau 6 (C1). Intensief overdag of in de avond. Ook voor mensen die in Gent wonen."
    },
    price: {
      en: "Per course: €588 standard, €520 for UGent staff and PhD students, €400 for UGent students.",
      zh: "每期課程：一般學員 €588、UGent 教職員與博士生 €520、UGent 學生 €400。",
      nl: "Per cursus: €588. Personeel en doctoraatsstudenten van de UGent: €520. Studenten van de UGent: €400."
    }
  },
  {
    id: "linguapolis",
    name: "Linguapolis (University of Antwerp)",
    kind: "university",
    categories: ["school"],
    region: "BE",
    variants: ["be"],
    cities: ["Antwerpen"],
    formats: ["inperson", "online"],
    focus: ["speaking", "listening", "reading", "writing", "grammar"],
    levels: ["A0", "C1"],
    cost: [150, 750],
    hours: [16, 45],
    url: "https://www.uantwerpen.be/en/centres/linguapolis/language-courses/languages/dutch/tariffs-and-subsidies2/",
    note: {
      en: "The University of Antwerp's language institute, with Dutch courses for students, expats and professionals, plus a one-year academic Dutch programme.",
      zh: "安特衛普大學語言中心，為學生、外派人士與上班族開設荷語課程，另有一年制學術荷語預科。",
      nl: "Het talencentrum van de Universiteit Antwerpen. Cursussen Nederlands voor studenten, expats en mensen die werken. Er is ook een jaar Nederlands voor de universiteit."
    },
    price: {
      en: "Standard rate €555 for a 45-hour course, €750 for 90 hours (2026–2027). A Flemish training voucher can cover up to €125; level 1 may qualify for a Flemish grant.",
      zh: "一般價格：45 小時課程 €555、90 小時 €750（2026–2027）。法蘭德斯培訓券最多可抵 €125；第 1 級可能申請法蘭德斯獎助。",
      nl: "€555 voor een cursus van 45 uur, €750 voor 90 uur (2026–2027). Met een Vlaamse opleidingscheque krijg je tot €125 terug. Voor niveau 1 kun je soms een beurs krijgen."
    }
  },
  {
    id: "regina-coeli",
    name: "Regina Coeli",
    kind: "school",
    categories: ["school"],
    region: "NL",
    variants: ["nl"],
    cities: ["Vught", "Eindhoven"],
    formats: ["inperson"],
    focus: ["speaking", "listening", "reading", "writing", "grammar"],
    levels: ["A0", "C1"],
    cost: [570, 5315],
    hours: [16, 50],
    url: "https://www.reginacoeli.com/language-courses/fees.html",
    note: {
      en: "A well-known residential language institute in Vught: full-immersion training, mostly one-to-one, often paid for by employers. Also runs small evening groups at High Tech Campus Eindhoven.",
      zh: "位於 Vught 的知名住宿式語言學校：以一對一為主的全沉浸式訓練，通常由公司支付。另在恩荷芬 High Tech Campus 開設小班晚間課。",
      nl: "Een bekend talencentrum in Vught. Je woont er en leert de hele dag, meestal alleen met een docent. Vaak betaalt de werkgever. Er zijn ook kleine avondgroepen op de High Tech Campus in Eindhoven."
    },
    price: {
      en: "Intensive week (5 days) €5,315 excl. VAT, overnight stay extra. Evening course in Eindhoven €1,135 excl. VAT for 12 two-hour lessons over 6 weeks, groups of 5.",
      zh: "一週密集班（5 天）€5,315（未稅），住宿另計。恩荷芬晚間課 12 堂 × 2 小時、為期 6 週、5 人小班，€1,135（未稅）。",
      nl: "Intensieve week (5 dagen): €5.315 zonder btw. Overnachten kost extra. Avondcursus in Eindhoven: €1.135 zonder btw, 12 lessen van 2 uur in 6 weken, groepen van 5."
    }
  },
  {
    id: "direct-dutch",
    name: "Direct Dutch Institute",
    kind: "school",
    categories: ["school"],
    region: "NL",
    variants: ["nl"],
    cities: ["Den Haag"],
    formats: ["inperson", "online"],
    focus: ["speaking", "listening", "writing", "grammar"],
    levels: ["A0", "B2"],
    cost: [240, 1395],
    hours: [12, 60],
    url: "https://directdutch.com/courses/",
    note: {
      en: "A private language school in The Hague for expats, with in-person and online group courses from A0 to B2, a B1+ writing course and two-week intensives.",
      zh: "位於海牙、以外派人士為主的私人語言學校，提供 A0 到 B2 的實體與線上團體課、B1+ 寫作課，以及兩週密集班。",
      nl: "Een taalschool in Den Haag voor expats. Groepscursussen van A0 tot B2, in de klas en online. Ook een schrijfcursus (B1+) en intensieve cursussen van 2 weken."
    },
    price: {
      en: "A1 or A2 in person €645 for 7 weeks. B1 online or B2 €780 for 12 weeks. A2+ and B1+ writing €480 for 8 weeks. Two-week intensives €865–€1,395. Course material included.",
      zh: "A1 或 A2 實體課 7 週 €645。B1 線上或 B2 課程 12 週 €780。A2+ 與 B1+ 寫作課 8 週 €480。兩週密集班 €865–€1,395。皆含教材。",
      nl: "A1 of A2 in de klas: €645 voor 7 weken. B1 online of B2: €780 voor 12 weken. Schrijven A2+ en B1+: €480 voor 8 weken. Intensief 2 weken: €865–1.395. Lesmateriaal inbegrepen."
    }
  },
  {
    id: "koentact",
    name: "Koentact",
    kind: "school",
    categories: ["school"],
    region: "NL",
    variants: ["nl"],
    cities: ["Amsterdam"],
    formats: ["inperson", "online"],
    focus: ["speaking", "listening", "grammar"],
    levels: ["A0", "B2"],
    cost: [320, 975],
    hours: [20, 33],
    url: "https://koentact.nl/",
    note: {
      en: "An Amsterdam language school with small group courses (5–12 students), a conversation course and one-week intensives (max 6 students).",
      zh: "阿姆斯特丹的語言學校，提供小班團體課（5–12 人）、會話課，以及一週密集班（最多 6 人）。",
      nl: "Een taalschool in Amsterdam. Kleine groepen (5–12 mensen), een praatcursus en intensieve weken (maximaal 6 mensen)."
    },
    price: {
      en: "Morning or evening group course €525 (8 lessons + 2 field trips over 4 weeks). Conversation course (A2–B1) €320. Intensive week €975 (33 hours in 6 days). Discount when you prepay 3 courses.",
      zh: "早上或晚上團體班 €525（4 週內 8 堂課＋2 次校外教學）。會話課（A2–B1）€320。一週密集班 €975（6 天共 33 小時）。一次預付 3 期有折扣。",
      nl: "Groepscursus in de ochtend of avond: €525 (8 lessen en 2 uitjes in 4 weken). Praatcursus (A2–B1): €320. Intensieve week: €975 (33 uur in 6 dagen). Korting als je 3 cursussen tegelijk betaalt."
    }
  },
  {
    id: "futurelearn-rug",
    name: "Introduction to Dutch (University of Groningen)",
    kind: "course",
    categories: ["school", "app", "courses"],
    region: "online",
    variants: ["nl"],
    cities: [],
    formats: ["self"],
    focus: ["reading", "listening", "grammar"],
    levels: ["A0", "A1"],
    cost: [0, 0],
    hours: [3, 12],
    url: "https://www.futurelearn.com/courses/dutch",
    note: {
      en: "A free beginner MOOC on FutureLearn from the University of Groningen, covering basic words, sentences and Dutch culture.",
      zh: "格羅寧根大學在 FutureLearn 上的免費入門 MOOC，涵蓋基本詞彙、句型與荷蘭文化。",
      nl: "Een gratis online cursus voor beginners van de Rijksuniversiteit Groningen, op FutureLearn. Je leert eerste woorden, zinnen en over de Nederlandse cultuur."
    },
    price: { en: "Free to audit; paid upgrade for unlimited access and a certificate.", zh: "旁聽免費；付費升級可無限期觀看並取得證書。", nl: "Gratis. Wil je alles blijven zien en een certificaat? Dan betaal je." }
  },
  {
    id: "tudelft",
    name: "TU Delft Dutch courses",
    kind: "university",
    categories: ["school"],
    region: "NL",
    variants: ["nl"],
    cities: ["Delft"],
    formats: ["self", "inperson", "online"],
    focus: ["speaking", "listening", "reading", "writing", "grammar", "exam"],
    levels: ["A0", "C1"],
    cost: [0, 455],
    hours: [4, 40],
    url: "https://www.tudelft.nl/tbm/itav/onderwijs/nederlands-nt2/nederlandse-cursussen",
    note: {
      en: "TU Delft's language centre runs Dutch courses from beginner to advanced, a summer school, NT2 State Exam preparation and a free online beginners course. Open to non-students too.",
      zh: "台夫特理工大學語言中心開設入門到高級的荷語課程、暑期班、NT2 國家考試準備，以及免費的線上入門課程，非學生也能報名。",
      nl: "Het talencentrum van de TU Delft. Cursussen van beginner tot gevorderd, een zomerschool, voorbereiding op het Staatsexamen NT2 en een gratis online cursus voor beginners. Ook voor mensen die geen student zijn."
    },
    price: {
      en: "Online beginners course free. Semi-intensive courses €445–€485, advanced intensive €910, summer school €550 per level (materials extra). Some levels free for TU Delft students in English-taught programmes.",
      zh: "線上入門課程免費。半密集課程 €445–€485，高級密集班 €910，暑期班每級 €550（教材另計）。就讀英語授課學程的 TU Delft 學生部分級別免費。",
      nl: "Online cursus voor beginners: gratis. Halfintensieve cursussen €445–485, intensief voor gevorderden €910, zomerschool €550 per niveau (boeken extra). Sommige niveaus gratis voor studenten van de TU Delft in Engelstalige opleidingen."
    }
  },
  {
    id: "staatsexamen-nt2",
    name: "Staatsexamen NT2 practice exams",
    kind: "government",
    categories: ["government"],
    region: "online",
    variants: ["nl"],
    cities: [],
    formats: ["self"],
    focus: ["exam", "reading", "listening", "writing", "speaking"],
    levels: ["A2", "C1"],
    cost: [0, 0],
    hours: [2, 20],
    url: "https://www.staatsexamensnt2.nl/",
    note: {
      en: "Official free practice exams for the State Exam Dutch as a Second Language (programme I at B1, programme II at B2). Essential if a job or university needs the certificate.",
      zh: "荷語作為第二語言國家考試（Staatsexamen NT2）的官方免費模擬試題，第一級為 B1、第二級為 B2。工作或大學要求證書時必備。",
      nl: "Gratis oefenexamens voor het Staatsexamen Nederlands als tweede taal (programma I op B1, programma II op B2). Belangrijk als je het diploma nodig hebt voor werk of studie."
    },
    price: { en: "Practice material is free; taking the exam costs a fee per part.", zh: "練習題免費；正式考試每科需付報名費。", nl: "Oefenen is gratis. Voor het examen betaal je per onderdeel." }
  },
  {
    id: "dutchgrammar",
    name: "DutchGrammar.com",
    kind: "course",
    categories: ["app"],
    region: "online",
    variants: ["nl"],
    cities: [],
    formats: ["self"],
    focus: ["grammar", "reading"],
    levels: ["A1", "B2"],
    cost: [0, 10],
    hours: [1, 20],
    url: "https://www.dutchgrammar.com/",
    note: {
      en: "Clear grammar explanations in English with exercises. The go-to reference when a rule in class doesn't click.",
      zh: "用英文清楚解釋荷語文法並附練習題。上課聽不懂某個規則時，最常被推薦的查詢網站。",
      nl: "Duidelijke uitleg over grammatica, in het Engels, met oefeningen. Handig als je een regel uit de les niet begrijpt."
    },
    price: { en: "Explanations are free; optional paid e-book and course.", zh: "說明免費；另有付費電子書和課程。", nl: "De uitleg is gratis. Er is ook een e-book en een cursus waarvoor je betaalt." }
  },
  {
    id: "duolingo",
    name: "Duolingo",
    kind: "app",
    categories: ["app"],
    region: "online",
    variants: ["nl"],
    cities: [],
    formats: ["self"],
    focus: ["reading", "listening", "writing"],
    levels: ["A0", "A2"],
    cost: [0, 13],
    hours: [2, 15],
    url: "https://www.duolingo.com/course/nl/en/Learn-Dutch",
    note: {
      en: "A game-style daily habit for vocabulary and basic sentences. Great for getting started; pair it with speaking practice to progress past A2.",
      zh: "遊戲化的每日練習，適合累積單字和基本句型。入門很好用，但想超過 A2 需要搭配口說練習。",
      nl: "Een app als een spel. Elke dag een beetje woorden en korte zinnen leren. Goed om te beginnen. Wil je verder dan A2? Oefen dan ook met spreken."
    },
    price: { en: "Free with ads; Super is about €7–13 a month.", zh: "免費版有廣告；Super 約每月 €7–13。", nl: "Gratis met reclame. Super kost ongeveer €7–13 per maand." }
  },
  {
    id: "babbel",
    name: "Babbel",
    kind: "app",
    categories: ["app"],
    region: "online",
    variants: ["nl"],
    cities: [],
    formats: ["self"],
    focus: ["reading", "listening", "speaking", "grammar"],
    levels: ["A0", "B1"],
    cost: [7, 15],
    hours: [3, 15],
    url: "https://www.babbel.com/learn-dutch",
    note: {
      en: "Short structured lessons with dialogues and grammar tips, taught from English. More grammar than Duolingo.",
      zh: "以英文教學的短課程，包含對話與文法說明，文法比 Duolingo 多。",
      nl: "Korte lessen met gesprekken en tips over grammatica. De uitleg is in het Engels. Meer grammatica dan Duolingo."
    },
    price: { en: "Roughly €7–15 a month depending on plan length.", zh: "依方案長短約每月 €7–15。", nl: "Ongeveer €7–15 per maand. Hoe langer je abonnement, hoe goedkoper." }
  },
  {
    id: "dutchpod101",
    name: "DutchPod101",
    kind: "podcast",
    categories: ["app"],
    region: "online",
    variants: ["nl"],
    cities: [],
    formats: ["self"],
    focus: ["listening", "speaking"],
    levels: ["A0", "B2"],
    cost: [0, null],
    hours: [2, 20],
    url: "https://www.dutchpod101.com/",
    note: {
      en: "Audio and video lessons organised by level, with transcripts and vocabulary lists. Good for learning on a commute.",
      zh: "依程度分類的音訊與影片課程，附逐字稿和單字表，適合通勤時學習。",
      nl: "Lessen met audio en video, per niveau. Met de tekst en woordenlijsten erbij. Goed om te luisteren onderweg."
    },
    price: {
      en: "Free account to start. Check the website for the paid service.",
      zh: "可免費註冊開始使用。付費方案請至官網查看。",
      nl: "Je begint met een gratis account. Kijk op de website voor de prijs van het betaalde deel."
    }
  },
  {
    id: "italki",
    name: "italki",
    kind: "tutors",
    categories: ["tutors"],
    region: "online",
    variants: ["nl", "be"],
    cities: [],
    formats: ["online"],
    focus: ["speaking", "listening", "writing", "grammar", "exam"],
    levels: ["A0", "C2"],
    cost: [40, 240],
    hours: [2, 12],
    url: "https://www.italki.com/en/teachers/dutch",
    note: {
      en: "Book one-to-one video lessons with Dutch and Flemish tutors. Filter by price and specialty, such as inburgering or Staatsexamen prep.",
      zh: "預約荷蘭或比利時老師的一對一視訊課。可依價格與專長篩選，例如融入考試或國家考試準備。",
      nl: "Boek lessen met een eigen docent via video. Er zijn docenten uit Nederland en Vlaanderen. Zoek op prijs of op onderwerp, zoals inburgering of het Staatsexamen."
    },
    price: { en: "Tutors set their own rates, roughly €12–35 per hour.", zh: "老師自訂價格，約每小時 €12–35。", nl: "Elke docent kiest zijn eigen prijs: ongeveer €12–35 per uur." }
  },
  {
    id: "preply",
    name: "Preply",
    kind: "tutors",
    categories: ["tutors"],
    region: "online",
    variants: ["nl", "be"],
    cities: [],
    formats: ["online"],
    focus: ["speaking", "listening", "writing", "grammar"],
    levels: ["A0", "C2"],
    cost: [40, 240],
    hours: [2, 12],
    url: "https://preply.com/en/online/dutch-tutors",
    note: {
      en: "Another large tutor marketplace with many Dutch teachers. Trial lessons are discounted, so it's easy to try a few teachers.",
      zh: "另一個大型家教平台，荷語老師很多。試聽課有折扣，方便多試幾位老師。",
      nl: "Nog een grote website met veel docenten Nederlands. De eerste les is goedkoper. Zo kun je makkelijk een paar docenten proberen."
    },
    price: { en: "Tutors set their own rates, roughly €10–35 per hour.", zh: "老師自訂價格，約每小時 €10–35。", nl: "Elke docent kiest zijn eigen prijs: ongeveer €10–35 per uur." }
  },
  {
    id: "tandem",
    name: "Tandem",
    kind: "community",
    categories: ["app", "practice"],
    region: "online",
    variants: ["nl", "be"],
    cities: [],
    formats: ["online"],
    focus: ["speaking", "writing"],
    levels: ["A1", "C1"],
    cost: [0, 10],
    hours: [1, 20],
    url: "https://tandem.net/language-exchange/netherlands",
    note: {
      en: "A language-exchange app: chat with Dutch speakers who want to learn your language. Free practice in writing and, once you're braver, voice and video calls.",
      zh: "語言交換 App：和想學你母語的荷語母語者聊天。免費練習寫作，敢開口後還能語音或視訊通話。",
      nl: "Een app om talen te ruilen. Je chat met Nederlanders die jouw taal willen leren. Gratis oefenen met schrijven, en later ook met bellen of videobellen."
    },
    price: { en: "Free; optional premium.", zh: "免費；可選付費進階版。", nl: "Gratis. Je kunt extra's kopen." }
  },
  {
    id: "hellotalk",
    name: "HelloTalk",
    kind: "community",
    categories: ["app", "practice"],
    region: "online",
    variants: ["nl", "be"],
    cities: [],
    formats: ["online"],
    focus: ["speaking", "writing"],
    levels: ["A1", "C1"],
    cost: [0, 10],
    hours: [1, 20],
    url: "https://www.hellotalk.com/en/learn/dutch",
    note: {
      en: "A language-exchange app: chat with Dutch speakers who are learning your language, with built-in translation and corrections. You can also post short updates for native speakers to correct.",
      zh: "語言交換 App：和正在學你母語的荷語母語者聊天，內建翻譯與修改功能。也可以發短文動態，讓母語者幫你訂正。",
      nl: "Een app om talen te ruilen. Je chat met Nederlanders die jouw taal leren. De app kan vertalen en verbeteren. Je kunt ook korte berichten plaatsen. Nederlanders verbeteren dan je fouten."
    },
    price: { en: "Free; optional premium.", zh: "免費；可選付費進階版。", nl: "Gratis. Je kunt extra's kopen." }
  },
  {
    id: "meetup-exchange",
    name: "Dutch language exchange meetups",
    kind: "community",
    categories: ["practice"],
    region: "NL+BE",
    variants: ["nl", "be"],
    cities: ["Amsterdam", "Rotterdam", "Den Haag", "Utrecht", "Brussel", "Antwerpen", "Gent"],
    formats: ["inperson"],
    focus: ["speaking", "listening"],
    levels: ["A2", "C1"],
    cost: [0, 10],
    hours: [2, 8],
    url: "https://www.meetup.com/topics/dutch-language/",
    note: {
      en: "Evening language exchanges in bars and cafés, organised on Meetup. Good for building confidence once you can hold a basic conversation.",
      zh: "在酒吧或咖啡館舉行的晚間語言交換活動，透過 Meetup 報名。能進行基本對話後，很適合建立開口的自信。",
      nl: "Avonden in een café of bar om talen te oefenen, via Meetup. Goed voor meer zelfvertrouwen als je al een eenvoudig gesprek kunt voeren."
    },
    price: { en: "Usually free or a small fee; you buy your own drinks.", zh: "通常免費或酌收小額費用，飲料自費。", nl: "Meestal gratis of goedkoop. Je drankjes betaal je zelf." }
  },
  {
    id: "bart-de-pau",
    name: "Learn Dutch with Bart de Pau",
    kind: "creator",
    categories: ["youtube", "courses"],
    region: "online",
    variants: ["nl"],
    cities: [],
    formats: ["self", "online"],
    focus: ["listening", "grammar", "speaking"],
    levels: ["A0", "B1"],
    cost: [0, 200],
    hours: [1, 20],
    url: "https://www.learndutch.org/",
    youtube: "https://www.youtube.com/results?search_query=learn+dutch+bart+de+pau",
    note: {
      en: "One of the biggest Dutch-learning YouTube channels (200K+ subscribers): an animated soap opera, culture interviews and grammar videos. Free online lessons on his website, plus premium courses and virtual classrooms.",
      zh: "最大的荷語學習 YouTube 頻道之一（超過 20 萬訂閱）：動畫肥皂劇、文化訪談和文法影片。網站有免費線上課程，另有付費進階課程與線上教室。",
      nl: "Een van de grootste YouTube-kanalen om Nederlands te leren (meer dan 200.000 abonnees). Met een tekenfilmserie, interviews over cultuur en video's over grammatica. Gratis lessen op zijn website, en betaalde cursussen en online klassen."
    },
    price: {
      en: "YouTube and basic lessons are free. Premium #dutchgrammar course €49 for one year (discounted from €79, plus VAT in the EU). Live course €495 per level (intro + 9 sessions), book extra.",
      zh: "YouTube 和基礎課程免費。進階課程 #dutchgrammar 一年 €49（原價 €79，歐盟需另加增值稅）。直播課每級 €495（介紹課＋9 堂），教材另計。",
      nl: "YouTube en de eerste lessen zijn gratis. Premium #dutchgrammar-cursus: €49 voor een jaar (eerst €79, plus btw in de EU). Live cursus: €495 per niveau (intro + 9 lessen), boek extra."
    }
  },
  {
    id: "dutchies-to-be",
    name: "Dutchies to be (Kim)",
    kind: "creator",
    categories: ["youtube", "courses"],
    region: "online",
    variants: ["nl"],
    cities: [],
    formats: ["self"],
    focus: ["listening", "speaking", "grammar"],
    levels: ["A0", "B1"],
    cost: [0, 35],
    hours: [4, 15],
    url: "https://www.learndutchwithkim.com/course/courses",
    youtube: "https://www.youtube.com/results?search_query=dutchies+to+be",
    note: {
      en: "Kim teaches Dutch through acted, funny everyday scenes followed by the grammar behind them. Free YouTube videos, plus self-paced 3-month courses per level with lifetime access.",
      zh: "Kim 用生活情境短劇教荷語，劇情好笑，接著講解背後的文法。YouTube 影片免費，另有各級三個月自學課程，可終身觀看。",
      nl: "Kim speelt grappige scènes uit het dagelijks leven. Daarna legt ze de grammatica uit. Gratis video's op YouTube. Ook cursussen van 3 maanden per niveau, in je eigen tempo, en je mag ze altijd blijven gebruiken."
    },
    price: {
      en: "One-time: A1 or A2 course €79, B1 €99, A2 + B1 €159, A0–B1 package €199. Online community membership about €15–17 a month (billed in US dollars). Live lessons not included.",
      zh: "一次付清：A1 或 A2 課程 €79、B1 €99、A2＋B1 €159、A0–B1 全套 €199。線上社群會員約每月 €15–17（以美元計費）。不含直播課。",
      nl: "Eén keer betalen: A1 of A2 €79, B1 €99, A2 + B1 €159, pakket A0–B1 €199. Online groep: ongeveer €15–17 per maand (in dollars). Live lessen zitten er niet bij."
    }
  },
  {
    id: "easy-dutch",
    name: "Easy Dutch",
    kind: "creator",
    categories: ["youtube"],
    region: "online",
    variants: ["nl"],
    cities: [],
    formats: ["self", "online"],
    focus: ["listening", "speaking"],
    levels: ["A2", "C1"],
    cost: [0, 25],
    hours: [1, 10],
    url: "https://www.youtube.com/@EasyDutch",
    youtube: "https://www.youtube.com/@EasyDutch",
    note: {
      en: "Street interviews with real Dutch people, subtitled in Dutch and English. Great for hearing how people actually talk. Paid memberships add podcasts, transcripts and conversation sessions.",
      zh: "街頭訪問真實的荷蘭人，附荷文與英文字幕，最能聽到荷蘭人平常怎麼說話。付費會員另有 Podcast、逐字稿與會話練習。",
      nl: "Interviews op straat met echte Nederlanders, met ondertiteling in het Nederlands en Engels. Zo hoor je hoe mensen echt praten. Met een betaald lidmaatschap krijg je podcasts, teksten en gesprekken."
    },
    price: {
      en: "Videos are free on YouTube. Memberships: Basic €5, Podcast €10, Audio and Video €12, Conversation €25 a month.",
      zh: "YouTube 影片免費。會員方案：基本 €5、Podcast €10、音訊與影片 €12、會話 €25（每月）。",
      nl: "Video's zijn gratis op YouTube. Lidmaatschap per maand: Basic €5, Podcast €10, Audio en Video €12, Conversation €25."
    }
  },
  {
    id: "learn-dutch-now",
    name: "Learn Dutch Now",
    kind: "creator",
    categories: ["instagram", "courses"],
    region: "online",
    variants: ["nl"],
    cities: [],
    formats: ["self"],
    focus: ["exam", "reading", "listening", "grammar"],
    levels: ["A0", "B2"],
    cost: [0, 65],
    hours: [4, 20],
    url: "https://learndutchnow.shop/",
    instagram: "https://www.instagram.com/learn_dutch_now/",
    note: {
      en: "A large Instagram account (130K+ followers) with bite-sized vocabulary posts, plus downloadable courses and exam packs for the inburgering exam (A2) and Staatsexamen NT2 (B1).",
      zh: "大型 Instagram 帳號（超過 13 萬追蹤），提供精簡的單字貼文，另販售可下載的課程，以及融入考試（A2）和國家考試 NT2（B1）的備考包。",
      nl: "Een groot Instagram-account (meer dan 130.000 volgers) met korte posts over woorden. Ook cursussen en oefenpakketten om te downloaden, voor het inburgeringsexamen (A2) en het Staatsexamen NT2 (B1)."
    },
    price: {
      en: "One-time, lifetime access: Starter course €75, B1 course €75, both €135, Starter course + A2 exam package €199, single exam parts from €24.99.",
      zh: "一次付清、終身使用：入門課程 €75、B1 課程 €75、兩者合購 €135、入門課程＋A2 考試包 €199，單科考試資料 €24.99 起。",
      nl: "Eén keer betalen, voor altijd: Starter-cursus €75, B1-cursus €75, samen €135, Starter-cursus + A2-examenpakket €199, losse examendelen vanaf €24,99."
    }
  },
  {
    id: "learn-dutch-with-yas",
    name: "Learn Dutch with Yas",
    kind: "creator",
    categories: ["instagram", "courses"],
    region: "online",
    variants: ["nl"],
    cities: [],
    formats: ["self", "online"],
    focus: ["speaking", "grammar"],
    levels: ["A0", "C2"],
    cost: [0, 140],
    hours: [4, 12],
    url: "https://learndutchwithyas.com/learn-dutch/dutch-mastery-group-classes",
    instagram: "https://www.instagram.com/learndutchwithyas/",
    note: {
      en: "Yasmine teaches all levels: 13-week live online group classes (max 6 students), B2+ conversation classes, self-paced courses and private packages of 8 one-hour lessons.",
      zh: "Yasmine 教授各級程度：13 週線上直播團體課（最多 6 人）、B2+ 會話課、自學課程，以及 8 堂一小時的一對一套裝課。",
      nl: "Yasmine geeft les op alle niveaus: online groepslessen van 13 weken (maximaal 6 mensen), praatlessen vanaf B2, cursussen in je eigen tempo en privélessen (8 lessen van 1 uur)."
    },
    price: {
      en: "Instagram tips are free. 13-week group classes with Dutch Mastery Academy access: €350 excl. VAT paid at once, or 3 × €130 or 6 × €70 in instalments.",
      zh: "Instagram 內容免費。13 週團體課＋Dutch Mastery Academy：一次付清 €350（未稅），或分期 3 × €130、6 × €70。",
      nl: "Tips op Instagram zijn gratis. Groepslessen van 13 weken met toegang tot de Dutch Mastery Academy: €350 zonder btw in één keer, of 3 × €130, of 6 × €70."
    }
  },
  {
    id: "your-dutch-friend",
    name: "Learn Dutch with Charlotte",
    kind: "creator",
    categories: ["instagram", "courses"],
    region: "online",
    variants: ["nl"],
    cities: [],
    formats: ["self", "online"],
    focus: ["speaking", "listening", "grammar"],
    levels: ["A0", "B1"],
    cost: [0, 85],
    hours: [4, 15],
    url: "https://yourdutchfriend.org/",
    instagram: "https://www.instagram.com/your.dutchfriend/",
    note: {
      en: "Charlotte posts everyday spoken Dutch on Instagram as \"your Dutch friend\" and runs self-paced video courses (A0–A1, A1–A2, A2–B1) and live online group classes.",
      zh: "Charlotte 以「你的荷蘭朋友」身分在 Instagram 分享日常口語荷語，並開設自學影片課程（A0–A1、A1–A2、A2–B1）和線上團體直播課。",
      nl: "Charlotte laat op Instagram zien hoe Nederlanders elke dag praten. Ze heeft videocursussen in je eigen tempo (A0–A1, A1–A2, A2–B1) en live online groepslessen."
    },
    price: {
      en: "Video course €250 per level (one-time, often on sale for €199). Group classes €200 for a pack of 10. Grammar e-book €12.50.",
      zh: "影片課程每級 €250（一次付清，常有 €199 特價）。團體課 10 堂 €200。文法電子書 €12.50。",
      nl: "Videocursus: €250 per niveau (één keer betalen, vaak in de aanbieding voor €199). Groepslessen: €200 voor 10 lessen. E-book grammatica: €12,50."
    }
  },
  {
    id: "going-dutch",
    name: "Going Dutch Community",
    kind: "creator",
    categories: ["instagram", "youtube", "courses"],
    region: "online",
    variants: ["nl"],
    cities: [],
    formats: ["self", "online", "inperson"],
    focus: ["speaking", "listening", "grammar"],
    levels: ["A0", "B2"],
    cost: [0, 285],
    hours: [8, 40],
    url: "https://www.goingdutchcommunity.com/store",
    instagram: "https://www.instagram.com/goingdutchcommunity/",
    note: {
      en: "A large Instagram community (230K+ followers) with a paid \"Road to Dutch Fluency\" subscription that includes daily live classes at different levels, plus in-person events.",
      zh: "大型 Instagram 社群（超過 23 萬追蹤），付費訂閱「Road to Dutch Fluency」包含每日不同程度的直播課，另有實體活動。",
      nl: "Een grote groep op Instagram (meer dan 230.000 volgers). Met een betaald abonnement (Road to Dutch Fluency) krijg je elke dag live lessen op verschillende niveaus. Ook activiteiten in het echt."
    },
    price: {
      en: "Subscription €119 a month. 6-month package with 24 private classes €1,699. Speed Dutching evenings €5; Texel summer school €950.",
      zh: "訂閱每月 €119。含 24 堂私人課的 6 個月套裝 €1,699。Speed Dutching 活動 €5；Texel 暑期營 €950。",
      nl: "Abonnement: €119 per maand. Pakket van 6 maanden met 24 privélessen: €1.699. Speed Dutching-avond: €5. Zomerschool op Texel: €950."
    }
  },
  {
    id: "abc-dutch",
    name: "ABC Dutch",
    kind: "school",
    categories: ["school"],
    region: "NL",
    variants: ["nl"],
    cities: ["Den Haag", "Rotterdam"],
    formats: ["inperson", "online"],
    focus: ["speaking", "listening", "reading", "writing", "grammar", "exam"],
    levels: ["A0", "C1"],
    cost: [135, 1245],
    hours: [8, 80],
    url: "https://www.abcdutch.com/",
    note: {
      en: "A language school in The Hague and Rotterdam with evening and day group courses, intensive weeks, summer courses and civic integration exam preparation. Private lessons in person or on Zoom.",
      zh: "位於海牙與鹿特丹的語言學校，提供晚間與日間團體課、密集週課程、暑期班和融入考試準備。另有實體或 Zoom 一對一課。",
      nl: "Een taalschool in Den Haag en Rotterdam. Groepscursussen in de avond en overdag, intensieve weken, zomercursussen en voorbereiding op het inburgeringsexamen. Ook privéles in de klas of via Zoom."
    },
    price: {
      en: "Group courses €270–295, civic integration exam courses €275–330, day courses €225–335. Rotterdam intensive A2 €275 a week or €1,245 for 5 weeks. Private lessons on request.",
      zh: "團體課 €270–295，融入考試課程 €275–330，日間課程 €225–335。鹿特丹 A2 密集班每週 €275，5 週套裝 €1,245。一對一課程價格請洽詢。",
      nl: "Groepscursussen €270–295. Cursussen voor het inburgeringsexamen €275–330. Dagcursussen €225–335. Rotterdam intensief A2: €275 per week of €1.245 voor 5 weken. Privéles: vraag de prijs."
    }
  },
  {
    id: "sagenn",
    name: "Sagènn Educatie",
    kind: "school",
    categories: ["school"],
    region: "NL",
    variants: ["nl"],
    cities: ["Rotterdam", "Zaandam", "Alphen aan den Rijn", "Gouda", "Utrecht", "Haarlem", "'s-Hertogenbosch"],
    formats: ["inperson"],
    focus: ["speaking", "listening", "reading", "writing", "grammar", "exam"],
    levels: ["A0", "B2"],
    cost: [0, 615],
    hours: [16, 50],
    url: "https://www.sagenn.nl/educatie",
    note: {
      en: "An adult education provider with Dutch courses from A0 to B2, literacy classes, civic integration routes and Staatsexamen preparation. Each course ends with a level test.",
      zh: "成人教育機構，提供 A0 到 B2 的荷語課程、識字班、融入考試路線和國家考試準備。每期課程結束都有程度測驗。",
      nl: "Een school voor volwassenen. Cursussen Nederlands van A0 tot B2, lessen lezen en schrijven, inburgering en voorbereiding op het Staatsexamen. Na elke cursus doe je een niveautest."
    },
    price: {
      en: "€415 a month for 2 lessons a week, €515 for 3, €615 for 4, from 3 months. Includes intake test, personal advice and materials. Labour market orientation course €315 a month. DUO loan possible if you're required to do inburgering. Free lessons if you aren't, in Alphen aan den Rijn, Midden-Holland, Midden-Utrecht, Zaanstreek-Waterland, Zuid-Kennemerland/IJmond, Rotterdam Rijnmond and Noordoost-Brabant.",
      zh: "每月 €415（每週 2 堂）、€515（3 堂）、€615（4 堂），至少報名 3 個月，含入學測驗、個人諮詢與教材。荷蘭就業市場導向課程每月 €315。融入義務者可申請 DUO 貸款。非融入義務者在 Alphen aan den Rijn、Midden-Holland、Midden-Utrecht、Zaanstreek-Waterland、Zuid-Kennemerland/IJmond、鹿特丹大區與 Noordoost-Brabant 可免費上課。",
      nl: "€415 per maand voor 2 lessen per week, €515 voor 3, €615 voor 4. Minimaal 3 maanden. Met test, advies en lesmateriaal. Cursus over werk (ONA): €315 per maand. Moet je inburgeren? Dan kun je lenen bij DUO. Moet je niet inburgeren? Dan zijn de lessen gratis in Alphen aan den Rijn, Midden-Holland, Midden-Utrecht, Zaanstreek-Waterland, Zuid-Kennemerland/IJmond, Rotterdam Rijnmond en Noordoost-Brabant."
    }
  },
  {
    id: "nltraining",
    name: "NLtraining",
    kind: "school",
    categories: ["school"],
    region: "NL",
    variants: ["nl"],
    cities: ["Rotterdam", "Leiden", "Almere", "Lelystad", "Zwolle", "Gouda", "Hoorn", "Zaandam", "Barendrecht", "Hellevoetsluis", "Spijkenisse"],
    formats: ["inperson", "online"],
    focus: ["speaking", "listening", "reading", "writing", "grammar", "exam"],
    levels: ["A0", "B2"],
    cost: [0, 260],
    hours: [8, 40],
    url: "https://www.nltraining.nl/cursussen",
    note: {
      en: "Dutch courses at every level in several cities and online, including free municipality-funded courses for people who aren't required to do inburgering, and paid inburgering courses.",
      zh: "在多個城市與線上開設各級荷語課程，包括由市政府出資、給非融入義務者的免費課程，以及付費的融入課程。",
      nl: "Cursussen Nederlands op elk niveau, in verschillende steden en online. Gratis cursussen (betaald door de gemeente) voor mensen die niet moeten inburgeren. Ook betaalde inburgeringscursussen."
    },
    price: {
      en: "Online course €599 per 12-week module. Inburgering courses €16.25 per hour (DUO loan possible). Free \"Verbeter je Nederlands\" courses if you aren't required to do inburgering: Rotterdam (10–20 weeks), Leiden (12 months), and Flevoland online, Almere or Lelystad (40 weeks). Morning, afternoon or evening classes.",
      zh: "線上課程每 12 週模組 €599。融入課程每小時 €16.25（可申請 DUO 貸款）。非融入義務者可免費參加「Verbeter je Nederlands」課程：鹿特丹（10–20 週）、萊登（12 個月），以及 Flevoland 線上、Almere 或 Lelystad（40 週）。上午、下午或晚上上課。",
      nl: "Online cursus: €599 per blok van 12 weken. Inburgeringscursus: €16,25 per uur (lenen bij DUO kan). Gratis cursus \"Verbeter je Nederlands\" als je niet moet inburgeren: Rotterdam (10–20 weken), Leiden (12 maanden), en Flevoland online, Almere of Lelystad (40 weken). Les in de ochtend, middag of avond."
    }
  },
  {
    id: "dutch-approach",
    name: "Dutch Approach",
    kind: "school",
    categories: ["school", "courses"],
    region: "NL+TW",
    variants: ["nl"],
    cities: ["Amsterdam", "Eindhoven", "Taipei", "Tainan"],
    formats: ["online", "inperson"],
    focus: ["speaking", "listening", "reading", "writing", "grammar", "exam"],
    levels: ["A0", "B2"],
    cost: [148, 148],
    hours: [8, 8],
    url: "https://dutch-approach.nl/netherlands/",
    note: {
      en: "Small-group Dutch courses from beginner to B2, online and in classrooms in Amsterdam, Eindhoven, Taipei and Tainan: 10 weekly 2-hour classes per level, plus CNaVT exam preparation. Teaching in English and Mandarin, a good fit for learners from Taiwan.",
      zh: "從入門到 B2 的荷語小班課，可線上或在阿姆斯特丹、恩荷芬、台北、台南的教室上課：每級 10 週、每週一堂 2 小時，另有 CNaVT 荷語檢定準備。以英文與中文教學，很適合來自台灣的學習者。",
      nl: "Cursussen in kleine groepen, van beginner tot B2. Online en in de klas in Amsterdam, Eindhoven, Taipei en Tainan. Per niveau 10 lessen van 2 uur, één keer per week. Ook voorbereiding op het CNaVT-examen. Uitleg in het Engels en Chinees, goed voor mensen uit Taiwan."
    },
    price: {
      en: "€339 per 10-week course, plus €30.50 for textbook and website. In Taiwan about €270 per course (NT$9,900). Check the course pages for the current term.",
      zh: "每期 10 週課程 €339，另加課本與網站費 €30.50。台灣課程每期約 €270（NT$9,900）。最新學期資訊請見各課程頁面。",
      nl: "€339 per cursus van 10 weken, plus €30,50 voor boek en website. In Taiwan ongeveer €270 per cursus (NT$9.900). Kijk op de website voor de nieuwe cursussen."
    }
  },
  {
    id: "learn-with-lucas",
    name: "Learn with Lucas",
    kind: "creator",
    categories: ["youtube", "courses", "practice"],
    region: "online",
    variants: ["nl"],
    cities: [],
    formats: ["self", "online"],
    focus: ["speaking", "listening", "grammar", "exam"],
    levels: ["A1", "B2"],
    cost: [12, 100],
    hours: [4, 12],
    url: "https://learnwithlucas.com/nl/",
    youtube: "https://www.youtube.com/@realdutchwithlucas",
    note: {
      en: "Lucas runs online Dutch courses, a live supported-speaking café in the evenings and private lessons for speaking, grammar or the inburgering exam. Free videos on YouTube.",
      zh: "Lucas 開設線上荷語課程、晚間線上口說咖啡館，以及口說、文法或融入考試的一對一課程。YouTube 有免費影片。",
      nl: "Lucas heeft online cursussen, een live praatcafé in de avond en privélessen voor spreken, grammatica of het inburgeringsexamen. Gratis video's op YouTube."
    },
    price: {
      en: "Speaking café €11.99 a month (1 evening a week) or €19.99 (2 evenings), cheaper per year. Private lessons from €28. Online course prices on the website.",
      zh: "口說咖啡館每月 €11.99（每週 1 晚）或 €19.99（每週 2 晚），年繳更便宜。一對一課 €28 起。線上課程價格請至官網查看。",
      nl: "Praatcafé: €11,99 per maand (1 avond per week) of €19,99 (2 avonden). Per jaar is het goedkoper. Privéles vanaf €28. Prijzen van de online cursussen staan op de website."
    }
  },
  {
    id: "vivo-dutch",
    name: "Vivo Dutch (Vivian)",
    kind: "creator",
    categories: ["instagram", "youtube", "courses"],
    region: "online",
    variants: ["nl"],
    cities: [],
    formats: ["self", "online"],
    focus: ["speaking", "listening", "grammar", "exam"],
    levels: ["A0", "B1"],
    cost: [0, 155],
    hours: [4, 20],
    url: "https://www.vivodutch.com/",
    instagram: "https://www.instagram.com/vivodutch/",
    youtube: "https://www.youtube.com/@vivodutch",
    note: {
      en: "Vivian, a certified teacher since 2015 and former inburgering exam assessor, shares free lessons on Instagram (60K followers) and YouTube and runs 10-week online courses for A1, A2 and B1.",
      zh: "Vivian 自 2015 年起為合格荷語教師，曾任融入考試評分員。在 Instagram（6 萬追蹤）與 YouTube 分享免費教學，並開設 A1、A2、B1 的 10 週線上課程。",
      nl: "Vivian is sinds 2015 bevoegd docent en was examinator voor het inburgeringsexamen. Ze deelt gratis lessen op Instagram (60.000 volgers) en YouTube. Ze heeft online cursussen van 10 weken voor A1, A2 en B1."
    },
    price: {
      en: "Online course per level: DIY €187, DIY Plus €237, Premium with live classes €357 (excl. VAT, 3 installments possible). Colloquial Dutch course €37.",
      zh: "每級線上課程：DIY €187、DIY Plus €237、含直播課的 Premium €357（未稅，可分 3 期）。口語荷語課程 €37。",
      nl: "Online cursus per niveau: DIY €187, DIY Plus €237, Premium met live lessen €357 (zonder btw, betalen in 3 keer kan). Cursus spreektaal: €37."
    }
  },
  {
    id: "jedutchy",
    name: "JeDutchy",
    kind: "creator",
    categories: ["instagram", "courses", "practice"],
    region: "online",
    variants: ["nl"],
    cities: [],
    formats: ["online"],
    focus: ["speaking", "grammar", "writing", "exam"],
    levels: ["A0", "C1"],
    cost: [100, 650],
    hours: [4, 15],
    url: "https://jedutchy.com/",
    instagram: "https://www.instagram.com/jedutchy/",
    note: {
      en: "A certified Dutch teacher offering online group courses, private lessons, a conversation-training subscription and an inburgering masterclass.",
      zh: "合格荷語教師，提供線上團體課、一對一課程、會話訓練訂閱與融入考試大師班。",
      nl: "Een bevoegde docent Nederlands. Online groepscursussen, privélessen, een abonnement om te oefenen met praten en een masterclass inburgering."
    },
    price: {
      en: "Group courses €650. Private lessons 5 × 1 h €395 or 10 × 1 h €575, trial lesson €25. Conversation training €100 a month (8 sessions). Inburgering masterclass €100.",
      zh: "團體課 €650。一對一課 5 × 1 小時 €395 或 10 × 1 小時 €575，試聽課 €25。會話訓練每月 €100（8 堂）。融入考試大師班 €100。",
      nl: "Groepscursus €650. Privélessen: 5 × 1 uur €395 of 10 × 1 uur €575. Proefles €25. Praattraining €100 per maand (8 keer). Masterclass inburgering €100."
    }
  },
  {
    id: "dutch-speaking-academy",
    name: "Dutch Speaking Academy",
    kind: "creator",
    categories: ["instagram", "courses"],
    region: "online",
    variants: ["nl"],
    cities: [],
    formats: ["self", "online"],
    focus: ["speaking", "listening", "grammar", "exam"],
    levels: ["A0", "B2"],
    cost: [15, 1850],
    hours: [2, 30],
    url: "https://dutchspeakingacademy.nl/",
    instagram: "https://www.instagram.com/the.dutchspeakingacademy/",
    note: {
      en: "Speaking-focused video courses (beginners, inburgering A2, grammar, Dutch for parents, Dutch for social life), group conversation programmes and 1:1 coaching.",
      zh: "以口說為主的影片課程（入門、融入考試 A2、文法、給家長的荷語、社交荷語），另有團體會話課程與一對一教練。",
      nl: "Videocursussen met veel aandacht voor spreken (beginners, inburgering A2, grammatica, Nederlands voor ouders, Nederlands voor sociale contacten). Ook praatgroepen en persoonlijke coaching."
    },
    price: {
      en: "Video courses: inburgering A2 €47, Beginners €147, Dutch for Parents or Grammar €333, Dutch for Social Life €444. Group conversation course about €3,333. 1:1 programme from €5,555 for 3 months. Speaking challenge €15.",
      zh: "影片課程：融入考試 A2 €47、入門 €147、給家長的荷語或文法 €333、社交荷語 €444。團體會話課程約 €3,333。一對一課程 3 個月 €5,555 起。口說挑戰 €15。",
      nl: "Videocursussen: inburgering A2 €47, beginners €147, ouders of grammatica €333, sociale contacten €444. Praatgroep ongeveer €3.333. Persoonlijke coaching vanaf €5.555 voor 3 maanden. Spreekchallenge €15."
    }
  },
  {
    id: "easy-dutch-learning",
    name: "Easy Dutch Learning (Sanne)",
    kind: "creator",
    categories: ["instagram", "courses"],
    region: "online",
    variants: ["nl"],
    cities: [],
    formats: ["self"],
    focus: ["speaking", "listening", "reading", "grammar", "exam"],
    levels: ["A0", "C1"],
    cost: [0, 100],
    hours: [4, 20],
    url: "https://easydutchlearning.nl/",
    instagram: "https://www.instagram.com/easydutchlearning/",
    note: {
      en: "Sanne shares Dutch tips on Instagram (42K followers) and sells self-paced online courses for every level from A1 to C1, including NT2 and inburgering exam preparation, with a students' Instagram community.",
      zh: "Sanne 在 Instagram（4.2 萬追蹤）分享荷語技巧，並販售 A1 到 C1 各級自學線上課程，包含 NT2 與融入考試準備，學員可加入 Instagram 學習社群。",
      nl: "Sanne deelt tips op Instagram (42.000 volgers). Ze verkoopt online cursussen in je eigen tempo, van A1 tot C1, ook voor NT2 en het inburgeringsexamen. Met een Instagram-groep voor studenten."
    },
    price: {
      en: "One-time per level: A1–B2 €245, C1 €199 (the homepage shows €297). All five levels €1,485. Kids' courses €397. No subscription.",
      zh: "每級一次付清：A1–B2 €245、C1 €199（首頁顯示 €297）。五級全套 €1,485。兒童課程 €397。無訂閱制。",
      nl: "Eén keer betalen per niveau: A1–B2 €245, C1 €199 (op de homepage staat €297). Alle vijf niveaus €1.485. Cursussen voor kinderen €397. Geen abonnement."
    }
  },
  {
    id: "hart-voor-nederlands",
    name: "Hart voor Nederlands",
    kind: "creator",
    categories: ["instagram", "courses", "practice"],
    region: "online",
    variants: ["nl", "be"],
    cities: [],
    formats: ["online"],
    focus: ["speaking", "reading", "grammar"],
    levels: ["A1", "C1"],
    cost: [90, 600],
    hours: [4, 20],
    url: "https://hartvoornederlands.com/",
    instagram: "https://www.instagram.com/hartvoornederlands/",
    note: {
      en: "A Dutch teacher offering private and duo lessons, B2 group courses, an online book club, conversation clubs and a podcast.",
      zh: "荷語教師，提供一對一與雙人課程、B2 團體課、線上讀書會、會話俱樂部與 Podcast。",
      nl: "Een docent Nederlands met privélessen en duolessen, groepscursussen B2, een online leesclub, praatclubs en een podcast."
    },
    price: {
      en: "Private lessons: 10 h €737, 15 h €981, 20 h €1,190 (book extra). Duo lessons €320–450 per person. B2 group course €450 excl. VAT. Book club €200 for 8 online sessions. Conversation club €90–120.",
      zh: "一對一課：10 小時 €737、15 小時 €981、20 小時 €1,190（教材另計）。雙人課每人 €320–450。B2 團體課 €450（未稅）。讀書會 8 堂線上課 €200。會話俱樂部 €90–120。",
      nl: "Privéles: 10 uur €737, 15 uur €981, 20 uur €1.190 (boek extra). Duoles €320–450 per persoon. Groepscursus B2 €450 zonder btw. Leesclub €200 voor 8 online keren. Praatclub €90–120."
    }
  },
  {
    id: "sociataal",
    name: "SociaTaal",
    kind: "creator",
    categories: ["instagram", "youtube", "courses"],
    region: "online",
    variants: ["nl"],
    cities: [],
    formats: ["self", "online"],
    focus: ["speaking", "listening", "grammar"],
    levels: ["A0", "B2"],
    cost: [69, 290],
    hours: [4, 24],
    url: "https://www.sociataal.com/",
    instagram: "https://www.instagram.com/sociataal/",
    youtube: "https://www.youtube.com/c/LearnDutchOfficial",
    note: {
      en: "Interactive online group courses in small groups (4–6 students, two 2-hour live classes a week for 6 weeks), flexible courses and self-study grammar and vocabulary courses.",
      zh: "互動式線上小班課（4–6 人，每週兩堂 2 小時直播課，為期 6 週）、彈性課程，以及文法和單字自學課程。",
      nl: "Online groepscursussen in kleine groepen (4–6 mensen). Twee live lessen van 2 uur per week, 6 weken lang. Ook flexibele cursussen en zelfstudie voor grammatica en woorden."
    },
    price: {
      en: "Group course €289 all-in. Flexible course €149. Grammar Essentials A1 €89 or A2 €69. Vocabulary course A1 €69.",
      zh: "團體課全包 €289。彈性課程 €149。文法精華 A1 €89、A2 €69。A1 單字課程 €69。",
      nl: "Groepscursus €289, alles inbegrepen. Flexibele cursus €149. Grammar Essentials A1 €89 of A2 €69. Woordencursus A1 €69."
    }
  },
  {
    id: "your-dutch-teacher",
    name: "Your Dutch Teacher (Emeraude)",
    kind: "creator",
    categories: ["instagram", "courses"],
    region: "online",
    variants: ["nl"],
    cities: [],
    formats: ["online"],
    focus: ["speaking", "listening", "grammar"],
    levels: ["A0", "B2"],
    cost: [199, 600],
    hours: [12, 12],
    url: "https://yourdutchteacher.nl/",
    instagram: "https://www.instagram.com/yourdutchteacher/",
    note: {
      en: "Emeraude has taught Dutch since 2009. Small online groups of 3–6 students meet twice a week for 1.5 hours, one level in 4 weeks. Tailor-made private classes too.",
      zh: "Emeraude 自 2009 年起教荷語。線上小班 3–6 人，每週兩次、每次 1.5 小時，4 週完成一個級別。也有客製化私人課程。",
      nl: "Emeraude geeft sinds 2009 les. Kleine online groepen van 3–6 mensen, twee keer per week 1,5 uur. Eén niveau in 4 weken. Ook privélessen op maat."
    },
    price: {
      en: "Group course €199 per level (4 weeks). Tailor-made lessons €62.50 an hour, with discounts for 10 or 20 classes.",
      zh: "團體課每級 €199（4 週）。客製化課程每小時 €62.50，10 或 20 堂套裝有折扣。",
      nl: "Groepscursus €199 per niveau (4 weken). Lessen op maat €62,50 per uur, met korting voor 10 of 20 lessen."
    }
  },
  {
    id: "active-dutch",
    name: "Active Dutch",
    kind: "school",
    categories: ["instagram", "youtube", "courses", "practice"],
    region: "NL",
    variants: ["nl"],
    cities: ["Alphen aan den Rijn"],
    formats: ["inperson", "online"],
    focus: ["speaking", "listening", "grammar"],
    levels: ["A0", "B2"],
    cost: [0, 1200],
    hours: [6, 15],
    url: "https://activedutch.nl/",
    instagram: "https://www.instagram.com/activedutch/",
    note: {
      en: "Dutch for expats in Alphen aan den Rijn and online: a beginners' group course, private lessons, the Keep Talking Dutch conversation club, plus a free trial lesson and a free 5-day speaking challenge.",
      zh: "為外派人士開設的荷語課程，在 Alphen aan den Rijn 與線上上課：入門團體課、一對一課程、Keep Talking Dutch 會話俱樂部，另有免費試聽課與 5 天免費口說挑戰。",
      nl: "Nederlands voor expats in Alphen aan den Rijn en online. Een groepscursus voor beginners, privélessen en de praatclub Keep Talking Dutch. Ook een gratis proefles en een gratis spreekchallenge van 5 dagen."
    },
    price: {
      en: "Beginners' group course €635 plus book. Keep Talking Dutch €145 for a month (4 sessions), €250 for 2 months, €350 for 3. Private lessons 10 × 90 min €1,200.",
      zh: "入門團體課 €635，教材另計。Keep Talking Dutch 1 個月（4 堂）€145、2 個月 €250、3 個月 €350。一對一課 10 堂 × 90 分鐘 €1,200。",
      nl: "Groepscursus voor beginners €635 plus boek. Keep Talking Dutch: €145 voor 1 maand (4 keer), €250 voor 2 maanden, €350 voor 3. Privéles 10 × 90 minuten €1.200."
    }
  },
  {
    id: "dutch-today",
    name: "Dutch Today (Martijn)",
    kind: "creator",
    categories: ["youtube"],
    region: "online",
    variants: ["nl"],
    cities: [],
    formats: ["self"],
    focus: ["listening", "reading"],
    levels: ["A2", "B2"],
    cost: [0, 5],
    hours: [1, 10],
    url: "https://www.youtube.com/@dutchtoday",
    youtube: "https://www.youtube.com/@dutchtoday",
    note: {
      en: "Martijn's weekly Dutch lessons on YouTube and the podcast \"Dutch Today: leer Nederlands met Martijn\", with episodes marked by level.",
      zh: "Martijn 每週在 YouTube 和 Podcast「Dutch Today: leer Nederlands met Martijn」發布荷語課程，每集標示程度。",
      nl: "Martijn maakt elke week lessen Nederlands op YouTube en de podcast \"Dutch Today: leer Nederlands met Martijn\". Bij elke aflevering staat het niveau."
    },
    price: {
      en: "Free on YouTube and podcast apps. Patreon €5 a month for transcripts, exercises, word lists and extra episodes.",
      zh: "YouTube 與 Podcast 免費。Patreon 每月 €5，提供逐字稿、練習、單字表與額外集數。",
      nl: "Gratis op YouTube en in podcast-apps. Patreon: €5 per maand voor teksten, oefeningen, woordenlijsten en extra afleveringen."
    }
  },
  {
    id: "master-dutch",
    name: "Master Dutch (Kees)",
    kind: "creator",
    categories: ["instagram", "courses", "tutors"],
    region: "online",
    variants: ["nl"],
    cities: [],
    formats: ["online"],
    focus: ["speaking", "grammar"],
    levels: ["A1", "B2"],
    cost: [15, 480],
    hours: [6, 20],
    url: "https://masterdutch.com/group-classes/",
    instagram: "https://www.instagram.com/master_dutch_/",
    note: {
      en: "Kees teaches with his Three Pillar Method in three formats: group classes (A1 to B+, max. 8 people, 8 weekly 90-minute sessions), 1-on-1 lesson packs and an all-in-one subscription.",
      zh: "Kees 以「三支柱教學法」提供三種方案：團體課（A1 到 B+，最多 8 人，8 週、每週一堂 90 分鐘）、一對一課程套裝，以及全方位訂閱方案。",
      nl: "Kees geeft les met zijn Three Pillar Method, op drie manieren: groepslessen (A1 tot B+, maximaal 8 mensen, 8 lessen van 90 minuten, één keer per week), pakketten privélessen en een abonnement met alles erin."
    },
    price: {
      en: "Group classes €255 per 8-week course. 1-on-1 lessons: 4-hour pack €260, 16-hour pack €960. All-in-one subscription €14.95 a month.",
      zh: "團體課每期 8 週 €255。一對一課：4 小時套裝 €260、16 小時套裝 €960。全方位訂閱方案每月 €14.95。",
      nl: "Groepslessen €255 per cursus van 8 weken. Privéles: 4 uur €260, 16 uur €960. Abonnement met alles: €14,95 per maand."
    }
  },
  {
    id: "nederlessen",
    name: "Nederlessen (Joram)",
    kind: "creator",
    categories: ["instagram", "courses", "app"],
    region: "online",
    variants: ["nl"],
    cities: [],
    formats: ["self", "online"],
    focus: ["speaking", "reading", "grammar", "exam"],
    levels: ["A1", "B2"],
    cost: [0, 250],
    hours: [2, 16],
    url: "https://www.nederlessen.nl/",
    instagram: "https://www.instagram.com/nederlessen/",
    note: {
      en: "Joram teaches small online groups (max. 4) and private speaking lessons, including help with inburgering and the Staatsexamen NT2. He also sells self-study PDFs: graded story readers with grammar (A1–B1+), speaking guides, a verb guide and a KNM exam practice book, plus free cheat sheets.",
      zh: "Joram 開設線上小班（最多 4 人）與一對一口說課，也協助準備融入考試與國家考試 NT2。另販售自學 PDF：附文法的分級故事讀本（A1–B1+）、口說指南、動詞指南與 KNM 考試練習書，還有免費速查表。",
      nl: "Joram geeft online les in kleine groepen (maximaal 4) en privélessen spreken, ook voor inburgering en het Staatsexamen NT2. Hij verkoopt ook pdf's om zelf te leren: verhalen met grammatica (A1–B1+), gidsen voor spreken, een gids voor werkwoorden en een oefenboek voor het KNM-examen. Er zijn ook gratis spiekbriefjes."
    },
    price: {
      en: "Small group €249 for 8 sessions. Private speaking lessons from €219. Self-study PDFs €5–9.99 (KNM book €9.99), with two free guides.",
      zh: "小班課 8 堂 €249。一對一口說課 €219 起。自學 PDF €5–9.99（KNM 書 €9.99），另有兩份免費指南。",
      nl: "Kleine groep: €249 voor 8 lessen. Privéles spreken vanaf €219. Pdf's €5–9,99 (KNM-boek €9,99), en twee gratis gidsen."
    }
  },
  {
    id: "dutch-first",
    name: "Dutch First",
    kind: "school",
    categories: ["school"],
    region: "NL",
    variants: ["nl"],
    cities: ["Utrecht"],
    formats: ["inperson", "online"],
    focus: ["speaking", "listening", "reading", "writing", "grammar", "exam"],
    levels: ["A0", "B2"],
    cost: [175, 1159],
    hours: [8, 96],
    url: "https://dutchfirst.nl/",
    note: {
      en: "A language school in Utrecht with group courses from beginner to B1, intensive summer courses, conversation courses, inburgering courses and individual lessons in class or on Zoom.",
      zh: "位於烏特勒支的語言學校，提供入門到 B1 的團體課、暑期密集班、會話課、融入課程，以及實體或 Zoom 一對一課。",
      nl: "Een taalschool in Utrecht. Groepscursussen van beginner tot B1, intensieve zomercursussen, praatcursussen, inburgeringscursussen en privéles in de klas of via Zoom."
    },
    price: {
      en: "Group courses from €350 (books extra). Summer intensives €350 for 24 hours up to €1,159 for 96 hours. Inburgering courses €17 an hour. Individual lessons in packages of 5 or more.",
      zh: "團體課 €350 起（教材另計）。暑期密集班 24 小時 €350 到 96 小時 €1,159。融入課程每小時 €17。一對一課以 5 堂以上套裝購買。",
      nl: "Groepscursus vanaf €350 (boeken extra). Zomer intensief: €350 voor 24 uur tot €1.159 voor 96 uur. Inburgeringscursus €17 per uur. Privéles in pakketten van 5 lessen of meer."
    }
  },
  {
    id: "better-understanding",
    name: "Better Understanding",
    kind: "creator",
    categories: ["instagram", "courses", "tutors"],
    region: "online",
    variants: ["nl"],
    cities: [],
    formats: ["online"],
    focus: ["speaking", "listening", "reading", "writing", "grammar"],
    levels: ["A1", "B2"],
    cost: [300, 645],
    hours: [10, 12],
    url: "https://betterunderstanding.nl/",
    instagram: "https://www.instagram.com/betterunderstandingnl/",
    note: {
      en: "Online Dutch group courses from A1 to B2 in groups of 3–6 (9 weeks, two 1.5-hour classes a week), private and duo lessons, and in-company training.",
      zh: "A1 到 B2 的線上荷語小班課，每班 3–6 人（9 週、每週兩堂 1.5 小時），另有一對一、雙人課程與企業內訓。",
      nl: "Online groepscursussen van A1 tot B2, in groepen van 3–6 mensen (9 weken, twee lessen van 1,5 uur per week). Ook privélessen, duolessen en lessen op je werk."
    },
    price: {
      en: "Group course €595 for 27 hours plus €48.50 for the textbook. Private lessons €645 for 10 one-hour lessons (€322.50 each for a duo).",
      zh: "團體課 27 小時 €595，課本另計 €48.50。一對一課 10 堂一小時 €645（雙人課每人 €322.50）。",
      nl: "Groepscursus €595 voor 27 uur, plus €48,50 voor het boek. Privéles €645 voor 10 lessen van 1 uur (€322,50 per persoon voor een duo)."
    }
  },
  {
    id: "nederlands-zonder-stress",
    name: "Hallo Nederlands zonder stress",
    kind: "creator",
    categories: ["instagram", "courses", "tutors"],
    region: "online",
    variants: ["nl"],
    cities: [],
    formats: ["online"],
    focus: ["speaking", "listening", "grammar"],
    levels: ["A0", "B2"],
    cost: [100, 160],
    hours: [4, 6],
    url: "https://tidycal.com/hallonederlandszonderstress",
    instagram: "https://www.instagram.com/dutchwithoutstress/",
    note: {
      en: "A Dutch teacher offering private lessons for B1–B2 learners and an 8-week intensive small-group course for beginners. Book directly through the online calendar.",
      zh: "荷語老師，提供 B1–B2 一對一課程，以及給初學者的 8 週密集小班課。可直接透過線上行事曆預約。",
      nl: "Een docent Nederlands met privélessen voor B1–B2 en een intensieve cursus van 8 weken in een kleine groep voor beginners. Boek direct in de online agenda."
    },
    price: {
      en: "Private lessons B1–B2 €160 a month (4 bookings). Intensive beginners' small-group course €195 for 8 weeks of 1.5-hour classes.",
      zh: "B1–B2 一對一課每月 €160（4 堂）。初學者密集小班課 8 週、每堂 1.5 小時，共 €195。",
      nl: "Privéles B1–B2: €160 per maand (4 lessen). Intensieve cursus voor beginners in een kleine groep: €195 voor 8 weken, lessen van 1,5 uur."
    }
  },
  {
    id: "dive-into-dutch",
    name: "Dive into Dutch",
    kind: "creator",
    categories: ["instagram", "tutors", "courses"],
    region: "online",
    variants: ["nl"],
    cities: ["Den Haag", "Leiden", "Delft", "Alphen aan den Rijn"],
    formats: ["online", "inperson"],
    focus: ["speaking", "listening", "reading", "writing", "grammar"],
    levels: ["A1", "B2"],
    cost: [475, null],
    hours: [3, 8],
    url: "https://www.diveintodutch.nl/",
    instagram: "https://www.instagram.com/diveintodutch/",
    note: {
      en: "A calm, structured 4-month 1:1 coaching programme: 14 online sessions of 50 minutes (or 12 plus 2 coffee sessions in The Hague, Leiden, Delft or Alphen aan den Rijn), homework, a weekly check-in, group meet-ups with other students, the Taalcompleet book with its online platform, and access to the Dive into Dutch Club. Small-group lessons too.",
      zh: "平穩、有結構的 4 個月一對一教練課程：14 堂 50 分鐘線上課（或 12 堂線上課加 2 次在海牙、萊登、台夫特或 Alphen aan den Rijn 的咖啡課），附作業、每週一次進度確認、學員聚會、Taalcompleet 課本與線上練習平台，以及 Dive into Dutch Club 會員資格。另有小班課。",
      nl: "Rustige, duidelijke coaching van 4 maanden, alleen met de docent: 14 online lessen van 50 minuten (of 12, plus 2 keer koffie in Den Haag, Leiden, Delft of Alphen aan den Rijn). Met huiswerk, elke week een check-in, bijeenkomsten met andere studenten, het boek Taalcompleet met website, en de Dive into Dutch Club. Ook lessen in kleine groepen."
    },
    price: {
      en: "1:1 programme: 4 months from €1,899, including book and club access. Coffee sessions cost extra. Small-group prices on request.",
      zh: "一對一課程：4 個月 €1,899 起，含課本與俱樂部資格。咖啡課需另付費。小班課價格請洽詢。",
      nl: "Coaching: 4 maanden vanaf €1.899, met boek en club. De koffieafspraken kosten extra. Prijs voor kleine groepen: vraag het."
    }
  },
  {
    id: "zeg-maar-nederlands",
    name: "Zeg maar Nederlands",
    kind: "ai",
    categories: ["youtube"],
    region: "online",
    variants: ["nl"],
    cities: [],
    formats: ["self"],
    focus: ["listening", "speaking"],
    levels: ["A1", "C1"],
    cost: [0, 0],
    hours: [1, 10],
    url: "https://www.youtube.com/@ZegmaarNederlands",
    youtube: "https://www.youtube.com/@ZegmaarNederlands",
    note: {
      en: "A YouTube channel about how Dutch people really speak in everyday life: recognisable dialogues, practical language tips, clear lessons and Dutch culture. The content is AI-generated: the presenters (Ling, Sam, Marieke, Jenny, Mateo and friends) are not real teachers. For beginners to advanced learners.",
      zh: "介紹荷蘭人日常生活中真正怎麼說話的 YouTube 頻道：貼近生活的對話、實用語言技巧、清楚的課程與荷蘭文化。內容由 AI 生成：主持人（Ling、Sam、Marieke、Jenny、Mateo 等）並非真人老師。適合初學者到進階學習者。",
      nl: "Een YouTube-kanaal over hoe Nederlanders echt praten: herkenbare gesprekken, handige tips, duidelijke lessen en Nederlandse cultuur. De video's zijn gemaakt met AI: de presentatoren (Ling, Sam, Marieke, Jenny, Mateo en anderen) zijn geen echte docenten. Voor beginners en gevorderden."
    },
    price: { en: "Free on YouTube.", zh: "YouTube 免費觀看。", nl: "Gratis op YouTube." }
  },
  {
    id: "strooptaal",
    name: "StroopTaal",
    kind: "app",
    categories: ["app"],
    region: "online",
    variants: ["nl"],
    cities: [],
    formats: ["self"],
    focus: ["speaking", "listening", "reading", "grammar", "exam"],
    levels: ["A0", "C1"],
    cost: [0, 13],
    hours: [2, 20],
    url: "https://strooptaal.app/",
    note: {
      en: "An app for people living in the Netherlands, covering A0 to C1: a lesson path, word games, flashcards with daily reviews, podcasts and a culture quiz. Premium adds AI voice conversations, pronunciation scores and inburgering exam practice. Independent, not run by DUO; the interface is available in several languages.",
      zh: "為住在荷蘭的人設計的 App，涵蓋 A0 到 C1：循序課程、單字遊戲、每日複習的單字卡、Podcast 與文化測驗。Premium 另有 AI 語音對話、發音評分與融入考試練習。為獨立 App，非 DUO 官方；介面提供多種語言。",
      nl: "Een app voor mensen die in Nederland wonen, van A0 tot C1. Met lessen, woordspelletjes, flashcards om elke dag te herhalen, podcasts en een quiz over cultuur. Premium heeft ook gesprekken met AI, een score voor je uitspraak en oefenen voor het inburgeringsexamen. Niet van DUO. De app is er in verschillende talen."
    },
    price: {
      en: "Free basics. Plus from €7.99 a month. Premium €12.99 a month, €29.99 for 3 months, or €69.99–89.99 a year (App Store, Netherlands).",
      zh: "基本功能免費。Plus 每月 €7.99 起。Premium 每月 €12.99、3 個月 €29.99，或每年 €69.99–89.99（荷蘭 App Store）。",
      nl: "Basis gratis. Plus vanaf €7,99 per maand. Premium: €12,99 per maand, €29,99 voor 3 maanden of €69,99–89,99 per jaar (App Store, Nederland)."
    }
  },
  {
    id: "dutch-in-utrecht",
    name: "Dutch in Utrecht",
    categories: ["tutors"],
    region: "NL",
    variants: ["nl"],
    cities: ["Utrecht"],
    formats: ["inperson", "online"],
    focus: ["speaking", "listening", "reading", "writing", "grammar", "exam"],
    levels: ["A0", "C2"],
    cost: [110, 360],
    hours: [4, 12],
    url: "http://dutchinutrecht.nl/",
    note: {
      en: "A Dutch teacher offering classes at every level, in person in Utrecht or live online: beginner and intermediate courses, custom courses built around your needs, and inburgering exam preparation. Learn alone or with friends.",
      zh: "在烏特勒支實體授課、也提供線上直播課的荷語老師，涵蓋所有程度：初級與中級課程、依需求量身打造的課程，以及融入考試準備。可單獨上課，也可與朋友一起上。",
      nl: "Een docent Nederlands voor alle niveaus, in de klas in Utrecht of live online. Cursussen voor beginners en gevorderden, cursussen op maat en voorbereiding op het inburgeringsexamen. Leer alleen of met vrienden."
    },
    price: {
      en: "€27.50 an hour for beginner, intermediate and inburgering courses; €30 an hour for custom courses. The second and third student in a group get 40% off.",
      zh: "初級、中級與融入考試課程每小時 €27.50；客製化課程每小時 €30。兩人以上同班，第二與第三位學員享 6 折優惠。",
      nl: "€27,50 per uur voor beginners, gevorderden en inburgering. €30 per uur voor cursussen op maat. De tweede en derde student in een groep krijgen 40% korting."
    }
  },
  {
    id: "lest-best",
    name: "Lest Best",
    kind: "school",
    categories: ["school"],
    region: "NL",
    variants: ["nl"],
    cities: ["Utrecht", "Rotterdam"],
    formats: ["inperson", "online"],
    focus: ["speaking", "listening", "reading", "writing", "grammar", "exam"],
    levels: ["A0", "C1"],
    cost: [265, 750],
    hours: [10, 60],
    url: "https://lestbest.nl/cursussen-overzicht/",
    note: {
      en: "A language school for highly educated learners in Utrecht, Rotterdam and online, with courses from A0 to C1. Choose intensive (6 weeks), semi-intensive (9 weeks) or the once-a-week \"Nederlands in de praktijk\" courses (13 weeks) for everyday Dutch at work and socially. Also NT2 exam training and private lessons from B1.",
      zh: "位於烏特勒支、鹿特丹並提供線上課程的語言學校，對象為高學歷學習者，課程從 A0 到 C1。可選擇密集班（6 週）、半密集班（9 週），或每週一次、為期 13 週的「Nederlands in de praktijk」實用課，練習工作與社交中的日常荷語。也有 NT2 考試訓練，以及 B1 以上的一對一課程。",
      nl: "Een taalschool voor hoogopgeleiden in Utrecht, Rotterdam en online. Cursussen van A0 tot C1. Kies intensief (6 weken), half-intensief (9 weken) of \"Nederlands in de praktijk\" (13 weken, één keer per week): Nederlands voor werk en vrije tijd. Ook examentraining NT2 en privéles vanaf B1."
    },
    price: {
      en: "Nederlands in de praktijk €795 (13 weeks, once a week). Intensive (6 weeks) or semi-intensive (9 weeks) courses €1,099; evening programme or Summer School €1,045. NT2 exam training €875. Private lessons from €130 per lesson hour (at least 10 sessions of 1.5 hours, €1,950). €50 off each follow-up course, up to €150. Books extra.",
      zh: "Nederlands in de praktijk 實用課 €795（13 週，每週一次）。密集班（6 週）或半密集班（9 週）€1,099；晚間班或暑期班 €1,045。NT2 考試訓練 €875。一對一課每堂課時 €130 起（至少 10 次、每次 1.5 小時，€1,950）。每報名下一期課程折 €50，最多折 €150。教材另計。",
      nl: "Nederlands in de praktijk: €795 (13 weken, één keer per week). Intensief (6 weken) of half-intensief (9 weken): €1.099. Avondprogramma of Summer School: €1.045. Examentraining NT2: €875. Privéles vanaf €130 per lesuur (minimaal 10 lessen van 1,5 uur, €1.950). €50 korting op elke volgende cursus, tot €150. Boeken betaal je zelf."
    }
  },
  {
    id: "flowently",
    name: "Flowently: Daily Dutch in 30h",
    kind: "school",
    categories: ["school"],
    region: "NL",
    variants: ["nl"],
    cities: [],
    formats: ["inperson", "online"],
    focus: ["speaking", "listening", "grammar"],
    levels: ["A0", "A1"],
    cost: [120, 1000],
    hours: [8, 30],
    url: "https://flowently.com/language-sessions/daily-dutch-in-30-h-explained/",
    note: {
      en: "A 30-hour beginner programme with a private tutor, online or in person: you often meet in a café and practise ordering, shopping and small talk on the spot. Covers your first 1,000 words, basic grammar and pronunciation. Sessions 7 days a week, 8:00–22:00.",
      zh: "與私人家教一起上的 30 小時初學者課程，可線上或實體上課：常約在咖啡館見面，當場練習點餐、購物和閒聊。內容包括最初的 1,000 個單字、基礎文法與發音。每週 7 天、08:00–22:00 都能上課。",
      nl: "Een cursus van 30 uur voor beginners, met een eigen docent. Online of in het echt: vaak spreek je af in een café en oefen je meteen met bestellen, winkelen en praten. Je leert je eerste 1.000 woorden, grammatica en uitspraak. Les op alle dagen, van 8:00 tot 22:00."
    },
    price: {
      en: "Trial package of 3 hours €120 (€150 for two people). Solo packages: 10 hours €750 (€75 an hour), 30 hours €1,999 (€67 an hour), 60 hours €3,960 (€66 an hour). Duo packages with a friend: 10 hours €938, 30 hours €2,562, 60 hours €4,950 (€41–47 an hour each). Valid for 1 year. Drinks during café sessions are extra.",
      zh: "3 小時體驗方案 €120（兩人 €150）。個人方案：10 小時 €750（每小時 €75）、30 小時 €1,999（每小時 €67）、60 小時 €3,960（每小時 €66）。與朋友一起的雙人方案：10 小時 €938、30 小時 €2,562、60 小時 €4,950（每人每小時 €41–47）。效期 1 年。在咖啡館上課的飲料費另計。",
      nl: "Proefpakket van 3 uur: €120 (€150 voor 2 mensen). Alleen: 10 uur €750 (€75 per uur), 30 uur €1.999 (€67 per uur), 60 uur €3.960 (€66 per uur). Met een vriend (duo): 10 uur €938, 30 uur €2.562, 60 uur €4.950 (€41–47 per uur per persoon). 1 jaar geldig. Drankjes in het café betaal je zelf."
    }
  },
  {
    id: "kickstart-school",
    name: "Kickstart School",
    kind: "school",
    categories: ["school"],
    region: "NL",
    variants: ["nl"],
    cities: ["Den Haag"],
    formats: ["self", "inperson", "online"],
    focus: ["speaking", "listening", "reading", "writing", "grammar"],
    levels: ["A0", "C1"],
    cost: [0, 240],
    hours: [12, 40],
    url: "https://www.kickstartschool.nl/dutch-group-courses",
    note: {
      en: "A language school in The Hague with group courses from beginner to advanced, in the classroom (max. 10), online (max. 8) or hybrid. Once a week or semi-intensive twice a week. Also a free Kickstart School toolkit with vocabulary, grammar tips, worksheets and links to practise.",
      zh: "位於海牙的語言學校，提供從初級到高級的團體課，可選實體（最多 10 人）、線上（最多 8 人）或混合上課，每週一次或每週兩次的半密集班。另有免費的 Kickstart School 學習工具包，包含單字、文法技巧、練習單與練習資源連結。",
      nl: "Een taalschool in Den Haag. Groepscursussen van beginner tot gevorderd: in de klas (maximaal 10), online (maximaal 8) of allebei. Eén keer per week of twee keer per week (half-intensief). Ook een gratis toolkit met woorden, tips over grammatica, werkbladen en links om te oefenen."
    },
    price: {
      en: "Free toolkit. Once-a-week group course €420 for 24 hours (€450 from 1 January 2027), book extra (about €48.50). A0–A2 in two courses €840. Basic Dutch for au pairs €380. Students and au pairs get €40 off some courses. Semi-intensive courses (48 hours) are listed at €720, but that page shows old dates, so check with the school.",
      zh: "學習工具包免費。每週一次的團體班 24 小時 €420（2027 年 1 月 1 日起調漲為 €450），教材另計（約 €48.50）。A0–A2 兩期合購 €840。互惠生（au pair）基礎荷語班 €380。部分課程學生與互惠生可折 €40。半密集班（48 小時）標價 €720，但該頁面日期已過時，請向學校確認。",
      nl: "Toolkit gratis. Groepscursus één keer per week: €420 voor 24 uur (€450 vanaf 1 januari 2027), boek extra (ongeveer €48,50). A0–A2 in twee cursussen: €840. Basiscursus voor au pairs: €380. Studenten en au pairs krijgen bij sommige cursussen €40 korting. Half-intensief (48 uur) staat op €720, maar met oude data. Vraag het aan de school."
    }
  },
  {
    id: "dutch-on-track",
    name: "Dutch on Track",
    kind: "school",
    categories: ["school"],
    region: "NL",
    variants: ["nl"],
    cities: ["Eindhoven"],
    formats: ["inperson", "online"],
    focus: ["speaking", "listening", "grammar"],
    levels: ["A0", "B1"],
    cost: [150, 200],
    hours: [8, 16],
    url: "https://dutchontrack.nl/",
    note: {
      en: "Dutch courses for expats in Eindhoven, Tilburg and online, with a focus on speaking and understanding. Groups of 8–10 meet once a week for 2 hours: evenings in Eindhoven, afternoons online. New courses start every quarter, plus a one-year track from A0 to B1 and a conversation course from A2.",
      zh: "為外籍人士開設的荷語課程，地點在恩荷芬、蒂爾堡與線上，著重口說和聽力。8–10 人一班，每週一次、每次 2 小時：恩荷芬為晚上，線上為下午。每季開新班，另有從 A0 到 B1 的一年課程，以及 A2 以上的會話課。",
      nl: "Cursussen Nederlands voor expats in Eindhoven, Tilburg en online. Veel aandacht voor spreken en luisteren. Groepen van 8–10 mensen, één keer per week 2 uur: in Eindhoven in de avond, online in de middag. Elk kwartaal starten nieuwe cursussen. Ook een jaar van A0 tot B1 en een praatcursus vanaf A2."
    },
    price: {
      en: "A0–A1 or A1–A2 €500 each (11 lessons of 2 hours). A2–B1 €985 (21 lessons), or 3 × €341 in instalments (€1,023). One year A0–B1 €1,786.50 paid upfront, or €1,850 in three parts. Study materials included.",
      zh: "A0–A1 或 A1–A2 各 €500（11 堂、每堂 2 小時）。A2–B1 €985（21 堂），或分 3 期每期 €341（共 €1,023）。A0–B1 一年課程一次付清 €1,786.50，或分三期共 €1,850。皆含教材。",
      nl: "A0–A1 of A1–A2: €500 (11 lessen van 2 uur). A2–B1: €985 (21 lessen), of 3 × €341 (samen €1.023). Een jaar A0–B1: €1.786,50 in één keer, of €1.850 in drie delen. Lesmateriaal inbegrepen."
    }
  },
  {
    id: "taalboost",
    name: "TaalBoost",
    kind: "school",
    categories: ["school"],
    region: "NL",
    variants: ["nl"],
    cities: ["Amsterdam"],
    formats: ["inperson", "online"],
    focus: ["speaking", "listening", "reading", "writing", "grammar"],
    levels: ["A0", "C1"],
    cost: [160, 550],
    hours: [12, 40],
    url: "https://www.taalboost.nl/",
    instagram: "https://www.instagram.com/taalboost/",
    note: {
      en: "A language school in Amsterdam (Chasséstraat) and online, with 30-hour courses from beginner to C1: evening, morning or Saturday classes online, evening classes in Amsterdam, and an intensive week for A1–A2. Also an online conversation course from B1, and private or duo lessons.",
      zh: "位於阿姆斯特丹（Chasséstraat）並提供線上課程的語言學校，30 小時的課程從初級到 C1：線上有晚間、早上或週六班，阿姆斯特丹有實體晚間班，另有 A1–A2 的一週密集班。也有 B1 以上的線上會話課，以及一對一或兩人小班課。",
      nl: "Een taalschool in Amsterdam (Chasséstraat) en online. Cursussen van 30 uur, van beginner tot C1: online in de avond, de ochtend of op zaterdag, in de avond in Amsterdam, en een intensieve week voor A1–A2. Ook een online praatcursus vanaf B1, en privé- of duolessen."
    },
    price: {
      en: "Online evening, morning or Saturday course €399 (30 hours in 6 or 10 weeks). Evening course in Amsterdam €549 (30 hours in 6 weeks). Intensive week in Amsterdam €549 (30 hours in 6 days). Online conversation course from B1 €249 (15 hours). Private and duo lessons: ask for a quote.",
      zh: "線上晚間、早上或週六班 €399（6 或 10 週共 30 小時）。阿姆斯特丹實體晚間班 €549（6 週共 30 小時）。阿姆斯特丹一週密集班 €549（6 天共 30 小時）。B1 以上線上會話課 €249（15 小時）。一對一與兩人小班課需另外報價。",
      nl: "Online in de avond, ochtend of op zaterdag: €399 (30 uur in 6 of 10 weken). Avondcursus in Amsterdam: €549 (30 uur in 6 weken). Intensieve week in Amsterdam: €549 (30 uur in 6 dagen). Online praatcursus vanaf B1: €249 (15 uur). Privé- en duolessen: vraag de prijs."
    }
  },
  {
    id: "glosbe",
    name: "Glosbe",
    kind: "dictionary",
    categories: ["dictionary"],
    region: "online",
    variants: ["nl", "be"],
    cities: [],
    formats: ["self"],
    focus: ["reading", "grammar"],
    levels: ["A0", "C2"],
    cost: [0, 0],
    hours: [1, 4],
    url: "https://glosbe.com/nl/en",
    note: {
      en: "A free online dictionary between Dutch and almost any language, including English and Chinese. Besides translations it shows dozens of example sentences, so you can see how a word is really used, and you can listen to the pronunciation.",
      zh: "免費的線上字典，荷語可對照幾乎所有語言，包括英文和中文。除了翻譯，還提供大量例句，讓你看到單字實際怎麼用，也可以聽發音。",
      nl: "Een gratis woordenboek op internet. Van Nederlands naar bijna elke taal, ook Engels en Chinees. Je ziet niet alleen de vertaling, maar ook veel voorbeeldzinnen. Zo zie je hoe je een woord echt gebruikt. Je kunt ook luisteren hoe je het uitspreekt."
    }
  },
  {
    id: "woordenlijst",
    name: "Woordenlijst Nederlandse Taal",
    kind: "dictionary",
    categories: ["dictionary"],
    region: "online",
    variants: ["nl", "be"],
    cities: [],
    formats: ["self"],
    focus: ["reading", "grammar"],
    levels: ["A0", "C2"],
    cost: [0, 0],
    hours: [1, 4],
    url: "https://woordenlijst.org/",
    note: {
      en: "The official Dutch spelling list (\"het Groene Boekje\") from the Dutch Language Union, used in the Netherlands and Flanders. It has no translations, but shows the correct spelling, articles (de/het), plurals and verb forms of every word, and lets you hear the pronunciation.",
      zh: "荷蘭語聯盟（Taalunie）出版的官方荷語拼字表（俗稱「綠皮書」），荷蘭和法蘭德斯通用。沒有翻譯，但能查到每個單字的正確拼法、冠詞（de/het）、複數和動詞變化，也可以聽發音。",
      nl: "De officiële lijst met de juiste spelling (\"het Groene Boekje\") van de Taalunie, voor Nederland en Vlaanderen. Er staan geen vertalingen in. Je vindt wel de spelling, het lidwoord (de of het), het meervoud en de vormen van werkwoorden. Je kunt ook luisteren hoe je een woord uitspreekt."
    }
  }
];
