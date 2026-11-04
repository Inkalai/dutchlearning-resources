// The stops on "My Dutch Journey", in English and Traditional Chinese.
// Text fields are either a plain string (same in every language) or { en, zh }.
// kind: chapter | detour (a setback or pause) | spark (a turning point) | goal
// country: "TW" for stops in Taiwan; others are in the Netherlands. Seas and flights are drawn between countries.
// Each tool: name, note, url, affiliate, level (overrides the stop's level in the toolkit), info ("More info"),
// format (self | inperson | online), type (finder resource types), skills, focus. After editing, run: node tools/build.js
window.JOURNEY_STOPS = [
  {
    "kind": "chapter",
    "marker": "A0",
    "level": "A0 → A1",
    "when": "2014–2017",
    "where": {
      "en": "National Taiwan University, Taipei",
      "zh": "台北，國立臺灣大學"
    },
    "country": "TW",
    "title": {
      "en": "Where it began",
      "zh": "一切的起點"
    },
    "story": {
      "en": "I first met Dutch at university in Taiwan, as my second foreign language. My teacher taught from the textbook Totaal, and that's where I learned the alphabet, how Dutch sounds, and the basics of grammar.",
      "zh": "我第一次接觸荷語，是在台灣讀大學時把它當作第二外語。老師用的課本是 Totaal，我在那裡學了字母、荷語的發音和基礎文法。"
    },
    "tools": [
      {
        "name": "Totaal: Basiscursus Nederlands",
        "note": {
          "en": "textbook",
          "zh": "課本"
        },
        "url": "https://partner.bol.com/click/click?p=2&t=url&s=1541805&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Ftotaal%2F1001004002491941%2F&name=Totaal%20-%20Basiscursus%20Nederlands%20voor%20anderstalige%20volwassenen%20met%20cd-rom",
        "affiliate": true,
        "format": [
          "self"
        ],
        "type": null,
        "skills": [
          "listening",
          "reading",
          "writing"
        ],
        "focus": [
          "grammar",
          "vocabulary"
        ],
        "info": {
          "en": "For medium and highly educated non-Dutch speakers who understand English, German or French. For beginners, it gives a good vocabulary list and the grammar basics.",
          "zh": "適合會英文、德文或法文，且具中高教育程度的非荷語母語者。對初學者來說，它提供很好的單字表和基礎文法。"
        }
      },
      {
        "name": {
          "en": "University Dutch classes",
          "zh": "大學荷語課"
        },
        "note": {
          "en": "second foreign language",
          "zh": "第二外語"
        },
        "format": [
          "inperson"
        ],
        "type": "school",
        "skills": [
          "speaking",
          "listening",
          "reading",
          "writing"
        ],
        "focus": [
          "pronunciation",
          "vocabulary",
          "confidence"
        ],
        "info": {
          "en": "Taught by a native Dutch speaker who understands Mandarin and English. An interactive small class that lit up my interest in the Netherlands.",
          "zh": "由懂中文和英文的荷蘭籍老師授課。互動式的小班教學，點燃了我對荷蘭的興趣。"
        }
      }
    ],
    "milestones": [
      {
        "en": "Set a good base of alphabet and pronunciation.",
        "zh": "打好字母和發音的基礎。"
      },
      {
        "en": "Qualified for a half-year exchange programme at Leiden University.",
        "zh": "獲得萊頓大學半年交換計畫的資格。"
      }
    ],
    "scenery": [
      [
        "mountains",
        8,
        18,
        170
      ],
      [
        "tower",
        66,
        4,
        40
      ],
      [
        "palm",
        74,
        52,
        56
      ],
      [
        "cloud",
        30,
        0,
        90
      ]
    ]
  },
  {
    "kind": "chapter",
    "marker": "A1",
    "level": "A1",
    "when": {
      "en": "Sep 2016 – Jan 2017",
      "zh": "2016 年 9 月 – 2017 年 1 月"
    },
    "where": {
      "en": "Exchange semester at Leiden University",
      "zh": "萊頓大學交換學期"
    },
    "title": {
      "en": "My first taste of Dutch life",
      "zh": "第一次體驗荷蘭生活"
    },
    "story": {
      "en": "I came to the Netherlands as an exchange student. During orientation week I met a Dutch girl who was helping the new exchange students, and we started a language exchange: my first real conversations, and my first time hearing everyday Dutch around me.",
      "zh": "我以交換學生的身分來到荷蘭。迎新週時，我認識了一位幫忙接待新交換生的荷蘭女生，我們開始語言交換：那是我第一次真正用荷語對話，也是第一次在生活中聽到日常荷語。"
    },
    "tools": [
      {
        "name": {
          "en": "Language exchange partner",
          "zh": "語言交換夥伴"
        },
        "note": {
          "en": "met during orientation week",
          "zh": "在迎新週認識"
        },
        "format": [],
        "type": "practice",
        "skills": [
          "speaking",
          "listening"
        ],
        "focus": [
          "confidence"
        ]
      }
    ],
    "scenery": [
      [
        "tulips",
        10,
        62,
        150
      ],
      [
        "windmill",
        56,
        4,
        80
      ],
      [
        "cloud",
        8,
        6,
        80
      ]
    ]
  },
  {
    "kind": "detour",
    "marker": "☁",
    "level": {
      "en": "Pause",
      "zh": "暫停"
    },
    "when": "2018",
    "where": {
      "en": "Back in Taiwan",
      "zh": "回到台灣"
    },
    "country": "TW",
    "title": {
      "en": "Starting @dutchlearning",
      "zh": "開始經營 @dutchlearning"
    },
    "story": {
      "en": "I created my Instagram account @dutchlearning, which kept a small connection to the Netherlands alive. But I had no opportunity to keep studying.",
      "zh": "我開了 Instagram 帳號 @dutchlearning，讓我對荷蘭還留有一絲懸念。不過，我並沒有契機繼續學習。"
    },
    "tools": [
      {
        "name": {
          "en": "@dutchlearning on Instagram",
          "zh": "Instagram 上的 @dutchlearning"
        },
        "level": "A1 → A2",
        "url": "https://www.instagram.com/dutchlearning/",
        "format": [
          "self"
        ],
        "type": "instagram",
        "skills": [],
        "focus": [
          "vocabulary"
        ]
      }
    ],
    "setbacks": [
      {
        "en": "No classes and no study routine",
        "zh": "沒有上課，也沒有固定的學習習慣"
      }
    ],
    "milestones": [
      {
        "en": "Admitted to a master's programme in the Netherlands, starting in September 2019.",
        "zh": "錄取荷蘭的碩士課程，2019 年 9 月開學。"
      }
    ],
    "scenery": [
      [
        "bench",
        30,
        56,
        90
      ],
      [
        "palm",
        8,
        6,
        60
      ],
      [
        "tower",
        70,
        8,
        36
      ]
    ]
  },
  {
    "kind": "chapter",
    "marker": "A2",
    "level": "A1 → A2",
    "when": {
      "en": "2019 – mid 2021",
      "zh": "2019 – 2021 年年中"
    },
    "where": {
      "en": "Master's in the Netherlands",
      "zh": "在荷蘭讀碩士"
    },
    "title": {
      "en": "Living here, learning by ear",
      "zh": "回到荷蘭，從生活中學荷語"
    },
    "story": {
      "en": "I came back for an English-taught master's, hoping to gain work experience here. Most of my Dutch came from simply living here and a few apps on my phone. I didn't take courses or study on my own.",
      "zh": "我回到荷蘭讀英語授課的碩士，希望能在這裡累積工作經驗。我的學習輸入大多來自生活環境，以及手機上的幾個 App。我沒有上課，也沒有自學。"
    },
    "tools": [
      {
        "name": "De Het app",
        "level": {
          "en": "All levels",
          "zh": "所有程度"
        },
        "note": {
          "en": "de or het?",
          "zh": "de 還是 het？"
        },
        "url": "https://apps.apple.com/nl/app/de-het-nederlands-leren/id548051159",
        "format": [
          "self"
        ],
        "type": "app",
        "skills": [],
        "focus": [
          "grammar"
        ]
      },
      {
        "name": "Linguee",
        "level": {
          "en": "All levels",
          "zh": "所有程度"
        },
        "note": {
          "en": "Dutch–English dictionary",
          "zh": "荷英字典"
        },
        "url": "https://www.linguee.com/english-dutch/",
        "format": [
          "self"
        ],
        "type": [
          "app",
          "dictionary"
        ],
        "skills": [],
        "focus": [
          "vocabulary"
        ]
      },
      {
        "name": "DeepL",
        "level": {
          "en": "All levels",
          "zh": "所有程度"
        },
        "note": {
          "en": "whole sentences and listening to them",
          "zh": "翻譯整句，也能聽發音"
        },
        "url": "https://www.deepl.com/translator",
        "format": [
          "self"
        ],
        "type": [
          "app",
          "dictionary"
        ],
        "skills": [
          "writing"
        ],
        "focus": [
          "pronunciation"
        ]
      }
    ],
    "setbacks": [
      {
        "en": "Finishing my master study in English",
        "zh": "用英文完成碩士學業"
      },
      {
        "en": "Finding a job before my search-year visa ran out",
        "zh": "要在求職年簽證到期前找到工作"
      }
    ],
    "scenery": [
      [
        "books",
        18,
        40,
        80
      ],
      [
        "bike",
        58,
        58,
        76
      ],
      [
        "tree",
        70,
        6,
        66
      ]
    ]
  },
  {
    "kind": "chapter",
    "marker": "A2",
    "level": "A2 ✓",
    "when": {
      "en": "Jul 2021 – 2022",
      "zh": "2021 年 7 月 – 2022"
    },
    "where": {
      "en": "First job, Amsterdam",
      "zh": "阿姆斯特丹，第一份工作"
    },
    "title": {
      "en": "The inburgering exam",
      "zh": "融入考試"
    },
    "story": {
      "en": "I started my first full-time job in Amsterdam and settled into life here. To pass the inburgering exam (A2), needed for citizenship, I did the official practice exams and wrote a diary in Dutch every day. My reading and writing improved a lot.",
      "zh": "我在阿姆斯特丹開始第一份全職工作，慢慢在這裡安頓下來。為了通過入籍需要的融入考試（A2），我做了官方的模擬考，每天用荷語寫日記。我的閱讀和寫作進步了很多。"
    },
    "tools": [
      {
        "name": {
          "en": "Official practice exams",
          "zh": "官方模擬考"
        },
        "note": "inburgeren.nl",
        "url": "https://www.inburgeren.nl/examen-doen/oefenen.jsp",
        "format": [
          "self"
        ],
        "type": "government",
        "skills": [
          "exam"
        ],
        "focus": []
      },
      {
        "name": {
          "en": "A daily diary in Dutch",
          "zh": "每天用荷語寫日記"
        },
        "format": [
          "self"
        ],
        "type": null,
        "skills": [
          "writing"
        ],
        "focus": [],
        "info": {
          "en": "I kept this up for 30 days right before the exam, to train my writing.",
          "zh": "考試前 30 天我每天都寫，用來練習寫作。"
        }
      },
      {
        "name": {
          "en": "Learn Dutch with Kim: A2 video course",
          "zh": "Learn Dutch with Kim：A2 影片課程"
        },
        "note": {
          "en": "bought in 2021 to prepare for the exam",
          "zh": "2021 年為準備考試購買"
        },
        "url": "https://courses.learndutchwithkim.com?affcode=410617_e0zlv-ky",
        "affiliate": true,
        "format": [
          "self"
        ],
        "type": "courses",
        "skills": [
          "listening",
          "reading"
        ],
        "focus": [
          "grammar",
          "verbs",
          "vocabulary"
        ],
        "info": {
          "en": "Very engaging and informative videos made by Kim. Besides her free videos on YouTube, buying this course gives you extra PDF materials explaining the grammar, more examples, exercises, quizzes, and extra stories with audio and transcripts. It suits learners on a smaller budget who enjoy self-paced study with videos and PDFs. She offers courses from A0 to B1.",
          "zh": "Kim 的影片很吸引人，內容也很豐富。除了 YouTube 上的免費影片，購買這門課還能取得額外的 PDF 教材，包括文法解說、更多例句、練習題、小測驗，以及附音檔和逐字稿的額外故事。適合預算較少、喜歡用影片和 PDF 自學的學習者。她提供 A0 到 B1 的課程。"
        }
      },
      {
        "name": "Learn Dutch with Kim",
        "level": "A1 → A2",
        "note": {
          "en": "YouTube channel",
          "zh": "YouTube 頻道"
        },
        "url": "https://www.youtube.com/@learndutchwithkim",
        "format": [
          "self"
        ],
        "type": "youtube",
        "skills": [
          "listening"
        ],
        "focus": [
          "grammar"
        ]
      },
      {
        "name": "Heb je zin?",
        "note": {
          "en": "Bart de Pau's series on YouTube",
          "zh": "Bart de Pau 的 YouTube 影集"
        },
        "url": "https://www.youtube.com/playlist?list=PLUOa-qvvZolDuuM9Kb7-4OG7ed1c1Yadz",
        "format": [
          "self"
        ],
        "type": "youtube",
        "skills": [
          "listening"
        ],
        "focus": []
      }
    ],
    "setbacks": [
      {
        "en": "Busy settling into a new job and a new life",
        "zh": "忙著適應新工作和新生活"
      }
    ],
    "milestones": [
      {
        "en": "2022: passed the inburgering exam and got my certificate.",
        "zh": "2022：通過融入考試，拿到證書。"
      }
    ],
    "scenery": [
      [
        "houses",
        8,
        20,
        150
      ],
      [
        "canal",
        0,
        70,
        220
      ]
    ]
  },
  {
    "kind": "detour",
    "marker": "☁",
    "level": {
      "en": "Plateau",
      "zh": "停滯期"
    },
    "when": "2022–2023",
    "where": {
      "en": "Amsterdam",
      "zh": "阿姆斯特丹"
    },
    "plateau": true,
    "title": {
      "en": "Stuck on a plateau",
      "zh": "卡在停滯期"
    },
    "story": {
      "en": "Day to day I still used English and only simple Dutch. I even stopped posting on Instagram for a while. I bought Nederlands in actie to study on my own, but couldn't keep it going.",
      "zh": "日常生活中我還是用英文，只會說簡單的荷語。我甚至有一陣子沒在 Instagram 上發文。我買了 Nederlands in actie 想自學，但沒能堅持下去。"
    },
    "tools": [
      {
        "name": "Nederlands in actie",
        "note": {
          "en": "self-study book",
          "zh": "自學書"
        },
        "level": "A2 → B1",
        "url": "https://partner.bol.com/click/click?p=2&t=url&s=1541805&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fnederlands-in-actie%2F9300000098839335%2F&name=Nederlands%20in%20actie",
        "affiliate": true,
        "format": [
          "self"
        ],
        "type": null,
        "skills": [
          "reading"
        ],
        "focus": [
          "grammar",
          "vocabulary"
        ],
        "info": {
          "en": "Suitable if you like lots of reading material and enjoy looking up vocabulary yourself. Not the most engaging textbook. Each chapter has many assignments, and the appendix brings all the grammar rules together in a clearer way. It suits learners who are used to theoretical self-study.",
          "zh": "適合喜歡大量閱讀、喜歡自己查單字的人。不算是最吸引人的課本。每一章都有很多作業，附錄則把所有文法規則整理得更清楚。適合習慣理論式自學的學習者。"
        }
      }
    ],
    "setbacks": [
      {
        "en": "Not enough self-discipline to study alone",
        "zh": "自學時不夠自律"
      },
      {
        "en": "English for almost everything",
        "zh": "幾乎所有事情都用英文"
      }
    ],
    "scenery": [
      [
        "storm",
        22,
        10,
        110
      ],
      [
        "tree",
        12,
        56,
        60
      ],
      [
        "tree",
        64,
        50,
        54
      ]
    ]
  },
  {
    "kind": "spark",
    "marker": "✦",
    "level": {
      "en": "Turning point",
      "zh": "轉折點"
    },
    "when": "2023",
    "where": {
      "en": "My first own apartment",
      "zh": "我的第一間公寓"
    },
    "title": {
      "en": "A home worth investing in",
      "zh": "值得投資的家"
    },
    "story": {
      "en": "Moving into my own first apartment made me want to put real effort into Dutch again.",
      "zh": "搬進我的第一間公寓後，我想再次認真投入學荷語。"
    },
    "tools": [],
    "scenery": [
      [
        "heart-house",
        30,
        26,
        90
      ],
      [
        "tulips",
        8,
        76,
        120
      ]
    ]
  },
  {
    "kind": "chapter",
    "marker": "A2",
    "level": "A2 → B1",
    "when": {
      "en": "End of 2024 – 2025",
      "zh": "2024 年底 – 2025"
    },
    "where": "Dutch in Utrecht",
    "title": {
      "en": "Back to the classroom",
      "zh": "重回教室"
    },
    "story": {
      "en": "I signed up with Dutch in Utrecht: the studio was close to home, the price was affordable, and my neighbour recommended the teacher. Sometimes we went to class together, which made it fun. In class I practised speaking a lot, and with the book De Sprong I reviewed grammar in a short time.",
      "zh": "我報名了 Dutch in Utrecht：教室離家很近、價格實惠，而且是鄰居推薦的老師。有時我們會一起去上課，很有趣。我在課堂上練習了大量口說，也用 De Sprong 這本書在短時間內複習了文法。"
    },
    "tools": [
      {
        "name": "Dutch in Utrecht",
        "note": {
          "en": "private in-person lessons",
          "zh": "實體私人課"
        },
        "url": "http://dutchinutrecht.nl/",
        "format": [
          "inperson"
        ],
        "type": "tutors",
        "skills": [
          "speaking",
          "listening"
        ],
        "focus": [
          "pronunciation",
          "grammar",
          "confidence"
        ],
        "info": {
          "en": "Private lessons where I could practise speaking and pronunciation a lot, review the grammar I had forgotten, and quickly learn anything I wanted. He offers courses for all levels.",
          "zh": "私人課程讓我能大量練習口說和發音、複習忘記的文法，並快速學到任何我想學的內容。他提供所有程度的課程。"
        }
      },
      {
        "name": "De Sprong",
        "level": "A2 → B1",
        "note": {
          "en": "textbook",
          "zh": "課本"
        },
        "url": "https://partner.bol.com/click/click?p=2&t=url&s=1541805&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fde-sprong%2F9300000151899387%2F&name=De%20sprong",
        "affiliate": true,
        "format": [
          "self"
        ],
        "type": null,
        "skills": [
          "listening",
          "reading",
          "writing"
        ],
        "focus": [
          "grammar",
          "vocabulary"
        ],
        "info": {
          "en": "Colourful pages and a good mix of listening, reading, writing and speaking exercises if you use it in a class. It takes more space to explain the grammar rules than Nederlands in actie. Really good self-study material for levels A2 to B1.",
          "zh": "頁面色彩豐富，如果在課堂上使用，聽、讀、寫、說的練習搭配得很好。它比 Nederlands in actie 用更多篇幅解釋文法規則。是 A2 到 B1 程度很好的自學教材。"
        }
      },
      {
        "name": {
          "en": "A study buddy",
          "zh": "學習夥伴"
        },
        "note": {
          "en": "my neighbour",
          "zh": "我的鄰居"
        },
        "format": [],
        "type": "practice",
        "skills": [
          "speaking"
        ],
        "focus": [],
        "info": {
          "en": "She has a similar Dutch level to mine, so luckily we could join the private lessons together, pay a cheaper rate, and have interesting conversations with the teacher.",
          "zh": "她的荷語程度和我差不多，所以我們很幸運能一起上私人課，費用比較便宜，還能和老師聊得很開心。"
        }
      },
      {
        "name": "Duolingo",
        "level": {
          "en": "All levels",
          "zh": "所有程度"
        },
        "note": {
          "en": "at least one session every day since 2025",
          "zh": "2025 年起每天至少一課"
        },
        "url": "https://www.duolingo.com/course/nl/en/Learn-Dutch",
        "format": [
          "self"
        ],
        "type": "app",
        "skills": [],
        "focus": [
          "pronunciation",
          "vocabulary"
        ],
        "info": {
          "en": "I only use the free version. One session a day doesn't take much effort, and sometimes you still learn something new from it.",
          "zh": "我只用免費版。每天一課不太費力，有時還是能學到新東西。"
        }
      }
    ],
    "milestones": [
      {
        "en": "2025: got Dutch citizenship, bought a house with my Dutch partner, and wanted to invest even more in my Dutch.",
        "zh": "2025：取得荷蘭國籍，和荷蘭另一半買了房子，想更加投入學荷語。"
      }
    ],
    "scenery": [
      [
        "houses",
        6,
        30,
        130
      ],
      [
        "bike",
        60,
        10,
        70
      ],
      [
        "sheep",
        64,
        68,
        60
      ]
    ]
  },
  {
    "kind": "chapter",
    "marker": "A2",
    "level": "B1",
    "when": {
      "en": "Oct 2025 – 2026",
      "zh": "2025 年 10 月 – 2026"
    },
    "where": {
      "en": "A new city with my partner",
      "zh": "和另一半搬到新城市"
    },
    "title": {
      "en": "All in: an intensive course",
      "zh": "全力以赴：密集課程"
    },
    "story": {
      "en": "I moved in with my partner in a new city. We plan to build a family in the Netherlands, so I decided to really invest time in Dutch. I joined NL Training's free, intensive, in-person course with the book Wind Mee. I learned many verbs in different tenses, more grammar, and found the courage to speak Dutch in daily life again. I also started a 365-day speaking challenge on Instagram, practising with my Dutch partner.",
      "zh": "我和另一半一起搬到新城市。我們打算在荷蘭成家，所以我決定認真投入時間學荷語。我參加了 NL Training 免費的實體密集課程，課本是 Wind Mee。我學到很多不同時態的動詞和更多文法，也重新找回在日常生活中說荷語的勇氣。我還在 Instagram 上開始了 365 天口說挑戰，和我的荷蘭另一半一起練習。"
    },
    "tools": [
      {
        "name": "NL Training",
        "level": "A2 ✓",
        "note": {
          "en": "free intensive course",
          "zh": "免費密集課程"
        },
        "url": "https://www.nltraining.nl/cursussen",
        "format": [
          "inperson"
        ],
        "type": "school",
        "skills": [
          "speaking",
          "listening",
          "writing"
        ],
        "focus": [
          "grammar",
          "verbs",
          "confidence"
        ],
        "info": {
          "en": "It offers free in-person courses under certain conditions. You can't choose your teacher, and your class depends on your level test and which groups have places left. It suits A1–A2 learners who want to progress further, because all communication is in Dutch. Their courses mainly cover A0 to A2, for integration (inburgering).",
          "zh": "符合特定條件就能免費上實體課程。你不能選老師，班級會依照你的分級測驗結果和各班的空位安排。因為所有溝通都用荷語，適合想再進步的 A1–A2 學習者。他們的課程主要涵蓋 A0 到 A2，以融入（inburgering）為目的。"
        }
      },
      {
        "name": "Wind Mee",
        "note": {
          "en": "textbook",
          "zh": "課本"
        },
        "level": "A1 → A2",
        "url": "https://partner.bol.com/click/click?p=2&t=url&s=1541805&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fwind-mee%2F9200000130647502%2F&name=Wind%20mee%20NT2%20-%20Basismethode%20Nederlands%20als%20tweede%20taal%20voor%20volwassenen",
        "affiliate": true,
        "format": [
          "self"
        ],
        "type": null,
        "skills": [
          "listening",
          "reading",
          "writing"
        ],
        "focus": [
          "grammar",
          "verbs",
          "vocabulary"
        ],
        "info": {
          "en": "A colourful, engaging self-study book for levels A1 to A2, with a good mix of reading, writing, listening and speaking exercises. The content is practical for everyday conversations, too.",
          "zh": "色彩豐富、引人入勝的自學書，適合 A1 到 A2 程度，讀、寫、聽、說的練習搭配得很好。內容也很實用，適合日常對話。"
        }
      },
      {
        "name": {
          "en": "365-day speaking challenge",
          "zh": "365 天口說挑戰"
        },
        "level": "A2 → B2",
        "note": {
          "en": "on Instagram",
          "zh": "在 Instagram 上"
        },
        "url": "https://www.instagram.com/dutchlearning/",
        "format": [
          "self"
        ],
        "type": "instagram",
        "skills": [
          "speaking",
          "listening"
        ],
        "focus": [
          "confidence"
        ]
      },
      {
        "name": "Duolingo",
        "level": {
          "en": "All levels",
          "zh": "所有程度"
        },
        "note": {
          "en": "at least one session every day",
          "zh": "每天至少一課"
        },
        "url": "https://www.duolingo.com/course/nl/en/Learn-Dutch",
        "format": [
          "self"
        ],
        "type": "app",
        "skills": [],
        "focus": [
          "pronunciation",
          "vocabulary"
        ],
        "info": {
          "en": "I only use the free version. One session a day doesn't take much effort, and sometimes you still learn something new from it.",
          "zh": "我只用免費版。每天一課不太費力，有時還是能學到新東西。"
        }
      },
      {
        "name": {
          "en": "Dutch TV and series",
          "zh": "荷蘭電視節目和影集"
        },
        "level": "A2 → B2",
        "note": "First Dates, Lang Leve de Liefde, De Eetclub, Love Is Blind: Nederland",
        "format": [
          "self"
        ],
        "type": "tv",
        "skills": [
          "listening",
          "reading"
        ],
        "focus": [],
        "info": {
          "en": "I watched with Dutch subtitles so I could follow along.",
          "zh": "我開著荷文字幕看，比較跟得上。"
        }
      }
    ],
    "scenery": [
      [
        "windmill",
        20,
        0,
        84
      ],
      [
        "tulips",
        4,
        74,
        160
      ],
      [
        "cloud",
        60,
        6,
        80
      ]
    ]
  },
  {
    "kind": "chapter",
    "marker": "B1",
    "level": "B1 → B2",
    "when": {
      "en": "Oct 2026 – now",
      "zh": "2026 年 10 月 – 現在"
    },
    "where": {
      "en": "Maternity leave",
      "zh": "產假中"
    },
    "current": true,
    "title": {
      "en": "Seize the free time to progress further",
      "zh": "把握空檔，再往前進"
    },
    "story": {
      "en": "During maternity leave, I joined a small A2–B1 group at ABC Dutch, again with De Sprong. I learned quite a lot of new grammar from the book and felt very engaged speaking Dutch in every lesson.",
      "zh": "產假期間，我參加了 ABC Dutch 的 A2–B1 小班課，一樣使用 De Sprong。我從這本書學到不少新文法，每堂課都很投入地說荷語。"
    },
    "tools": [
      {
        "name": "ABC Dutch",
        "level": "B1 ✓",
        "note": {
          "en": "small group",
          "zh": "小班制"
        },
        "url": "https://www.abcdutch.com/",
        "format": [
          "inperson"
        ],
        "type": "school",
        "skills": [
          "speaking",
          "listening",
          "reading",
          "writing"
        ],
        "focus": [
          "pronunciation",
          "vocabulary",
          "grammar",
          "verbs",
          "confidence"
        ],
        "info": {
          "en": "Small groups of fewer than 10 people. You can't choose your teacher, but all the teachers are certified and creative in how they teach. They often bring extra materials to make the class even more engaging. They offer courses for all levels, as well as exam preparation.",
          "zh": "小班制，每班不到 10 人。不能選老師，但所有老師都有合格證照，教學也很有創意。他們常會帶額外的教材，讓課程更有趣。他們提供所有程度的課程，也有考試準備課程。"
        }
      },
      {
        "name": "De Sprong",
        "level": "A2 → B1",
        "note": {
          "en": "textbook",
          "zh": "課本"
        },
        "url": "https://partner.bol.com/click/click?p=2&t=url&s=1541805&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fde-sprong%2F9300000151899387%2F&name=De%20sprong",
        "affiliate": true,
        "format": [
          "self"
        ],
        "type": null,
        "skills": [
          "listening",
          "reading",
          "writing"
        ],
        "focus": [
          "grammar",
          "vocabulary"
        ],
        "info": {
          "en": "Colourful pages and a good mix of listening, reading, writing and speaking exercises if you use it in a class. It takes more space to explain the grammar rules than Nederlands in actie. Really good self-study material for levels A2 to B1.",
          "zh": "頁面色彩豐富，如果在課堂上使用，聽、讀、寫、說的練習搭配得很好。它比 Nederlands in actie 用更多篇幅解釋文法規則。是 A2 到 B1 程度很好的自學教材。"
        }
      },
      {
        "name": {
          "en": "365-day speaking challenge",
          "zh": "365 天口說挑戰"
        },
        "level": "A2 → B2",
        "note": {
          "en": "still going, on Instagram",
          "zh": "持續進行中，在 Instagram 上"
        },
        "url": "https://www.instagram.com/dutchlearning/",
        "format": [
          "self"
        ],
        "type": "instagram",
        "skills": [
          "speaking",
          "listening"
        ],
        "focus": [
          "confidence"
        ]
      },
      {
        "name": "Duolingo",
        "level": {
          "en": "All levels",
          "zh": "所有程度"
        },
        "note": {
          "en": "still at least one session every day",
          "zh": "仍然每天至少一課"
        },
        "url": "https://www.duolingo.com/course/nl/en/Learn-Dutch",
        "format": [
          "self"
        ],
        "type": "app",
        "skills": [],
        "focus": [
          "pronunciation",
          "vocabulary"
        ],
        "info": {
          "en": "I only use the free version. One session a day doesn't take much effort, and sometimes you still learn something new from it.",
          "zh": "我只用免費版。每天一課不太費力，有時還是能學到新東西。"
        }
      }
    ],
    "scenery": [
      [
        "baby",
        30,
        30,
        90
      ],
      [
        "tree",
        10,
        4,
        64
      ],
      [
        "tree",
        70,
        60,
        58
      ]
    ]
  },
  {
    "kind": "goal",
    "marker": "🔒",
    "level": "B2/C1",
    "when": {
      "en": "Next",
      "zh": "下一站"
    },
    "where": {
      "en": "The goal",
      "zh": "目標"
    },
    "title": {
      "en": "Working in Dutch, fluent in daily life",
      "zh": "用荷語工作，日常流利溝通"
    },
    "story": {
      "en": "The next part of the road. I'll update this map as I go.",
      "zh": "這是接下來的路。我會隨著進度更新這張地圖。"
    },
    "tools": [],
    "scenery": [
      [
        "castle",
        18,
        0,
        170
      ],
      [
        "key",
        70,
        60,
        46
      ]
    ]
  }
];
