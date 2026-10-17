/*
  All resources shown on the site live in this list.

  To add one, copy an existing entry, paste it at the end of the list, and change
  the values. Field guide:

  id          unique short name, letters/numbers/dashes only
  name        resource name (shown as-is in both languages)
  kind        library | government | school | university | app | course |
              tutors | creator | media | podcast | community
  region      "NL", "BE", "NL+BE" or "online"
  cities      cities with in-person sessions, [] if none
  formats     any of "self" (self-paced), "inperson", "online" (live online class)
  focus       any of "speaking", "listening", "reading", "writing", "grammar", "exam"
  levels      [from, to] using A0 A1 A2 B1 B2 C1 C2
  cost        [min, max] typical euros per month; [0, 0] means free;
              use null for max when the paid price is unknown
  hours       [min, max] typical hours per month the resource expects
  url         main link
  instagram / youtube   optional profile links
  review      true = not yet reviewed by Inka; shows a "Not yet reviewed" note
  note        short description { en: "...", zh: "..." }
  price       optional price detail { en: "...", zh: "..." }
*/
window.RESOURCES = [
  {
    id: "taalhuis",
    name: "Taalhuis (Bibliotheek)",
    kind: "library",
    region: "NL",
    cities: ["Amsterdam", "Rotterdam", "Den Haag", "Utrecht", "Eindhoven", "Groningen", "Leiden"],
    formats: ["inperson"],
    focus: ["speaking", "reading", "writing"],
    levels: ["A0", "B1"],
    cost: [0, 0],
    hours: [2, 16],
    url: "https://www.bibliotheek.nl/",
    note: {
      en: "Most Dutch public libraries run a Taalhuis: a free drop-in desk that matches you with a course, a volunteer language buddy or a study group. Libraries can also lend NT2 textbooks.",
      zh: "荷蘭大多數公立圖書館都設有 Taalhuis（語言之家）：免費諮詢櫃台，幫你媒合課程、志工語伴或讀書會。圖書館也能借到 NT2 荷語教材。"
    },
    price: { en: "Free. Library membership may be needed to borrow books.", zh: "免費。借書可能需要辦圖書證。" }
  },
  {
    id: "taalcafe",
    name: "Taalcafé",
    kind: "community",
    region: "NL+BE",
    cities: ["Amsterdam", "Rotterdam", "Den Haag", "Utrecht", "Eindhoven", "Antwerpen", "Gent", "Brussel"],
    formats: ["inperson"],
    focus: ["speaking", "listening"],
    levels: ["A1", "B2"],
    cost: [0, 0],
    hours: [2, 8],
    url: "https://rotterdamstyle.com/education/practise-dutch-at-the-taalcafe-in-rotterdam",
    note: {
      en: "Informal conversation tables run by libraries, community centres and city halls. You need some basic Dutch (around A1) to join in. Search \"taalcafé\" plus your city.",
      zh: "由圖書館、社區中心或市政府舉辦的荷語聊天聚會，氣氛輕鬆。需要一點基礎（約 A1）才能加入對話。搜尋「taalcafé + 你的城市」即可找到。"
    },
    price: { en: "Usually free, no booking needed.", zh: "通常免費，不需預約。" }
  },
  {
    id: "inburgering-gemeente",
    name: "Inburgering via your gemeente",
    kind: "government",
    region: "NL",
    cities: ["Amsterdam", "Rotterdam", "Den Haag", "Utrecht", "Eindhoven", "Groningen", "Leiden"],
    formats: ["inperson", "online"],
    focus: ["speaking", "listening", "reading", "writing", "exam"],
    levels: ["A0", "B1"],
    cost: [0, 0],
    hours: [40, 80],
    url: "https://www.inburgeren.nl/en/",
    note: {
      en: "If you are required to complete civic integration (Wet inburgering 2021), your city hall arranges and pays for your learning route to B1. Volunteers who aren't required can sometimes join, or borrow from DUO.",
      zh: "如果你屬於需完成融入考試（Wet inburgering 2021）的對象，市政府會為你安排並支付到 B1 的學習路線。非強制者有時也能自願參加，或向 DUO 申請學習貸款。"
    },
    price: { en: "Free if your gemeente is responsible for your integration; otherwise a DUO loan is possible.", zh: "若由市政府負責你的融入程序則免費；否則可向 DUO 申請貸款。" }
  },
  {
    id: "naar-nederland",
    name: "Naar Nederland",
    kind: "government",
    region: "online",
    cities: [],
    formats: ["self"],
    focus: ["listening", "reading", "speaking", "exam"],
    levels: ["A0", "A1"],
    cost: [0, 0],
    hours: [4, 30],
    url: "https://www.naarnederland.nl/",
    note: {
      en: "The Dutch government's free self-study pack for the civic integration exam abroad: a film about life in the Netherlands, practice exercises and the A1 speaking test format.",
      zh: "荷蘭政府提供的免費自學包，專為海外融入考試準備：介紹荷蘭生活的影片、練習題，以及 A1 口說考試題型。"
    }
  },
  {
    id: "oefenen-nl",
    name: "Oefenen.nl",
    kind: "course",
    region: "online",
    cities: [],
    formats: ["self"],
    focus: ["listening", "reading", "writing"],
    levels: ["A0", "A2"],
    cost: [0, 0],
    hours: [1, 30],
    url: "https://oefenen.nl/",
    note: {
      en: "Free online exercise programmes from Stichting Expertisecentrum Oefenen.nl, built for adults learning everyday Dutch. Short videos with practical topics such as doctors, shopping and work.",
      zh: "Oefenen.nl 提供的免費線上練習，專為學習日常荷語的成人設計。短片主題貼近生活，例如看醫生、購物和工作。"
    }
  },
  {
    id: "het-begint-met-taal",
    name: "Het Begint met Taal",
    kind: "community",
    region: "NL",
    cities: ["Amsterdam", "Rotterdam", "Den Haag", "Utrecht", "Eindhoven", "Groningen", "Leiden"],
    formats: ["inperson"],
    focus: ["speaking", "listening"],
    levels: ["A1", "B1"],
    cost: [0, 0],
    hours: [4, 8],
    url: "https://hetbegintmettaal.nl/",
    note: {
      en: "A national network of organisations that pair newcomers with a volunteer taalmaatje (language buddy) for weekly conversation practice.",
      zh: "全國性的語言志工網絡，為新移民配對志工語伴（taalmaatje），每週一起練習對話。"
    }
  },
  {
    id: "nos-makkelijke-taal",
    name: "NOS Journaal in Makkelijke Taal",
    kind: "media",
    region: "online",
    cities: [],
    formats: ["self"],
    focus: ["listening"],
    levels: ["A2", "B1"],
    cost: [0, 0],
    hours: [1, 10],
    url: "https://nos.nl/l/2536458",
    note: {
      en: "The national broadcaster's news in easy Dutch: fewer topics, slower pace and every hard word explained. Episodes are also on YouTube.",
      zh: "荷蘭國家廣播公司的簡易荷語新聞：主題較少、語速較慢，難字都會解釋。YouTube 上也看得到。"
    }
  },
  {
    id: "jeugdjournaal",
    name: "NOS Jeugdjournaal",
    kind: "media",
    region: "online",
    cities: [],
    formats: ["self"],
    focus: ["listening", "reading"],
    levels: ["A2", "B2"],
    cost: [0, 0],
    hours: [1, 10],
    url: "https://jeugdjournaal.nl/",
    note: {
      en: "Daily news for children, with clear speech and short articles. A favourite stepping stone between textbook Dutch and the regular news.",
      zh: "給兒童看的每日新聞，發音清楚、文章簡短。是從課本荷語過渡到一般新聞的好選擇。"
    }
  },
  {
    id: "npo-start",
    name: "NPO Start",
    kind: "media",
    region: "online",
    cities: [],
    formats: ["self"],
    focus: ["listening"],
    levels: ["B1", "C2"],
    cost: [0, 8],
    hours: [1, 40],
    url: "https://npo.nl/start",
    note: {
      en: "Dutch public TV on demand. Turn on Dutch subtitles to train your ear on real series, documentaries and talk shows.",
      zh: "荷蘭公共電視隨選平台。打開荷文字幕，用真實的影集、紀錄片和談話節目訓練聽力。"
    },
    price: { en: "Much is free; NPO Plus removes ads and unlocks the archive.", zh: "大部分免費；NPO Plus 付費版無廣告並可看完整片庫。" }
  },
  {
    id: "wablieft",
    name: "Wablieft",
    kind: "media",
    region: "BE",
    cities: [],
    formats: ["self"],
    focus: ["reading"],
    levels: ["A2", "B1"],
    cost: [0, 8],
    hours: [1, 10],
    url: "https://www.wablieft.be/",
    note: {
      en: "A Flemish newspaper written in clear, simple Dutch. Good weekly reading practice if you live in Belgium or want Flemish vocabulary.",
      zh: "以清楚簡單的荷語撰寫的法蘭德斯報紙。住在比利時或想學比利時荷語詞彙的人，很適合每週閱讀練習。"
    },
    price: { en: "Some articles free online; subscription for the full paper.", zh: "部分文章可免費線上閱讀；完整報紙需訂閱。" },
    review: true
  },
  {
    id: "huis-nederlands-brussel",
    name: "Huis van het Nederlands Brussel",
    kind: "government",
    region: "BE",
    cities: ["Brussel"],
    formats: ["inperson", "online"],
    focus: ["speaking", "listening", "reading", "writing"],
    levels: ["A0", "C1"],
    cost: [0, 0],
    hours: [1, 2],
    url: "https://www.huisnederlandsbrussel.be/",
    note: {
      en: "Free advice and a placement test, then they point you to the right course in Brussels, free or paid, in person or online. They also list practice activities like theatre and conversation groups.",
      zh: "提供免費諮詢和分級測驗，再幫你找到布魯塞爾合適的課程（免費或付費、實體或線上）。也整理了戲劇、聊天小組等練習活動。"
    },
    price: { en: "Advice is free; the courses they refer you to vary.", zh: "諮詢免費；推薦的課程費用不一。" }
  },
  {
    id: "atlas-antwerpen",
    name: "Atlas Antwerpen",
    kind: "government",
    region: "BE",
    cities: ["Antwerpen"],
    formats: ["inperson"],
    focus: ["speaking", "listening", "reading", "writing"],
    levels: ["A0", "C1"],
    cost: [0, 0],
    hours: [1, 2],
    url: "https://www.atlas-antwerpen.be/",
    note: {
      en: "Antwerp's integration and Dutch-learning centre. Book an intake to get matched with a course and practice opportunities in the city.",
      zh: "安特衛普的融入與荷語學習中心。預約諮詢後，他們會為你媒合城市裡的課程和練習機會。"
    },
    price: { en: "Intake and advice are free.", zh: "諮詢與分級免費。" }
  },
  {
    id: "cvo-flanders",
    name: "CVO adult education centres",
    kind: "school",
    region: "BE",
    cities: ["Antwerpen", "Gent", "Brussel", "Leuven"],
    formats: ["inperson", "online"],
    focus: ["speaking", "listening", "reading", "writing", "grammar"],
    levels: ["A0", "C1"],
    cost: [0, 72],
    hours: [16, 48],
    url: "https://www.vlaanderen.be/onderwijs-en-vorming/school-en-studiekosten/kosten-volwassenenonderwijs",
    note: {
      en: "Flemish government-funded adult education centres (Centra voor Volwassenenonderwijs) offer full NT2 courses at subsidised prices. Your Huis van het Nederlands or Atlas can refer you.",
      zh: "法蘭德斯政府補助的成人教育中心（CVO）提供完整的 NT2 荷語課程，學費有補貼。可透過 Huis van het Nederlands 或 Atlas 轉介。"
    },
    price: {
      en: "€1.50 per lesson hour at the first level (max €180 in total), €0.60 per hour at higher levels, €0.30 with some reductions. Free with an inburgering contract or certificate. Books are extra.",
      zh: "第一級每上課時數 €1.50（總額上限 €180），較高級別每小時 €0.60，部分減免者每小時 €0.30。持有融入合約或證明者免費。教材另計。"
    }
  },
  {
    id: "vdab-nederlands",
    name: "VDAB Nederlands leren",
    kind: "government",
    region: "BE",
    cities: ["Antwerpen", "Gent", "Leuven"],
    formats: ["self", "inperson", "online"],
    focus: ["speaking", "listening", "reading", "writing"],
    levels: ["A0", "B2"],
    cost: [0, 0],
    hours: [10, 60],
    url: "https://www.vdab.be/anderstalig/nederlands",
    note: {
      en: "The Flemish employment service offers free Dutch courses for jobseekers, including a track for highly educated newcomers (Hogerop NT2).",
      zh: "法蘭德斯就業服務局為求職者提供免費荷語課程，也有為高學歷新移民設計的路線（Hogerop NT2）。"
    },
    price: { en: "Free for registered jobseekers.", zh: "已登記的求職者免費。" }
  },
  {
    id: "oefenkansen-be",
    name: "Oefenkansen",
    kind: "community",
    region: "BE",
    cities: ["Antwerpen", "Gent", "Brussel", "Leuven"],
    formats: ["inperson"],
    focus: ["speaking", "listening"],
    levels: ["A1", "B2"],
    cost: [0, 0],
    hours: [2, 8],
    url: "https://www.oefenkansen.be/",
    note: {
      en: "A free Flemish guide to informal practice opportunities: no lessons, just ideas and places to use your Dutch in clubs, cafés and volunteering.",
      zh: "法蘭德斯的免費練習機會指南：不是上課，而是提供在社團、咖啡館和志工活動中使用荷語的點子與地點。"
    }
  },
  {
    id: "volksuniversiteit",
    name: "Volksuniversiteit",
    kind: "school",
    region: "NL",
    cities: ["Amsterdam", "Rotterdam", "Den Haag", "Utrecht", "Eindhoven", "Groningen", "Leiden"],
    formats: ["inperson", "online"],
    focus: ["speaking", "listening", "reading", "writing", "grammar"],
    levels: ["A0", "B2"],
    cost: [100, 270],
    hours: [10, 16],
    url: "https://www.volksuniversiteit.nl/",
    note: {
      en: "Affordable evening group courses run by local non-profits in most Dutch cities. Prices and schedules differ per city.",
      zh: "由各地非營利機構開設的平價晚間團體班，荷蘭大多數城市都有。價格和時間依城市而異。"
    },
    price: { en: "Den Haag A1: €265 for 8 × 3 h (autumn 2026). Amsterdam A0–A1: €528.", zh: "海牙 A1：8 堂 × 3 小時共 €265（2026 秋季）。阿姆斯特丹 A0–A1：€528。" }
  },
  {
    id: "uva-talen",
    name: "UvA Talen",
    kind: "university",
    region: "NL",
    cities: ["Amsterdam"],
    formats: ["inperson", "online"],
    focus: ["speaking", "listening", "reading", "writing", "grammar", "exam"],
    levels: ["A0", "C1"],
    cost: [150, 400],
    hours: [12, 40],
    url: "https://www.uvatalen.nl/",
    note: {
      en: "The University of Amsterdam's language centre, open to everyone. Structured courses from beginner to advanced, plus intensive and exam-prep options.",
      zh: "阿姆斯特丹大學語言中心，對所有人開放。從入門到高級的系統化課程，也有密集班與考試準備班。"
    },
    review: true
  },
  {
    id: "babel-utrecht",
    name: "Babel (Utrecht University)",
    kind: "university",
    region: "NL",
    cities: ["Utrecht"],
    formats: ["inperson", "online"],
    focus: ["speaking", "listening", "reading", "writing", "grammar"],
    levels: ["A0", "C1"],
    cost: [150, 350],
    hours: [12, 30],
    url: "https://babel.nl/",
    note: {
      en: "Utrecht University's language and communication centre. Dutch courses for students, staff and the public.",
      zh: "烏特勒支大學的語言中心，荷語課程開放給學生、教職員和一般大眾。"
    },
    review: true
  },
  {
    id: "eur-language-centre",
    name: "EUR Language & Training Centre",
    kind: "university",
    region: "NL",
    cities: ["Rotterdam"],
    formats: ["inperson"],
    focus: ["speaking", "listening", "reading", "writing", "grammar"],
    levels: ["A0", "B2"],
    cost: [25, 300],
    hours: [10, 24],
    url: "https://www.eur.nl/onderwijs/taal-trainingscentrum/nederlands/nederlands-a1-beginners",
    note: {
      en: "Erasmus University Rotterdam's Dutch courses, open to all. International EUR students pay a heavily reduced fee once per level.",
      zh: "鹿特丹伊拉斯謨大學的荷語課程，對外開放。EUR 國際學生每個級別可享一次大幅優惠價。"
    },
    price: { en: "€50 per level for international EUR students; regular price higher.", zh: "EUR 國際學生每級 €50；一般價格較高。" }
  },
  {
    id: "wur-into",
    name: "In'to Languages (Wageningen)",
    kind: "university",
    region: "NL",
    cities: ["Wageningen"],
    formats: ["inperson", "online"],
    focus: ["speaking", "listening", "reading", "writing"],
    levels: ["A0", "B2"],
    cost: [100, 300],
    hours: [10, 40],
    url: "https://www.wur.nl/nl/onderwijs/into-languages",
    note: {
      en: "Wageningen University's language centre, including social Dutch courses and intensive summer courses.",
      zh: "瓦赫寧恩大學語言中心，提供生活荷語課程和暑期密集班。"
    }
  },
  {
    id: "kuleuven-ilt",
    name: "KU Leuven ILT",
    kind: "university",
    region: "BE",
    cities: ["Leuven"],
    formats: ["inperson", "online"],
    focus: ["speaking", "listening", "reading", "writing", "grammar", "exam"],
    levels: ["A0", "C2"],
    cost: [100, 300],
    hours: [16, 40],
    url: "https://www.ilt.kuleuven.be/",
    note: {
      en: "KU Leuven's Institute for Living Languages teaches Dutch at every level, including academic Dutch for university entry.",
      zh: "魯汶大學現代語言學院提供各級荷語課程，包含申請大學所需的學術荷語。"
    },
    review: true
  },
  {
    id: "ugent-uct",
    name: "UCT Gent",
    kind: "university",
    region: "BE",
    cities: ["Gent"],
    formats: ["inperson"],
    focus: ["speaking", "listening", "reading", "writing", "grammar", "exam"],
    levels: ["A0", "C1"],
    cost: [100, 300],
    hours: [16, 40],
    url: "https://www.uct.ugent.be/",
    note: {
      en: "Ghent University's language centre. Dutch courses for international students, staff and residents, plus ITNA exam preparation.",
      zh: "根特大學語言中心，為國際學生、教職員與居民開設荷語課，也有 ITNA 考試準備。"
    },
    review: true
  },
  {
    id: "linguapolis",
    name: "Linguapolis (University of Antwerp)",
    kind: "university",
    region: "BE",
    cities: ["Antwerpen"],
    formats: ["inperson", "online"],
    focus: ["speaking", "listening", "reading", "writing", "grammar"],
    levels: ["A0", "C1"],
    cost: [100, 300],
    hours: [16, 40],
    url: "https://www.uantwerpen.be/linguapolis",
    note: {
      en: "The University of Antwerp's language institute, with Dutch courses for students, expats and professionals.",
      zh: "安特衛普大學語言中心，為學生、外派人士與上班族開設荷語課程。"
    },
    review: true
  },
  {
    id: "regina-coeli",
    name: "Regina Coeli",
    kind: "school",
    region: "NL",
    cities: ["Vught"],
    formats: ["inperson"],
    focus: ["speaking", "listening", "reading", "writing", "grammar"],
    levels: ["A0", "C1"],
    cost: [2000, 6000],
    hours: [40, 160],
    url: "https://www.reginacoeli.nl/",
    note: {
      en: "A well-known residential language institute: full-immersion one-to-one training for a week or more. Often paid for by employers.",
      zh: "知名的住宿式語言學校：一對一全沉浸式訓練，一次一週以上。通常由公司支付。"
    },
    review: true
  },
  {
    id: "direct-dutch",
    name: "Direct Dutch Institute",
    kind: "school",
    region: "NL",
    cities: ["Den Haag"],
    formats: ["inperson", "online"],
    focus: ["speaking", "listening", "writing", "grammar"],
    levels: ["A0", "B2"],
    cost: [240, 1395],
    hours: [12, 60],
    url: "https://directdutch.com/courses/",
    note: {
      en: "A private language school in The Hague for expats, with in-person and online group courses from A0 to B2, a B1+ writing course and two-week intensives.",
      zh: "位於海牙、以外派人士為主的私人語言學校，提供 A0 到 B2 的實體與線上團體課、B1+ 寫作課，以及兩週密集班。"
    },
    price: {
      en: "A1 or A2 in person €645 for 7 weeks. B1 online or B2 €780 for 12 weeks. A2+ and B1+ writing €480 for 8 weeks. Two-week intensives €865–€1,395. Course material included.",
      zh: "A1 或 A2 實體課 7 週 €645。B1 線上或 B2 課程 12 週 €780。A2+ 與 B1+ 寫作課 8 週 €480。兩週密集班 €865–€1,395。皆含教材。"
    }
  },
  {
    id: "koentact",
    name: "Koentact",
    kind: "school",
    region: "NL",
    cities: ["Amsterdam"],
    formats: ["inperson", "online"],
    focus: ["speaking", "listening", "grammar"],
    levels: ["A0", "B2"],
    cost: [320, 975],
    hours: [20, 33],
    url: "https://koentact.nl/",
    note: {
      en: "An Amsterdam language school with small group courses (5–12 students), a conversation course and one-week intensives (max 6 students).",
      zh: "阿姆斯特丹的語言學校，提供小班團體課（5–12 人）、會話課，以及一週密集班（最多 6 人）。"
    },
    price: {
      en: "Morning or evening group course €525 (8 lessons + 2 field trips over 4 weeks). Conversation course (A2–B1) €320. Intensive week €975 (33 hours in 6 days). Discount when you prepay 3 courses.",
      zh: "早上或晚上團體班 €525（4 週內 8 堂課＋2 次校外教學）。會話課（A2–B1）€320。一週密集班 €975（6 天共 33 小時）。一次預付 3 期有折扣。"
    }
  },
  {
    id: "futurelearn-rug",
    name: "Introduction to Dutch (University of Groningen)",
    kind: "course",
    region: "online",
    cities: [],
    formats: ["self"],
    focus: ["reading", "listening", "grammar"],
    levels: ["A0", "A1"],
    cost: [0, 0],
    hours: [3, 12],
    url: "https://www.futurelearn.com/courses/dutch",
    note: {
      en: "A free beginner MOOC on FutureLearn from the University of Groningen, covering basic words, sentences and Dutch culture.",
      zh: "格羅寧根大學在 FutureLearn 上的免費入門 MOOC，涵蓋基本詞彙、句型與荷蘭文化。"
    },
    price: { en: "Free to audit; paid upgrade for unlimited access and a certificate.", zh: "旁聽免費；付費升級可無限期觀看並取得證書。" }
  },
  {
    id: "delftx",
    name: "Dutch for Beginners (TU Delft)",
    kind: "course",
    region: "online",
    cities: [],
    formats: ["self"],
    focus: ["reading", "listening", "grammar"],
    levels: ["A0", "A2"],
    cost: [0, 0],
    hours: [4, 20],
    url: "https://www.edx.org/school/delftx",
    note: {
      en: "TU Delft runs a free Dutch MOOC a few times a year on edX, aimed at international students and staff.",
      zh: "台夫特理工大學每年在 edX 開設數次免費荷語 MOOC，主要對象為國際學生與教職員。"
    },
    review: true
  },
  {
    id: "staatsexamen-nt2",
    name: "Staatsexamen NT2 practice exams",
    kind: "government",
    region: "online",
    cities: [],
    formats: ["self"],
    focus: ["exam", "reading", "listening", "writing", "speaking"],
    levels: ["A2", "C1"],
    cost: [0, 0],
    hours: [2, 20],
    url: "https://www.staatsexamensnt2.nl/",
    note: {
      en: "Official free practice exams for the State Exam Dutch as a Second Language (programme I at B1, programme II at B2). Essential if a job or university needs the certificate.",
      zh: "荷語作為第二語言國家考試（Staatsexamen NT2）的官方免費模擬試題，第一級為 B1、第二級為 B2。工作或大學要求證書時必備。"
    },
    price: { en: "Practice material is free; taking the exam costs a fee per part.", zh: "練習題免費；正式考試每科需付報名費。" }
  },
  {
    id: "dutchgrammar",
    name: "DutchGrammar.com",
    kind: "course",
    region: "online",
    cities: [],
    formats: ["self"],
    focus: ["grammar", "reading"],
    levels: ["A1", "B2"],
    cost: [0, 10],
    hours: [1, 20],
    url: "https://www.dutchgrammar.com/",
    note: {
      en: "Clear grammar explanations in English with exercises. The go-to reference when a rule in class doesn't click.",
      zh: "用英文清楚解釋荷語文法並附練習題。上課聽不懂某個規則時，最常被推薦的查詢網站。"
    },
    price: { en: "Explanations are free; optional paid e-book and course.", zh: "說明免費；另有付費電子書和課程。" }
  },
  {
    id: "duolingo",
    name: "Duolingo",
    kind: "app",
    region: "online",
    cities: [],
    formats: ["self"],
    focus: ["reading", "listening", "writing"],
    levels: ["A0", "A2"],
    cost: [0, 13],
    hours: [2, 15],
    url: "https://www.duolingo.com/course/nl/en/Learn-Dutch",
    note: {
      en: "A game-style daily habit for vocabulary and basic sentences. Great for getting started; pair it with speaking practice to progress past A2.",
      zh: "遊戲化的每日練習，適合累積單字和基本句型。入門很好用，但想超過 A2 需要搭配口說練習。"
    },
    price: { en: "Free with ads; Super is about €7–13 a month.", zh: "免費版有廣告；Super 約每月 €7–13。" }
  },
  {
    id: "babbel",
    name: "Babbel",
    kind: "app",
    region: "online",
    cities: [],
    formats: ["self"],
    focus: ["reading", "listening", "speaking", "grammar"],
    levels: ["A0", "B1"],
    cost: [7, 15],
    hours: [3, 15],
    url: "https://www.babbel.com/learn-dutch",
    note: {
      en: "Short structured lessons with dialogues and grammar tips, taught from English. More grammar than Duolingo.",
      zh: "以英文教學的短課程，包含對話與文法說明，文法比 Duolingo 多。"
    },
    price: { en: "Roughly €7–15 a month depending on plan length.", zh: "依方案長短約每月 €7–15。" }
  },
  {
    id: "dutchpod101",
    name: "DutchPod101",
    kind: "podcast",
    region: "online",
    cities: [],
    formats: ["self"],
    focus: ["listening", "speaking"],
    levels: ["A0", "B2"],
    cost: [0, null],
    hours: [2, 20],
    url: "https://www.dutchpod101.com/",
    note: {
      en: "Audio and video lessons organised by level, with transcripts and vocabulary lists. Good for learning on a commute.",
      zh: "依程度分類的音訊與影片課程，附逐字稿和單字表，適合通勤時學習。"
    },
    price: {
      en: "Free account to start. Check the website for the paid service.",
      zh: "可免費註冊開始使用。付費方案請至官網查看。"
    }
  },
  {
    id: "coffee-break-dutch",
    name: "Coffee Break Dutch",
    kind: "podcast",
    region: "online",
    cities: [],
    formats: ["self"],
    focus: ["listening", "speaking"],
    levels: ["A0", "A2"],
    cost: [0, 15],
    hours: [2, 10],
    url: "https://coffeebreaklanguages.com/",
    note: {
      en: "A friendly beginner podcast from Radio Lingua: a teacher and a learner work through Dutch together, episode by episode.",
      zh: "Radio Lingua 製作的入門播客：老師和學生一集一集一起學荷語，輕鬆易懂。"
    },
    price: { en: "Episodes free; paid course notes and bonus material.", zh: "節目免費；講義和額外內容需付費。" },
    review: true
  },
  {
    id: "italki",
    name: "italki",
    kind: "tutors",
    region: "online",
    cities: [],
    formats: ["online"],
    focus: ["speaking", "listening", "writing", "grammar", "exam"],
    levels: ["A0", "C2"],
    cost: [40, 240],
    hours: [2, 12],
    url: "https://www.italki.com/en/teachers/dutch",
    note: {
      en: "Book one-to-one video lessons with Dutch and Flemish tutors. Filter by price and specialty, such as inburgering or Staatsexamen prep.",
      zh: "預約荷蘭或比利時老師的一對一視訊課。可依價格與專長篩選，例如融入考試或國家考試準備。"
    },
    price: { en: "Tutors set their own rates, roughly €12–35 per hour.", zh: "老師自訂價格，約每小時 €12–35。" }
  },
  {
    id: "preply",
    name: "Preply",
    kind: "tutors",
    region: "online",
    cities: [],
    formats: ["online"],
    focus: ["speaking", "listening", "writing", "grammar"],
    levels: ["A0", "C2"],
    cost: [40, 240],
    hours: [2, 12],
    url: "https://preply.com/en/online/dutch-tutors",
    note: {
      en: "Another large tutor marketplace with many Dutch teachers. Trial lessons are discounted, so it's easy to try a few teachers.",
      zh: "另一個大型家教平台，荷語老師很多。試聽課有折扣，方便多試幾位老師。"
    },
    price: { en: "Tutors set their own rates, roughly €10–35 per hour.", zh: "老師自訂價格，約每小時 €10–35。" }
  },
  {
    id: "exchange-apps",
    name: "Tandem & HelloTalk",
    kind: "community",
    region: "online",
    cities: [],
    formats: ["online"],
    focus: ["speaking", "writing"],
    levels: ["A1", "C1"],
    cost: [0, 10],
    hours: [1, 20],
    url: "https://www.tandem.net/",
    note: {
      en: "Language-exchange apps: chat with Dutch speakers who want to learn your language. Free practice in writing and, once you're braver, voice calls.",
      zh: "語言交換 App：和想學你母語的荷語母語者聊天。免費練習寫作，敢開口後還能語音通話。"
    },
    price: { en: "Free; optional premium.", zh: "免費；可選付費進階版。" }
  },
  {
    id: "meetup-exchange",
    name: "Dutch language exchange meetups",
    kind: "community",
    region: "NL+BE",
    cities: ["Amsterdam", "Rotterdam", "Den Haag", "Utrecht", "Brussel", "Antwerpen", "Gent"],
    formats: ["inperson"],
    focus: ["speaking", "listening"],
    levels: ["A2", "C1"],
    cost: [0, 10],
    hours: [2, 8],
    url: "https://www.meetup.com/topics/dutch-language/",
    note: {
      en: "Evening language exchanges in bars and cafés, organised on Meetup. Good for building confidence once you can hold a basic conversation.",
      zh: "在酒吧或咖啡館舉行的晚間語言交換活動，透過 Meetup 報名。能進行基本對話後，很適合建立開口的自信。"
    },
    price: { en: "Usually free or a small fee; you buy your own drinks.", zh: "通常免費或酌收小額費用，飲料自費。" }
  },
  {
    id: "bart-de-pau",
    name: "Learn Dutch with Bart de Pau",
    kind: "creator",
    region: "online",
    cities: [],
    formats: ["self", "online"],
    focus: ["listening", "grammar", "speaking"],
    levels: ["A0", "B1"],
    cost: [0, null],
    hours: [1, 20],
    url: "https://www.learndutch.org/",
    youtube: "https://www.youtube.com/results?search_query=learn+dutch+bart+de+pau",
    note: {
      en: "One of the biggest Dutch-learning YouTube channels (200K+ subscribers): an animated soap opera, culture interviews and grammar videos. Free online lessons on his website, plus premium courses and virtual classrooms.",
      zh: "最大的荷語學習 YouTube 頻道之一（超過 20 萬訂閱）：動畫肥皂劇、文化訪談和文法影片。網站有免費線上課程，另有付費進階課程與線上教室。"
    },
    price: {
      en: "YouTube and basic lessons are free. Premium courses are sold as one-year licences (VAT added in the EU); check the shop for current prices.",
      zh: "YouTube 和基礎課程免費。進階課程以一年授權販售（歐盟需另加增值稅），最新價格請至官網商店查看。"
    },
    review: true
  },
  {
    id: "dutchies-to-be",
    name: "Dutchies to be (Kim)",
    kind: "creator",
    region: "online",
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
      zh: "Kim 用生活情境短劇教荷語，劇情好笑，接著講解背後的文法。YouTube 影片免費，另有各級三個月自學課程，可終身觀看。"
    },
    price: {
      en: "One-time: A1 or A2 course €79, B1 €99, A2 + B1 €159, A0–B1 package €199. Online community membership about $15–20 a month. Live lessons not included.",
      zh: "一次付清：A1 或 A2 課程 €79、B1 €99、A2＋B1 €159、A0–B1 全套 €199。線上社群會員約每月 $15–20。不含直播課。"
    }
  },
  {
    id: "easy-dutch",
    name: "Easy Dutch",
    kind: "creator",
    region: "online",
    cities: [],
    formats: ["self"],
    focus: ["listening"],
    levels: ["A2", "C1"],
    cost: [0, 10],
    hours: [1, 10],
    url: "https://www.youtube.com/@EasyDutch",
    youtube: "https://www.youtube.com/@EasyDutch",
    note: {
      en: "Street interviews with real Dutch people, subtitled in Dutch and English. Great for hearing how people actually talk.",
      zh: "街頭訪問真實的荷蘭人，附荷文與英文字幕。最能聽到荷蘭人平常怎麼說話。"
    },
    price: { en: "Free on YouTube; Patreon for transcripts and extras.", zh: "YouTube 免費；Patreon 提供逐字稿等額外內容。" },
    review: true
  },
  {
    id: "learn-dutch-now",
    name: "Learn Dutch Now",
    kind: "creator",
    region: "online",
    cities: [],
    formats: ["self"],
    focus: ["exam", "reading", "listening", "grammar"],
    levels: ["A0", "B2"],
    cost: [0, 60],
    hours: [4, 20],
    url: "https://learndutchnow.shop/",
    instagram: "https://www.instagram.com/learn_dutch_now/",
    note: {
      en: "A large Instagram account (130K+ followers) with bite-sized vocabulary posts, plus downloadable courses and exam packs for the inburgering exam (A2) and Staatsexamen NT2 (B1).",
      zh: "大型 Instagram 帳號（超過 13 萬追蹤），提供精簡的單字貼文，另販售可下載的課程，以及融入考試（A2）和國家考試 NT2（B1）的備考包。"
    },
    price: {
      en: "One-time, lifetime access, priced in USD: Starter course $89, B1 course $88, both $162, A2 exam pack $172, single exam parts from $30.",
      zh: "一次付清、終身使用，以美元計價：入門課程 $89、B1 課程 $88、兩者合購 $162、A2 考試包 $172，單科考試資料 $30 起。"
    }
  },
  {
    id: "learn-dutch-with-yas",
    name: "Learn Dutch with Yas",
    kind: "creator",
    region: "online",
    cities: [],
    formats: ["self", "online"],
    focus: ["speaking", "grammar"],
    levels: ["A0", "C2"],
    cost: [0, null],
    hours: [4, 12],
    url: "https://learndutchwithyas.com/learn-dutch/dutch-mastery-group-classes",
    instagram: "https://www.instagram.com/learndutchwithyas/",
    note: {
      en: "Yasmine teaches all levels: 13-week live online group classes (max 6 students), B2+ conversation classes, self-paced courses and private packages of 8 one-hour lessons.",
      zh: "Yasmine 教授各級程度：13 週線上直播團體課（最多 6 人）、B2+ 會話課、自學課程，以及 8 堂一小時的一對一套裝課。"
    },
    price: {
      en: "Instagram tips are free. Check the website for class prices.",
      zh: "Instagram 內容免費。課程價格請至官網查看。"
    },
    review: true
  },
  {
    id: "your-dutch-friend",
    name: "Learn Dutch with Charlotte",
    kind: "creator",
    region: "online",
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
      zh: "Charlotte 以「你的荷蘭朋友」身分在 Instagram 分享日常口語荷語，並開設自學影片課程（A0–A1、A1–A2、A2–B1）和線上團體直播課。"
    },
    price: {
      en: "Video course €250 per level (one-time, often on sale for €199). Group classes €200 for a pack of 10. Grammar e-book €12.50.",
      zh: "影片課程每級 €250（一次付清，常有 €199 特價）。團體課 10 堂 €200。文法電子書 €12.50。"
    }
  },
  {
    id: "going-dutch",
    name: "Going Dutch Community",
    kind: "creator",
    region: "online",
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
      zh: "大型 Instagram 社群（超過 23 萬追蹤），付費訂閱「Road to Dutch Fluency」包含每日不同程度的直播課，另有實體活動。"
    },
    price: {
      en: "Subscription €119 a month. 6-month package with 24 private classes €1,699. Speed Dutching evenings €5; Texel summer school €950.",
      zh: "訂閱每月 €119。含 24 堂私人課的 6 個月套裝 €1,699。Speed Dutching 活動 €5；Texel 暑期營 €950。"
    }
  }
];
