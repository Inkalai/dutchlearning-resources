/*
  All resources shown on the site live in this list.

  To add one, copy an existing entry, paste it at the end of the list, and change
  the values. Field guide:

  id          unique short name, letters/numbers/dashes only
  name        resource name (shown as-is in both languages)
  kind        library | government | school | university | app | course |
              tutors | creator | media | podcast | community
  categories  quick-filter tags, any of: library, government, school, instagram,
              youtube, app, tutors, courses, practice, news, tv
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
    categories: ["library"],
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
    categories: ["library", "practice"],
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
    categories: ["government"],
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
    categories: ["government"],
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
    categories: ["app"],
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
    categories: ["practice"],
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
    categories: ["news", "tv"],
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
    categories: ["news", "tv"],
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
    categories: ["tv"],
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
    categories: ["news"],
    region: "BE",
    cities: [],
    formats: ["self"],
    focus: ["reading"],
    levels: ["A2", "B1"],
    cost: [2, 2],
    hours: [1, 10],
    url: "https://wablieft.be/nl/abonnement",
    note: {
      en: "A Flemish newspaper written in clear, simple Dutch. Good weekly reading practice if you live in Belgium or want Flemish vocabulary.",
      zh: "以清楚簡單的荷語撰寫的法蘭德斯報紙。住在比利時或想學比利時荷語詞彙的人，很適合每週閱讀練習。"
    },
    price: {
      en: "Digital subscription €20 a year, covering Wablieft and Wablieft Start. Paper copies can no longer be ordered.",
      zh: "數位訂閱每年 €20，含 Wablieft 與 Wablieft Start。紙本已停止訂購。"
    }
  },
  {
    id: "huis-nederlands-brussel",
    name: "Huis van het Nederlands Brussel",
    kind: "government",
    categories: ["government"],
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
    categories: ["government"],
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
    categories: ["school"],
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
    categories: ["government"],
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
    categories: ["practice"],
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
    categories: ["school"],
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
    categories: ["school"],
    region: "NL",
    cities: ["Amsterdam"],
    formats: ["self", "inperson", "online"],
    focus: ["speaking", "listening", "reading", "writing", "grammar", "exam"],
    levels: ["A0", "B2"],
    cost: [100, 410],
    hours: [10, 40],
    url: "https://www.uvatalen.nl/nederlands",
    note: {
      en: "The University of Amsterdam's language centre, open to everyone. Courses from beginner to B2, e-learning, writing and fluency courses, and Staatsexamen preparation.",
      zh: "阿姆斯特丹大學語言中心，對所有人開放。提供入門到 B2 的課程、線上自學、寫作與流利度課程，以及國家考試準備班。"
    },
    price: {
      en: "Per course: e-learning from €195, Staatsexamen prep and Fluency Skills from €485, Writing Skills from €710, Beginners intensive (A0–A2) from €815. Materials €30–48 extra.",
      zh: "每期課程：線上自學 €195 起，國家考試準備班與流利度課程 €485 起，寫作課 €710 起，入門密集班（A0–A2）€815 起。教材另計 €30–48。"
    }
  },
  {
    id: "babel-utrecht",
    name: "Babel (Utrecht)",
    kind: "school",
    categories: ["school"],
    region: "NL",
    cities: ["Utrecht"],
    formats: ["self", "inperson", "online"],
    focus: ["speaking", "listening", "reading", "writing", "grammar", "exam"],
    levels: ["A0", "C1"],
    cost: [110, 540],
    hours: [8, 40],
    url: "https://www.babel.nl/cursus/",
    note: {
      en: "A language school in Utrecht with Dutch courses from beginner to C1, in the classroom or a virtual classroom, plus conversation courses, e-learning and Staatsexamen training.",
      zh: "烏特勒支的語言學校，提供入門到 C1 的荷語課程（實體或線上教室），另有會話課、線上自學和國家考試訓練。"
    },
    price: {
      en: "Per course: e-learning from €225, conversation €295, A0–A1 €550, advanced 9-week courses €795, full A0–A2 or B1–B2 €1,075, Staatsexamen training €565–590.",
      zh: "每期課程：線上自學 €225 起、會話課 €295、A0–A1 €550、9 週高級課程 €795、完整 A0–A2 或 B1–B2 €1,075、國家考試訓練 €565–590。"
    }
  },
  {
    id: "eur-language-centre",
    name: "EUR Language & Training Centre",
    kind: "university",
    categories: ["school"],
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
    categories: ["school"],
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
    categories: ["school"],
    region: "BE",
    cities: ["Leuven"],
    formats: ["inperson", "online"],
    focus: ["speaking", "listening", "reading", "writing", "grammar", "exam"],
    levels: ["A0", "C2"],
    cost: [0, 320],
    hours: [16, 40],
    url: "https://ilt.kuleuven.be/cursus/nt2_prijs_voorwaarden.php",
    note: {
      en: "KU Leuven's Institute for Living Languages teaches Dutch in six levels in small groups, plus pronunciation and online writing classes and a summer course. Open to adults outside the university.",
      zh: "魯汶大學現代語言學院以小班教授六個級別的荷語，另有發音課、線上寫作課和暑期課程，校外成人也能報名。"
    },
    price: {
      en: "Per module: €300 (levels 1–3) or €320 (levels 4–6) for external students, €175–195 for KU Leuven students and staff, syllabus included. Summer course €460–480. Free for Erasmus students.",
      zh: "每個模組：校外學員 €300（1–3 級）或 €320（4–6 級），KU Leuven 學生與教職員 €175–195，含講義。暑期課程 €460–480。Erasmus 學生免費。"
    }
  },
  {
    id: "ugent-uct",
    name: "UCT Gent",
    kind: "university",
    categories: ["school"],
    region: "BE",
    cities: ["Gent"],
    formats: ["inperson"],
    focus: ["speaking", "listening", "reading", "writing", "grammar", "exam"],
    levels: ["A1", "C1"],
    cost: [200, 588],
    hours: [16, 40],
    url: "https://www.uct.ugent.be/en",
    note: {
      en: "Ghent University's language centre teaches Dutch from level 1 (A1) to level 6 (C1), as intensive day courses or evening courses, open to residents as well as students.",
      zh: "根特大學語言中心教授 1 級（A1）到 6 級（C1）荷語，有密集日間班和晚間班，居民與學生皆可報名。"
    },
    price: {
      en: "Per course: €588 standard, €520 for UGent staff and PhD students, €400 for UGent students.",
      zh: "每期課程：一般學員 €588、UGent 教職員與博士生 €520、UGent 學生 €400。"
    }
  },
  {
    id: "linguapolis",
    name: "Linguapolis (University of Antwerp)",
    kind: "university",
    categories: ["school"],
    region: "BE",
    cities: ["Antwerpen"],
    formats: ["inperson", "online"],
    focus: ["speaking", "listening", "reading", "writing", "grammar"],
    levels: ["A0", "C1"],
    cost: [150, 750],
    hours: [16, 45],
    url: "https://www.uantwerpen.be/en/centres/linguapolis/language-courses/languages/dutch/tariffs-and-subsidies2/",
    note: {
      en: "The University of Antwerp's language institute, with Dutch courses for students, expats and professionals, plus a one-year academic Dutch programme.",
      zh: "安特衛普大學語言中心，為學生、外派人士與上班族開設荷語課程，另有一年制學術荷語預科。"
    },
    price: {
      en: "Standard rate €555 for a 45-hour course, €750 for 90 hours (2026–2027). A Flemish training voucher can cover up to €125; level 1 may qualify for a Flemish grant.",
      zh: "一般價格：45 小時課程 €555、90 小時 €750（2026–2027）。法蘭德斯培訓券最多可抵 €125；第 1 級可能申請法蘭德斯獎助。"
    }
  },
  {
    id: "regina-coeli",
    name: "Regina Coeli",
    kind: "school",
    categories: ["school"],
    region: "NL",
    cities: ["Vught", "Eindhoven"],
    formats: ["inperson"],
    focus: ["speaking", "listening", "reading", "writing", "grammar"],
    levels: ["A0", "C1"],
    cost: [570, 5315],
    hours: [16, 50],
    url: "https://www.reginacoeli.com/language-courses/fees.html",
    note: {
      en: "A well-known residential language institute in Vught: full-immersion training, mostly one-to-one, often paid for by employers. Also runs small evening groups at High Tech Campus Eindhoven.",
      zh: "位於 Vught 的知名住宿式語言學校：以一對一為主的全沉浸式訓練，通常由公司支付。另在恩荷芬 High Tech Campus 開設小班晚間課。"
    },
    price: {
      en: "Intensive week (5 days) €5,315 excl. VAT, overnight stay extra. Evening course in Eindhoven €1,135 excl. VAT for 12 two-hour lessons over 6 weeks, groups of 5.",
      zh: "一週密集班（5 天）€5,315（未稅），住宿另計。恩荷芬晚間課 12 堂 × 2 小時、為期 6 週、5 人小班，€1,135（未稅）。"
    }
  },
  {
    id: "direct-dutch",
    name: "Direct Dutch Institute",
    kind: "school",
    categories: ["school"],
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
    categories: ["school"],
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
    categories: ["school", "app", "courses"],
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
    id: "tudelft",
    name: "TU Delft Dutch courses",
    kind: "university",
    categories: ["school"],
    region: "NL",
    cities: ["Delft"],
    formats: ["self", "inperson", "online"],
    focus: ["speaking", "listening", "reading", "writing", "grammar", "exam"],
    levels: ["A0", "C1"],
    cost: [0, 455],
    hours: [4, 40],
    url: "https://www.tudelft.nl/tbm/itav/onderwijs/nederlands-nt2/nederlandse-cursussen",
    note: {
      en: "TU Delft's language centre runs Dutch courses from beginner to advanced, a summer school, NT2 State Exam preparation and a free online beginners course. Open to non-students too.",
      zh: "台夫特理工大學語言中心開設入門到高級的荷語課程、暑期班、NT2 國家考試準備，以及免費的線上入門課程，非學生也能報名。"
    },
    price: {
      en: "Online beginners course free. Semi-intensive courses €445–€485, advanced intensive €910, summer school €550 per level (materials extra). Some levels free for TU Delft students in English-taught programmes.",
      zh: "線上入門課程免費。半密集課程 €445–€485，高級密集班 €910，暑期班每級 €550（教材另計）。就讀英語授課學程的 TU Delft 學生部分級別免費。"
    }
  },
  {
    id: "staatsexamen-nt2",
    name: "Staatsexamen NT2 practice exams",
    kind: "government",
    categories: ["government"],
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
    categories: ["app"],
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
    categories: ["app"],
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
    categories: ["app"],
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
    categories: ["app"],
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
    id: "italki",
    name: "italki",
    kind: "tutors",
    categories: ["tutors"],
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
    categories: ["tutors"],
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
    categories: ["app", "practice"],
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
    categories: ["practice"],
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
    categories: ["youtube", "courses"],
    region: "online",
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
      zh: "最大的荷語學習 YouTube 頻道之一（超過 20 萬訂閱）：動畫肥皂劇、文化訪談和文法影片。網站有免費線上課程，另有付費進階課程與線上教室。"
    },
    price: {
      en: "YouTube and basic lessons are free. Premium #dutchgrammar course €49 for one year (discounted from €79, plus VAT in the EU). Live course €495 per level (intro + 9 sessions), book extra.",
      zh: "YouTube 和基礎課程免費。進階課程 #dutchgrammar 一年 €49（原價 €79，歐盟需另加增值稅）。直播課每級 €495（介紹課＋9 堂），教材另計。"
    }
  },
  {
    id: "dutchies-to-be",
    name: "Dutchies to be (Kim)",
    kind: "creator",
    categories: ["youtube", "courses"],
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
    categories: ["youtube"],
    region: "online",
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
      zh: "街頭訪問真實的荷蘭人，附荷文與英文字幕，最能聽到荷蘭人平常怎麼說話。付費會員另有 Podcast、逐字稿與會話練習。"
    },
    price: {
      en: "Videos are free on YouTube. Memberships: Basic €5, Podcast €10, Audio and Video €12, Conversation €25 a month.",
      zh: "YouTube 影片免費。會員方案：基本 €5、Podcast €10、音訊與影片 €12、會話 €25（每月）。"
    }
  },
  {
    id: "learn-dutch-now",
    name: "Learn Dutch Now",
    kind: "creator",
    categories: ["instagram", "courses"],
    region: "online",
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
      zh: "大型 Instagram 帳號（超過 13 萬追蹤），提供精簡的單字貼文，另販售可下載的課程，以及融入考試（A2）和國家考試 NT2（B1）的備考包。"
    },
    price: {
      en: "One-time, lifetime access: Starter course €75, B1 course €75, both €135, Starter course + A2 exam package €199, single exam parts from €24.99.",
      zh: "一次付清、終身使用：入門課程 €75、B1 課程 €75、兩者合購 €135、入門課程＋A2 考試包 €199，單科考試資料 €24.99 起。"
    }
  },
  {
    id: "learn-dutch-with-yas",
    name: "Learn Dutch with Yas",
    kind: "creator",
    categories: ["instagram", "courses"],
    region: "online",
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
      zh: "Yasmine 教授各級程度：13 週線上直播團體課（最多 6 人）、B2+ 會話課、自學課程，以及 8 堂一小時的一對一套裝課。"
    },
    price: {
      en: "Instagram tips are free. 13-week group classes with Dutch Mastery Academy access: €350 excl. VAT paid at once, or 3 × €130 or 6 × €70 in instalments.",
      zh: "Instagram 內容免費。13 週團體課＋Dutch Mastery Academy：一次付清 €350（未稅），或分期 3 × €130、6 × €70。"
    }
  },
  {
    id: "your-dutch-friend",
    name: "Learn Dutch with Charlotte",
    kind: "creator",
    categories: ["instagram", "courses"],
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
    categories: ["instagram", "youtube", "courses"],
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
  },
  {
    id: "abc-dutch",
    name: "ABC Dutch",
    kind: "school",
    categories: ["school"],
    region: "NL",
    cities: ["Den Haag", "Rotterdam"],
    formats: ["inperson", "online"],
    focus: ["speaking", "listening", "reading", "writing", "grammar", "exam"],
    levels: ["A0", "C1"],
    cost: [135, 1245],
    hours: [8, 80],
    url: "https://www.abcdutch.com/",
    note: {
      en: "A language school in The Hague and Rotterdam with evening and day group courses, intensive weeks, summer courses and civic integration exam preparation. Private lessons in person or on Zoom.",
      zh: "位於海牙與鹿特丹的語言學校，提供晚間與日間團體課、密集週課程、暑期班和融入考試準備。另有實體或 Zoom 一對一課。"
    },
    price: {
      en: "Group courses €270–295, civic integration exam courses €275–330, day courses €225–335. Rotterdam intensive A2 €275 a week or €1,245 for 5 weeks. Private lessons on request.",
      zh: "團體課 €270–295，融入考試課程 €275–330，日間課程 €225–335。鹿特丹 A2 密集班每週 €275，5 週套裝 €1,245。一對一課程價格請洽詢。"
    }
  },
  {
    id: "sagenn",
    name: "Sagènn Educatie",
    kind: "school",
    categories: ["school"],
    region: "NL",
    cities: ["Rotterdam", "Zaandam", "Alphen aan den Rijn", "Gouda", "Utrecht", "Haarlem", "'s-Hertogenbosch"],
    formats: ["inperson"],
    focus: ["speaking", "listening", "reading", "writing", "grammar", "exam"],
    levels: ["A0", "B2"],
    cost: [0, 615],
    hours: [16, 50],
    url: "https://www.sagenn.nl/educatie",
    note: {
      en: "An adult education provider with Dutch courses from A0 to B2, literacy classes, civic integration routes and Staatsexamen preparation. Each course ends with a level test.",
      zh: "成人教育機構，提供 A0 到 B2 的荷語課程、識字班、融入考試路線和國家考試準備。每期課程結束都有程度測驗。"
    },
    price: {
      en: "€415 a month for 2 lessons a week, €515 for 3, €615 for 4, from 3 months. Includes intake test, personal advice and materials. Labour market orientation course €315 a month. DUO loan possible if you're required to do inburgering. Free lessons if you aren't, in Alphen aan den Rijn, Midden-Holland, Midden-Utrecht, Zaanstreek-Waterland, Zuid-Kennemerland/IJmond, Rotterdam Rijnmond and Noordoost-Brabant.",
      zh: "每月 €415（每週 2 堂）、€515（3 堂）、€615（4 堂），至少報名 3 個月，含入學測驗、個人諮詢與教材。荷蘭就業市場導向課程每月 €315。融入義務者可申請 DUO 貸款。非融入義務者在 Alphen aan den Rijn、Midden-Holland、Midden-Utrecht、Zaanstreek-Waterland、Zuid-Kennemerland/IJmond、鹿特丹大區與 Noordoost-Brabant 可免費上課。"
    }
  },
  {
    id: "nltraining",
    name: "NLtraining",
    kind: "school",
    categories: ["school"],
    region: "NL",
    cities: ["Rotterdam", "Leiden", "Almere", "Lelystad", "Zwolle", "Gouda", "Hoorn", "Zaandam", "Barendrecht", "Hellevoetsluis", "Spijkenisse"],
    formats: ["inperson", "online"],
    focus: ["speaking", "listening", "reading", "writing", "grammar", "exam"],
    levels: ["A0", "B2"],
    cost: [0, 260],
    hours: [8, 40],
    url: "https://www.nltraining.nl/cursussen",
    note: {
      en: "Dutch courses at every level in several cities and online, including free municipality-funded courses for people who aren't required to do inburgering, and paid inburgering courses.",
      zh: "在多個城市與線上開設各級荷語課程，包括由市政府出資、給非融入義務者的免費課程，以及付費的融入課程。"
    },
    price: {
      en: "Online course €599 per 12-week module. Inburgering courses €16.25 per hour (DUO loan possible). Free \"Verbeter je Nederlands\" courses if you aren't required to do inburgering: Rotterdam (10–20 weeks), Leiden (12 months), and Flevoland online, Almere or Lelystad (40 weeks). Morning, afternoon or evening classes.",
      zh: "線上課程每 12 週模組 €599。融入課程每小時 €16.25（可申請 DUO 貸款）。非融入義務者可免費參加「Verbeter je Nederlands」課程：鹿特丹（10–20 週）、萊登（12 個月），以及 Flevoland 線上、Almere 或 Lelystad（40 週）。上午、下午或晚上上課。"
    }
  },
  {
    id: "dutch-approach",
    name: "Dutch Approach",
    kind: "school",
    categories: ["school", "courses"],
    region: "NL",
    cities: ["Amsterdam", "Eindhoven", "Taipei", "Tainan"],
    formats: ["online", "inperson"],
    focus: ["speaking", "listening", "reading", "writing", "grammar", "exam"],
    levels: ["A0", "B2"],
    cost: [130, 130],
    hours: [8, 8],
    url: "https://dutch-approach.nl/netherlands/",
    note: {
      en: "Small-group Dutch courses from beginner to B2, online and in classrooms in Amsterdam, Eindhoven, Taipei and Tainan: 10 weekly 2-hour classes per level, plus CNaVT exam preparation. Teaching in English and Mandarin, a good fit for learners from Taiwan.",
      zh: "從入門到 B2 的荷語小班課，可線上或在阿姆斯特丹、恩荷芬、台北、台南的教室上課：每級 10 週、每週一堂 2 小時，另有 CNaVT 荷語檢定準備。以英文與中文教學，很適合來自台灣的學習者。"
    },
    price: {
      en: "€299 per 10-week course, plus €28 for textbook and website. In Taiwan NT$9,900 per course. Check the course pages for the current term.",
      zh: "每期 10 週課程 €299，另加課本與網站費 €28。台灣課程每期 NT$9,900。最新學期資訊請見各課程頁面。"
    }
  },
  {
    id: "learn-with-lucas",
    name: "Learn with Lucas",
    kind: "creator",
    categories: ["youtube", "courses", "practice"],
    region: "online",
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
      zh: "Lucas 開設線上荷語課程、晚間線上口說咖啡館，以及口說、文法或融入考試的一對一課程。YouTube 有免費影片。"
    },
    price: {
      en: "Speaking café €11.99 a month (1 evening a week) or €19.99 (2 evenings), cheaper per year. Private lessons from €28. Online course prices on the website.",
      zh: "口說咖啡館每月 €11.99（每週 1 晚）或 €19.99（每週 2 晚），年繳更便宜。一對一課 €28 起。線上課程價格請至官網查看。"
    }
  },
  {
    id: "vivo-dutch",
    name: "Vivo Dutch (Vivian)",
    kind: "creator",
    categories: ["instagram", "youtube", "courses"],
    region: "online",
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
      zh: "Vivian 自 2015 年起為合格荷語教師，曾任融入考試評分員。在 Instagram（6 萬追蹤）與 YouTube 分享免費教學，並開設 A1、A2、B1 的 10 週線上課程。"
    },
    price: {
      en: "Online course per level: DIY €187, DIY Plus €237, Premium with live classes €357 (excl. VAT, 3 installments possible). Colloquial Dutch course €37.",
      zh: "每級線上課程：DIY €187、DIY Plus €237、含直播課的 Premium €357（未稅，可分 3 期）。口語荷語課程 €37。"
    }
  },
  {
    id: "jedutchy",
    name: "JeDutchy",
    kind: "creator",
    categories: ["instagram", "courses", "practice"],
    region: "online",
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
      zh: "合格荷語教師，提供線上團體課、一對一課程、會話訓練訂閱與融入考試大師班。"
    },
    price: {
      en: "Group courses €650. Private lessons 5 × 1 h €395 or 10 × 1 h €575, trial lesson €25. Conversation training €100 a month (8 sessions). Inburgering masterclass €100.",
      zh: "團體課 €650。一對一課 5 × 1 小時 €395 或 10 × 1 小時 €575，試聽課 €25。會話訓練每月 €100（8 堂）。融入考試大師班 €100。"
    }
  },
  {
    id: "dutch-speaking-academy",
    name: "Dutch Speaking Academy",
    kind: "creator",
    categories: ["instagram", "courses"],
    region: "online",
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
      zh: "以口說為主的影片課程（入門、融入考試 A2、文法、給家長的荷語、社交荷語），另有團體會話課程與一對一教練。"
    },
    price: {
      en: "Video courses: inburgering A2 €47, Beginners €147, Dutch for Parents or Grammar €333, Dutch for Social Life €444. Group conversation course about €3,333. 1:1 programme from €5,555 for 3 months. Speaking challenge €15.",
      zh: "影片課程：融入考試 A2 €47、入門 €147、給家長的荷語或文法 €333、社交荷語 €444。團體會話課程約 €3,333。一對一課程 3 個月 €5,555 起。口說挑戰 €15。"
    }
  },
  {
    id: "easy-dutch-learning",
    name: "Easy Dutch Learning (Sanne)",
    kind: "creator",
    categories: ["instagram", "courses"],
    region: "online",
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
      zh: "Sanne 在 Instagram（4.2 萬追蹤）分享荷語技巧，並販售 A1 到 C1 各級自學線上課程，包含 NT2 與融入考試準備，學員可加入 Instagram 學習社群。"
    },
    price: {
      en: "One-time per level: A1–B2 €245, C1 €199 (the homepage shows €297). All five levels €1,485. Kids' courses €397. No subscription.",
      zh: "每級一次付清：A1–B2 €245、C1 €199（首頁顯示 €297）。五級全套 €1,485。兒童課程 €397。無訂閱制。"
    }
  },
  {
    id: "hart-voor-nederlands",
    name: "Hart voor Nederlands",
    kind: "creator",
    categories: ["instagram", "courses", "practice"],
    region: "online",
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
      zh: "荷語教師，提供一對一與雙人課程、B2 團體課、線上讀書會、會話俱樂部與 Podcast。"
    },
    price: {
      en: "Private lessons: 10 h €737, 15 h €981, 20 h €1,190 (book extra). Duo lessons €320–450 per person. B2 group course €450 excl. VAT. Book club €200 for 8 online sessions. Conversation club €90–120.",
      zh: "一對一課：10 小時 €737、15 小時 €981、20 小時 €1,190（教材另計）。雙人課每人 €320–450。B2 團體課 €450（未稅）。讀書會 8 堂線上課 €200。會話俱樂部 €90–120。"
    }
  },
  {
    id: "sociataal",
    name: "SociaTaal",
    kind: "creator",
    categories: ["instagram", "youtube", "courses"],
    region: "online",
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
      zh: "互動式線上小班課（4–6 人，每週兩堂 2 小時直播課，為期 6 週）、彈性課程，以及文法和單字自學課程。"
    },
    price: {
      en: "Group course €289 all-in. Flexible course €149. Grammar Essentials A1 €89 or A2 €69. Vocabulary course A1 €69.",
      zh: "團體課全包 €289。彈性課程 €149。文法精華 A1 €89、A2 €69。A1 單字課程 €69。"
    }
  },
  {
    id: "your-dutch-teacher",
    name: "Your Dutch Teacher (Emeraude)",
    kind: "creator",
    categories: ["instagram", "courses"],
    region: "online",
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
      zh: "Emeraude 自 2009 年起教荷語。線上小班 3–6 人，每週兩次、每次 1.5 小時，4 週完成一個級別。也有客製化私人課程。"
    },
    price: {
      en: "Group course €199 per level (4 weeks). Tailor-made lessons €62.50 an hour, with discounts for 10 or 20 classes.",
      zh: "團體課每級 €199（4 週）。客製化課程每小時 €62.50，10 或 20 堂套裝有折扣。"
    }
  },
  {
    id: "active-dutch",
    name: "Active Dutch",
    kind: "school",
    categories: ["instagram", "youtube", "courses", "practice"],
    region: "NL",
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
      zh: "為外派人士開設的荷語課程，在 Alphen aan den Rijn 與線上上課：入門團體課、一對一課程、Keep Talking Dutch 會話俱樂部，另有免費試聽課與 5 天免費口說挑戰。"
    },
    price: {
      en: "Beginners' group course €635 plus book. Keep Talking Dutch €145 for a month (4 sessions), €250 for 2 months, €350 for 3. Private lessons 10 × 90 min €1,200.",
      zh: "入門團體課 €635，教材另計。Keep Talking Dutch 1 個月（4 堂）€145、2 個月 €250、3 個月 €350。一對一課 10 堂 × 90 分鐘 €1,200。"
    }
  },
  {
    id: "dutch-today",
    name: "Dutch Today (Martijn)",
    kind: "creator",
    categories: ["youtube"],
    region: "online",
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
      zh: "Martijn 每週在 YouTube 和 Podcast「Dutch Today: leer Nederlands met Martijn」發布荷語課程，每集標示程度。"
    },
    price: {
      en: "Free on YouTube and podcast apps. Patreon about $5 a month for transcripts, exercises, word lists and extra episodes.",
      zh: "YouTube 與 Podcast 免費。Patreon 每月約 $5，提供逐字稿、練習、單字表與額外集數。"
    }
  },
  {
    id: "master-dutch",
    name: "Master Dutch (Kees)",
    kind: "creator",
    categories: ["instagram", "courses", "tutors"],
    region: "online",
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
      zh: "Kees 以「三支柱教學法」提供三種方案：團體課（A1 到 B+，最多 8 人，8 週、每週一堂 90 分鐘）、一對一課程套裝，以及全方位訂閱方案。"
    },
    price: {
      en: "Group classes €255 per 8-week course. 1-on-1 lessons: 4-hour pack €260, 16-hour pack €960. All-in-one subscription €14.95 a month.",
      zh: "團體課每期 8 週 €255。一對一課：4 小時套裝 €260、16 小時套裝 €960。全方位訂閱方案每月 €14.95。"
    }
  },
  {
    id: "nederlessen",
    name: "Nederlessen (Joram)",
    kind: "creator",
    categories: ["instagram", "courses", "app"],
    region: "online",
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
      zh: "Joram 開設線上小班（最多 4 人）與一對一口說課，也協助準備融入考試與國家考試 NT2。另販售自學 PDF：附文法的分級故事讀本（A1–B1+）、口說指南、動詞指南與 KNM 考試練習書，還有免費速查表。"
    },
    price: {
      en: "Small group €249 for 8 sessions. Private speaking lessons from €219. Self-study PDFs €5–9.99 (KNM book €9.99), with two free guides.",
      zh: "小班課 8 堂 €249。一對一口說課 €219 起。自學 PDF €5–9.99（KNM 書 €9.99），另有兩份免費指南。"
    }
  },
  {
    id: "dutch-first",
    name: "Dutch First",
    kind: "school",
    categories: ["school"],
    region: "NL",
    cities: ["Utrecht"],
    formats: ["inperson", "online"],
    focus: ["speaking", "listening", "reading", "writing", "grammar", "exam"],
    levels: ["A0", "B2"],
    cost: [175, 1159],
    hours: [8, 96],
    url: "https://dutchfirst.nl/",
    note: {
      en: "A language school in Utrecht with group courses from beginner to B1, intensive summer courses, conversation courses, inburgering courses and individual lessons in class or on Zoom.",
      zh: "位於烏特勒支的語言學校，提供入門到 B1 的團體課、暑期密集班、會話課、融入課程，以及實體或 Zoom 一對一課。"
    },
    price: {
      en: "Group courses from €350 (books extra). Summer intensives €350 for 24 hours up to €1,159 for 96 hours. Inburgering courses €17 an hour. Individual lessons in packages of 5 or more.",
      zh: "團體課 €350 起（教材另計）。暑期密集班 24 小時 €350 到 96 小時 €1,159。融入課程每小時 €17。一對一課以 5 堂以上套裝購買。"
    }
  },
  {
    id: "better-understanding",
    name: "Better Understanding",
    kind: "creator",
    categories: ["instagram", "courses", "tutors"],
    region: "online",
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
      zh: "A1 到 B2 的線上荷語小班課，每班 3–6 人（9 週、每週兩堂 1.5 小時），另有一對一、雙人課程與企業內訓。"
    },
    price: {
      en: "Group course €595 for 27 hours plus €48.50 for the textbook. Private lessons €645 for 10 one-hour lessons (€322.50 each for a duo).",
      zh: "團體課 27 小時 €595，課本另計 €48.50。一對一課 10 堂一小時 €645（雙人課每人 €322.50）。"
    }
  },
  {
    id: "nederlands-zonder-stress",
    name: "Hallo Nederlands zonder stress",
    kind: "creator",
    categories: ["instagram", "courses", "tutors"],
    region: "online",
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
      zh: "荷語老師，提供 B1–B2 一對一課程，以及給初學者的 8 週密集小班課。可直接透過線上行事曆預約。"
    },
    price: {
      en: "Private lessons B1–B2 €160 a month (4 bookings). Intensive beginners' small-group course €195 for 8 weeks of 1.5-hour classes.",
      zh: "B1–B2 一對一課每月 €160（4 堂）。初學者密集小班課 8 週、每堂 1.5 小時，共 €195。"
    }
  }
];
