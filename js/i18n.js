/**
 * i18n.js — Unified translation dictionary and language switcher
 * Covers: index.html, about.html, why-us.html, portfolio.html, contact.html
 */

const i18nTranslations = {
  zh: {
    nav: {
      home:      '首页',
      about:     '关于我们',
      whyUs:     '我们的优势',
      portfolio: '作品集',
      contact:   '联系我们'
    },

    // ── index.html ────────────────────────────────────────────────────────────
    hero: {
      slogan: '居心所向 · 空间所往'
    },

    about: {
      titleZh: '关于居心空间',
      textCn: '居心空间创立于2017年，是一家专注于高端住宅与商业空间设计的先锋设计事务所。我们以\u201c居心所向，空间所往\u201d为核心理念，将东方美学哲学与现代设计语言完美融合，为每一位客户打造超越期待的空间体验。多年来，我们已为超过100,000位客户实现了理想人居梦想，与200+知名品牌建立深度合作关系，作品屡获国际设计大奖，被业界誉为\u201c空间美学的革新者\u201d。',
      textEn: 'Founded in 2017, heart studio is a pioneering design studio specializing in high-end residential and commercial space design. Guided by our philosophy \u201cDesign Your Heart\'s Desire,\u201d we seamlessly blend Eastern aesthetic philosophy with modern design language, creating spatial experiences that exceed expectations for every client. Over the years, we have realized ideal living dreams for over 100,000 clients and established deep partnerships with 200+ renowned brands.'
    },

    advantages: {
      card1: { title: '定制化全案设计', sub: '从概念到落地的一站式服务', desc: '从空间规划、硬装设计到软装搭配，提供一站式全案设计服务。资深设计师团队深入了解客户的生活方式、审美偏好与功能需求，量身定制独一无二的空间解决方案。每一个细节都经过反复推敲，确保最终呈现既美观实用又彰显个性品味。' },
      card2: { title: '全球顶级供应链', sub: '甄选全球优质材料与品牌', desc: '与意大利、法国、北欧等全球顶级品牌建立战略合作关系，直接采购省去中间环节，为客户提供品质保障同时大幅节省成本。每一件材料和家具都经过严格筛选，确保品质与美感的完美统一。' },
      card3: { title: '国际生态认证',   sub: '绿色环保、健康居住理念', desc: '严格选用绿色建材，所有材料均通过ISO14001环境管理体系认证、欧盟CE认证、美国GREENGUARD认证。从源头杜绝甲醛、苯等有害物质，为老人、儿童、孕妇等敏感人群打造健康安全的居住环境。' },
      card4: { title: '德系精工工艺',   sub: '严苛标准成就卓越品质', desc: '引入德国DIN标准施工体系，建立16道质量检测节点、128项施工标准。由拥有10年以上经验的高级工匠亲自施工，项目经理全程驻场监督，每道工序必须通过第三方质检验收。' },
      card5: { title: '终身管家服务',   sub: '贴心售后、长期陪伴', desc: '行业首创终身管家服务，交付只是服务的开始。专属客服团队7×24小时在线响应，提供免费的定期回访、保养指导、维修服务。建立完整的客户档案，记录每一次沟通与服务。' }
    },

    // index.html - Portfolio section (page4)
    indexPortfolio: {
      title: '作品集',
      subtitle: '2020-2026<br>精选作品',
      cases: [
        {
          title: '现代简约公寓',
          tags: '住宅 · 现代简约',
          details: '上海 · 120㎡ · 2024',
          award: '🏆 2024意大利A\'Design Award银奖'
        },
        {
          title: '北欧风格别墅',
          tags: '别墅 · 北欧风格',
          details: '杭州 · 280㎡ · 2024',
          award: '📖 ELLE DECORATION 2024年度最具人文关怀住宅'
        },
        {
          title: '半山云境别墅',
          tags: '别墅 · 现代山居',
          details: '成都 · 450㎡ · 2024',
          award: '🏆 Red Dot Design Award 2024'
        }
      ]
    },

    // Stacked cases (index.html module3)
    cases: [
      { title: '上海 · 云栖别墅', desc: '780㎡ 现代东方美学' },
      { title: '北京 · 院子会所', desc: '1200㎡ 新中式商业空间' },
      { title: '深圳 · 半山住宅', desc: '320㎡ 极简主义私宅' }
    ],

    footer: {
      company: '居心空间',
      address: '地址',
      addressDetail: '上海市徐汇区西岸艺术中心',
      hours: '工作时间',
      hoursDetail: '周一至周五 9:30-18:30',
      contact: '联系方式',
      emailLabel: '邮箱:',
      email: 'office@heartstudio.com',
      phoneLabel: '电话:',
      phone: '+86 21 1234 5678',
      social: '社交媒体账号',
      social1: '小红书 @居心设计',
      social2: '微博 @居心设计',
      social3: 'Instagram @Heart_Studio',
      copyright: '© 2026 居心空间 heart studio. All rights reserved.'
    },

    // ── about.html ────────────────────────────────────────────────────────────
    aboutPage: {
      heroTitle:    '关于我们',
      heroSubtitle: 'ABOUT US',
      storyTitle: '品牌故事',
      storyLead: '居心空间的故事始于2017年的一个美好愿景——让每一个空间都能讲述居住者的故事。',
      storyText1: '创始人深信，优秀的室内设计不仅是对空间的规划，更是对生活方式的艺术表达。我们以"居心所向，空间所往"为核心理念，将千年东方美学智慧与现代国际设计语言完美融合，开创了独具一格的设计风格。',
      storyText2: '八年来，我们从一个小小的设计工作室，成长为业界公认的领军者。服务超过100,000位客户，与200+国内外知名品牌建立深度战略合作，作品遍布中国主要城市及海外多地。',
      storyText3: '我们的核心团队由50+位资深设计师组成，汇聚了来自意大利米兰理工大学、德国包豪斯设计学院、美国罗德岛设计学院等国际顶尖设计院校的精英。平均从业经验超过10年，既有深厚的理论功底，又具备丰富的实战经验。',
      storyText4: '我们相信，好的设计不仅仅是视觉的美感，更是对生活方式的深刻理解和对空间可能性的极致探索。从概念设计到最终落地，我们严格把控每一个环节，确保设计理念得到完美呈现。',
      stats: {
        stat1: '创立年份',
        stat2: '服务客户',
        stat3: '品牌合作',
        stat4: '国际大奖'
      },
      philosophyTitle: '设计理念',
      philosophyIntro: '三大核心设计原则，指引我们创造每一个作品',
      philosophy: [
        { title: '少即是多', desc: '去除繁杂，保留本质，用最少的元素创造最大的空间价值' },
        { title: '实用与美学结合', desc: '功能与形式并重，让设计既美观又实用，满足真实生活需求' },
        { title: '从用户出发设计', desc: '深入了解用户生活方式与需求，量身定制专属空间解决方案' }
      ],
      tagline: '居心所向 · 空间所往',
      ctaTitle: '准备好开始您的空间之旅了吗？',
      ctaSubtitle: '让我们一起，将您心中的理想空间变为现实',
      ctaPrimary: '联系我们',
      ctaSecondary: '浏览作品'
    },

    // ── why-us.html ──────────────────────────────────────────────────────────
    whyUsPage: {
      heroTitle:    '我们的优势',
      heroSubtitle: 'WHY CHOOSE US',
      introTitle:   '为什么选择居心空间？',
      introText:    '在众多设计公司中，居心空间以其独特的设计理念、严格的品质把控和贴心的服务体系脱颖而出。我们不仅仅提供设计方案，更致力于为您打造一个真正属于您的生活空间。',
      items: [
        {
          number:  '01',
          title:   '定制化全案设计',
          titleEn: 'Customized Design',
          lead:    '从概念草图到施工落地，提供全程一对一的专属设计服务，确保每个细节都完美呈现。',
          details: '我们的设计师团队拥有超过10年的行业经验，深度了解客户需求，将您的生活理念转化为独特的空间语言。从初步沟通、方案设计、材料选择到施工监理，全程陪伴，让您的家真正成为您想要的样子。',
          list:    ['一对一专属设计顾问', '全程项目管理与监督', '3D效果图与VR体验', '灵活的设计修改机制']
        },
        {
          number:  '02',
          title:   '全球顶级供应链',
          titleEn: 'Global Supply Chain',
          lead:    '与全球200+顶级品牌合作，直接采购，省去中间环节，为您提供最优质的材料与家具。',
          details: '我们与意大利、德国、北欧等地的顶级品牌建立了长期合作关系，能够以最优惠的价格为客户提供正品保证。同时，我们拥有专业的采购团队，定期参加国际家居展，持续引入最新、最优质的产品。',
          list:    ['200+全球顶级品牌合作', '正品保证与溯源追踪', '专业采购团队把关', '全球物流与安装服务']
        },
        {
          number:  '03',
          title:   '国际生态认证',
          titleEn: 'Eco-Certification',
          lead:    '所有材料均通过国际环保认证，坚持绿色设计理念，为您和家人打造健康、可持续的居住环境。',
          details: '我们严格筛选所有材料，确保每一件产品都符合国际环保标准。我们的项目已获得多项绿色建筑认证，致力于在美观与可持续性之间找到完美平衡，为下一代保护我们共同的环境。',
          list:    ['所有材料通过环保认证', '低VOC涂料与材料', '节能设计方案', '可持续材料优先选用']
        },
        {
          number:  '04',
          title:   '德系精工工艺',
          titleEn: 'German Craftsmanship',
          lead:    '引进德国精工工艺与管理体系，严格的质量控制确保每一个细节都达到最高标准。',
          details: '我们的施工团队经过严格的德系工艺培训，采用精密的工程管理方法。每个项目都有专业的质检团队全程跟踪，从基础工程到软装配饰，确保每一个节点都符合我们的高标准要求。',
          list:    ['德系工艺培训认证', '三重质量检验体系', '毫米级精准施工', '材料与工艺双重保障']
        },
        {
          number:  '05',
          title:   '终身管家服务',
          titleEn: 'Lifetime Service',
          lead:    '项目竣工不是终点，而是我们服务的起点。终身维护保障，让您的空间历久弥新。',
          details: '我们提供完善的售后服务体系，包括定期上门检查、季节性维护建议和24小时应急响应。我们的管家服务团队时刻待命，确保您的空间始终保持最佳状态。我们相信，真正的服务是建立一段长久的信任关系。',
          list:    ['终身免费咨询服务', '定期回访与维护检查', '24小时应急响应', '专属客户服务经理']
        }
      ]
    },

    // ── portfolio.html ───────────────────────────────────────────────────────
    portfolioPage: {
      heroTitle:    '作品集',
      heroSubtitle: 'PORTFOLIO',
      introTitle: '精选作品集',
      introSubtitle: '2020-2024 · 部分代表作品展示',
      sectionTitle: '精选案例',
      // Stack items (top 6 projects)
      stackItems: [
        {
          title: '现代简约公寓',
          subtitle: 'Modern Minimalist Apartment',
          location: '上海 · Shanghai',
          area: '150㎡ · 1614 sqft',
          year: '2024',
          type: '住宅空间',
          description: '此项目位于上海浦东核心地段，为追求极致简约美学的业主量身打造。整体以"少即是多"为核心理念，通过大面积留白与精致线条勾勒纯粹空间。开放式客厅与餐厅贯通，无主灯设计配合隐藏式灯带，营造层次丰富的光影效果。厨房采用意大利进口哑光白橱柜，搭配中岛台形成多功能料理区。主卧套房配置步入式衣帽间与独立卫浴，色调以白色、浅灰为主，局部点缀原木色。该作品荣获2024年意大利A\'Design Award银奖。'
        },
        {
          title: '都市轻奢住宅',
          subtitle: 'Urban Luxe Residence',
          location: '北京 · Beijing',
          area: '110㎡ · 1184 sqft',
          year: '2024',
          type: '住宅空间',
          description: '北京CBD核心区域的都市公寓，业主为时尚杂志主编。设计定位为"都市轻奢"，在简约基调上融入金色与黄铜元素，提升空间质感。采用LDK一体化设计，客厅、餐厅、厨房无缝连接。色彩以高级灰为底，搭配爱马仕橙软装配饰，展现都市精英生活态度。定制衣柜采用嵌入式设计，与墙面完美融合。卫浴空间选用意大利大理石与智能系统，打造私密奢华体验。'
        },
        {
          title: '山水人文别墅',
          subtitle: 'Nature & Culture Villa',
          location: '杭州 · Hangzhou',
          area: '380㎡ · 4090 sqft',
          year: '2024',
          type: '住宅空间',
          description: '杭州西溪湿地畔的独栋别墅，业主为热爱艺术的海归夫妇。以"天人合一"为哲学基础，将自然景观与现代建筑融合。一层采用大面积落地玻璃，将湖光山色引入室内。6米挑高客厅，悬挂式旋转楼梯成为视觉焦点，采用丹麦进口橡木踏步。地下室打造私人艺术画廊与家庭影院，配备专业恒温恒湿系统。该项目被《ELLE DECORATION》评为"2024年度最具人文关怀住宅"。'
        },
        {
          title: '温馨美学居所',
          subtitle: 'Cozy Aesthetic Home',
          location: '广州 · Guangzhou',
          area: '95㎡ · 1022 sqft',
          year: '2024',
          type: '住宅空间',
          description: '广州天河区的温馨小宅，业主为自由插画师。以"日式wabi-sabi"美学为灵感，在不完美中发现美，在朴素中寻找温暖。整体采用原木、亚麻、陶土等自然材质，营造回归本真的居住氛围。开放式厨房与岛台设计，满足日常烹饪需求，也是创作灵感迸发的工作台。卧室采用地台设计，搭配榻榻米与日式障子门，打造禅意休息空间。阳台改造为迷你花园。'
        },
        {
          title: '现代办公空间',
          subtitle: 'Modern Office Space',
          location: '深圳 · Shenzhen',
          area: '650㎡ · 6997 sqft',
          year: '2024',
          type: '商业空间',
          description: '为深圳某设计事务所打造的现代化办公空间，容纳50+设计师团队。以"开放与灵感"为核心理念，打破传统办公格局。一层采用岛式布局，每个工作岛配备独立讨论区与白板墙。6米挑高接待区使用大面积玻璃幕墙，自然光线充足，绿植墙注入生机。二层设置独立设计室与模型制作区，配备专业绘图桌与3D打印设备。材料选用工业风水泥地面、黑色金属框架与原木桌面。'
        },
        {
          title: '艺术展示空间',
          subtitle: 'Art Exhibition Space',
          location: '上海 · Shanghai',
          area: '420㎡ · 4521 sqft',
          year: '2024',
          type: '商业空间',
          description: '位于上海M50创意园的艺术展示空间，为新兴艺术家提供展示平台。老厂房改造项目，保留裸露的混凝土梁柱与红砖墙等工业遗存。采用"新旧共生"策略，在工业风基底上融入极简现代展示系统。主展区采用可移动展墙系统，根据展览需求灵活调整布局。照明使用专业轨道射灯，色温4000K，显色指数>95。入口设置咖啡吧台与艺术书店，为观众提供休憩交流空间。'
        }
      ],
      // Featured cases (bottom 3 projects)
      cases: [
        {
          title: '现代简约公寓',
          location: '地点：上海',
          area: '面积：120㎡',
          year: '年份：2024',
          description: '此项目位于上海浦东核心地段，业主为一位成功的企业家，追求极致的简约美学。我们以"少即是多"为设计哲学，通过大量留白与精致的线条勾勒出空间的纯粹之美。该作品荣获2024年意大利A\'Design Award银奖。'
        },
        {
          title: '北欧风格别墅',
          location: '地点：杭州',
          area: '面积：280㎡',
          year: '年份：2024',
          description: '坐落于杭州西溪湿地畔的独栋别墅，业主是一对海归夫妇。设计团队以北欧Hygge生活哲学为灵感，大量运用丹麦进口橡木、芬兰顶级瓷砖。该项目被《ELLE DECORATION》杂志评为"2024年度最具人文关怀住宅"。'
        },
        {
          title: '半山云境别墅',
          location: '地点：成都',
          area: '面积：450㎡',
          year: '年份：2024',
          award: '🏆 Red Dot Design Award 2024',
          description: '成都近郊半山腰的独栋别墅，依山而建，将川西山地建筑语言与现代简约风格融合。建筑以L形布局拥抱山景，大面积落地玻璃将山林云雾引入室内。室内以米色石材、原木与哑光金属为主调，室外设置无边泳池与景观露台，俯瞰成都平原。'
        }
      ],
      modalLabels: {
        location: '地点',
        area:     '面积',
        year:     '年份',
        type:     '类型',
        close:    '关闭'
      }
    },

    // ── contact.html ─────────────────────────────────────────────────────────
    contactPage: {
      heroTitle:    '联系我们',
      heroSubtitle: 'CONTACT US',
      formTitle: '在线咨询',
      formSubtitle: '请填写以下信息，我们会在24小时内与您联系',
      processTitle: '服务流程',
      faqTitle: '常见问题',
      processSteps: [
        { title: '初步咨询', desc: '免费初步咨询<br>了解项目基本信息和预算范围' },
        { title: '深度沟通', desc: '设计师上门测量<br>深入了解客户需求和生活方式' },
        { title: '方案设计', desc: '15个工作日内提供3套方案<br>客户确认后进行深化设计' },
        { title: '施工落地', desc: '专业施工团队进场<br>设计师每周2次现场巡查' }
      ],
      faqs: [
        {
          question: 'Q: 你们的收费标准是怎样的？',
          answer: 'A: 我们的设计费根据项目类型和面积而定，通常在200-800元/㎡之间。别墅和商业空间项目单独报价。具体请联系我们的顾问获取免费报价。'
        },
        {
          question: 'Q: 设计周期一般需要多久？',
          answer: 'A: 根据项目大小，通常设计周期15-45天。施工周期住宅类3-6个月，商业空间6-12个月。'
        },
        {
          question: 'Q: 接受外地项目吗？',
          answer: 'A: 当然！我们在全国都有项目经验，并设有杭州分部。外地项目我们提供设计+施工+软装全套服务，全程跟进。'
        },
        {
          question: 'Q: 如何保证施工质量？',
          answer: 'A: 我们采用德国DIN标准施工体系，16道质量检测节点，第三方监理验收，终身质保承诺。'
        }
      ],
      form: {
        nameLabel: '姓名',
        phoneLabel: '电话',
        serviceLabel: '咨询类型',
        messageLabel: '留言',
        submitBtn: '提交咨询',
        namePlaceholder:    '请输入您的姓名',
        phonePlaceholder:   '请输入您的联系电话',
        serviceDefault:     '请选择咨询类型',
        serviceOptions: [
          '电话咨询',
          '方案报价',
          '预约参观',
          '商务合作',
          '其他咨询'
        ],
        messagePlaceholder: '请简单描述您的需求（项目类型、面积、预算范围等）'
      }
    }
  },

  // ══════════════════════════════════════════════════════════════════════════
  en: {
    nav: {
      home:      'Home',
      about:     'About Us',
      whyUs:     'Why Us',
      portfolio: 'Portfolio',
      contact:   'Contact'
    },

    hero: {
      slogan: 'Design Your Heart\'s Desire'
    },

    about: {
      titleZh: 'About Heart Studio',
      textCn: '居心空间创立于2017年，是一家专注于高端住宅与商业空间设计的先锋设计事务所。我们以\u201c居心所向，空间所往\u201d为核心理念，将东方美学哲学与现代设计语言完美融合，为每一位客户打造超越期待的空间体验。多年来，我们已为超过100,000位客户实现了理想人居梦想，与200+知名品牌建立深度合作关系，作品屡获国际设计大奖，被业界誉为\u201c空间美学的革新者\u201d。',
      textEn: 'Founded in 2017, heart studio is a pioneering design studio specializing in high-end residential and commercial space design. Guided by our philosophy \u201cDesign Your Heart\'s Desire,\u201d we seamlessly blend Eastern aesthetic philosophy with modern design language, creating spatial experiences that exceed expectations for every client. Over the years, we have realized ideal living dreams for over 100,000 clients and established deep partnerships with 200+ renowned brands.'
    },

    advantages: {
      card1: { title: 'Customized Full-Service Design', sub: 'End-to-end service from concept to completion', desc: 'From space planning and hard decoration to soft furnishing, we provide a one-stop full-service design. Our senior design team deeply understands your lifestyle, aesthetic preferences and functional needs, tailoring a unique spatial solution. Every detail is carefully refined to ensure the final result is both beautiful and practical.' },
      card2: { title: 'Global Premium Supply Chain',   sub: 'Curating top-tier materials and brands worldwide', desc: 'We have established strategic partnerships with top global brands from Italy, France, and Scandinavia. Direct procurement eliminates intermediaries, ensuring quality while significantly reducing costs. Every material and piece of furniture is rigorously selected for a perfect unity of quality and aesthetics.' },
      card3: { title: 'International Eco-Standards',   sub: 'Green, eco-friendly, healthy living', desc: 'We strictly select green building materials certified by ISO14001, EU CE, and US GREENGUARD standards. By eliminating harmful substances like formaldehyde and benzene at the source, we create a healthy and safe living environment for seniors, children, pregnant women and other sensitive groups.' },
      card4: { title: 'German Precision Craftsmanship', sub: 'Exacting standards for exceptional quality', desc: 'We have introduced the German DIN construction standard system with 16 quality inspection checkpoints and 128 construction standards. Senior craftsmen with over 10 years of experience personally execute the work, with project managers on-site throughout. Each process must pass third-party quality inspection.' },
      card5: { title: 'Lifetime Concierge Service',    sub: 'Attentive after-service and long-term support', desc: 'An industry-first lifetime concierge service — delivery is only the beginning. Our dedicated customer service team responds 7x24 hours, providing complimentary regular return visits, maintenance guidance, and repair services. We maintain complete client profiles recording every interaction.' }
    },

    cases: [
      { title: 'Shanghai · Yunqi Villa',      desc: '780㎡ Modern Eastern Aesthetics' },
      { title: 'Beijing · Courtyard Club',    desc: '1200㎡ Neo-Chinese Commercial Space' },
      { title: 'Shenzhen · Hillside Residence', desc: '320㎡ Minimalist Private Home' }
    ],

    // index.html - Portfolio section (page4)
    indexPortfolio: {
      title: 'Portfolio',
      subtitle: '2020-2026<br>Selected Works',
      cases: [
        {
          title: 'Modern Minimalist Apartment',
          tags: 'Residential · Modern Minimalist',
          details: 'Shanghai · 120㎡ · 2024',
          award: '🏆 Silver Award, 2024 Italy A\'Design Award'
        },
        {
          title: 'Nordic Style Villa',
          tags: 'Villa · Nordic Style',
          details: 'Hangzhou · 280㎡ · 2024',
          award: '📖 ELLE DECORATION 2024 Most Humanistic Residence'
        },
        {
          title: 'Hillside Villa',
          tags: 'Villa · Modern Mountain',
          details: 'Chengdu · 450㎡ · 2024',
          award: '🏆 Red Dot Design Award 2024'
        }
      ]
    },

    footer: {
      company: 'Heart Studio',
      address: 'Address',
      addressDetail: 'West Bund Art Center, Xuhui District, Shanghai',
      hours: 'Hours',
      hoursDetail: 'Mon-Fri 9:30-18:30',
      contact: 'Contact',
      emailLabel: 'Email:',
      email: 'office@heartstudio.com',
      phoneLabel: 'Phone:',
      phone: '+86 21 1234 5678',
      social: 'Social Media',
      social1: 'Xiaohongshu @Heart Studio',
      social2: 'Weibo @Heart Studio',
      social3: 'Instagram @Heart_Studio',
      copyright: '© 2026 Heart Studio. All rights reserved.'
    },

    aboutPage: {
      heroTitle:    'About Us',
      heroSubtitle: 'ABOUT US',
      storyTitle: 'Our Story',
      storyLead: 'Heart Studio\'s story began in 2017 with a beautiful vision — to let every space tell the story of its inhabitants.',
      storyText1: 'Our founders believed that excellent interior design is not just about spatial planning, but an artistic expression of lifestyle. With our philosophy "Design Your Heart\'s Desire," we perfectly blend thousands of years of Eastern aesthetic wisdom with modern international design language, creating a unique design style.',
      storyText2: 'Over eight years, we have grown from a small design studio into an industry-recognized leader. Serving over 100,000 clients and establishing deep strategic partnerships with 200+ renowned domestic and international brands, our works can be found in major cities across China and overseas.',
      storyText3: 'Our core team consists of 50+ senior designers, bringing together elites from top international design institutions including Politecnico di Milano, Bauhaus, and RISD. With over 10 years of average experience, they possess both profound theoretical foundation and rich practical expertise.',
      storyText4: 'We believe that good design is not just visual beauty, but a profound understanding of lifestyle and ultimate exploration of spatial possibilities. From concept to completion, we strictly control every step to ensure perfect realization of design concepts.',
      stats: {
        stat1: 'Founded',
        stat2: 'Clients Served',
        stat3: 'Brand Partnerships',
        stat4: 'International Awards'
      },
      philosophyTitle: 'Design Philosophy',
      philosophyIntro: 'Three core design principles guiding every work we create',
      philosophy: [
        { title: 'Less is More', desc: 'Remove complexity, keep essence, create maximum spatial value with minimum elements' },
        { title: 'Practical & Aesthetic', desc: 'Balance function and form — design that is both beautiful and practical, meeting real-life needs' },
        { title: 'User-Centered Design', desc: 'Deeply understand user lifestyles and needs, crafting bespoke spatial solutions' }
      ],
      tagline: 'Design Your Heart\'s Desire',
      ctaTitle: 'Ready to start your spatial journey?',
      ctaSubtitle: 'Let\'s transform your ideal space into reality together',
      ctaPrimary: 'Contact Us',
      ctaSecondary: 'View Portfolio'
    },

    whyUsPage: {
      heroTitle:    'Why Us',
      heroSubtitle: 'WHY CHOOSE US',
      introTitle:   'Why Choose Heart Studio?',
      introText:    'Among many design firms, Heart Studio stands out with its distinctive design philosophy, rigorous quality control, and attentive service system. We don\'t just provide design plans — we are dedicated to creating a living space that truly belongs to you.',
      items: [
        {
          number:  '01',
          title:   'Customized Full-Service Design',
          titleEn: 'Customized Design',
          lead:    'From concept sketches to construction completion, we provide one-on-one dedicated design services throughout, ensuring every detail is perfectly realized.',
          details: 'Our design team has over 10 years of industry experience. We deeply understand client needs and translate your lifestyle vision into a unique spatial language. From initial consultation and scheme design to material selection and construction supervision, we accompany you throughout.',
          list:    ['Dedicated 1-on-1 design consultant', 'Full project management & supervision', '3D renders and VR walkthroughs', 'Flexible design revision process']
        },
        {
          number:  '02',
          title:   'Global Premium Supply Chain',
          titleEn: 'Global Supply Chain',
          lead:    'Partnering with 200+ top global brands, we purchase directly — eliminating intermediaries to bring you the finest materials and furnishings at the best value.',
          details: 'We have long-term partnerships with leading brands from Italy, Germany, and Scandinavia, guaranteeing authenticity at preferential prices. Our specialist procurement team regularly attends international furniture fairs to continuously source the newest and finest products.',
          list:    ['200+ global top-brand partnerships', 'Authenticity guarantee & provenance tracking', 'Professional procurement team oversight', 'Global logistics and installation']
        },
        {
          number:  '03',
          title:   'International Eco-Standards',
          titleEn: 'Eco-Certification',
          lead:    'All materials carry international eco-certifications. We uphold a green design ethos to create healthy, sustainable living environments for you and your family.',
          details: 'We rigorously screen every material to ensure compliance with international environmental standards. Our projects have earned multiple green building certifications, striking the perfect balance between beauty and sustainability.',
          list:    ['All materials eco-certified', 'Low-VOC paints and finishes', 'Energy-efficient design solutions', 'Sustainable materials prioritised']
        },
        {
          number:  '04',
          title:   'German Precision Craftsmanship',
          titleEn: 'German Craftsmanship',
          lead:    'Adopting German engineering processes and management systems, our strict quality control ensures every detail meets the highest standards.',
          details: 'Our construction teams are trained and certified in German craftsmanship techniques and precision project-management methods. A dedicated quality-inspection team tracks every project from structural work to soft furnishings.',
          list:    ['German craftsmanship training certification', 'Triple quality-inspection system', 'Millimetre-precise construction', 'Dual material and workmanship guarantee']
        },
        {
          number:  '05',
          title:   'Lifetime Concierge Service',
          titleEn: 'Lifetime Service',
          lead:    'Project completion is not the end — it\'s where our service begins. Lifetime maintenance ensures your space remains timeless.',
          details: 'We provide a comprehensive after-sales service system including regular on-site checks, seasonal maintenance advice, and 24-hour emergency response. Our concierge team stands ready to keep your space in peak condition at all times.',
          list:    ['Lifetime free consultation', 'Regular revisits and maintenance checks', '24-hour emergency response', 'Dedicated customer service manager']
        }
      ]
    },

    // ── portfolio.html ───────────────────────────────────────────────────────
    portfolioPage: {
      heroTitle:    'Portfolio',
      heroSubtitle: 'PORTFOLIO',
      introTitle: 'Selected Works',
      introSubtitle: '2020-2024 · Featured Projects Showcase',
      sectionTitle: 'Featured Cases',
      // Stack items (top 6 projects)
      stackItems: [
        {
          title: 'Modern Minimalist Apartment',
          subtitle: 'Modern Minimalist Apartment',
          location: 'Shanghai',
          area: '150㎡ · 1614 sqft',
          year: '2024',
          type: 'Residential',
          description: 'Located in the heart of Shanghai\'s Pudong district, this project was commissioned by a successful entrepreneur seeking ultimate minimalist aesthetics. With "Less is More" as the core philosophy, we created a pure space through extensive white space and refined lines. The open-plan living and dining areas flow seamlessly, with lighting design using hidden strips to create rich layered effects. The kitchen features Italian matte white cabinetry with an island forming a multi-functional cooking area. The master suite includes a walk-in closet and ensuite bathroom, predominantly in white and light gray with wood accents. Won Silver Award at 2024 Italy A\'Design Award.'
        },
        {
          title: 'Urban Luxe Residence',
          subtitle: 'Urban Luxe Residence',
          location: 'Beijing',
          area: '110㎡ · 1184 sqft',
          year: '2024',
          type: 'Residential',
          description: 'An urban apartment in Beijing\'s CBD core, owned by a fashion magazine editor. Positioned as "urban luxury," the design incorporates gold and brass elements into a minimalist base to elevate spatial quality. LDK integrated design seamlessly connects living, dining, and kitchen areas. The color palette uses premium gray with Hermès orange accents, expressing urban elite lifestyle attitudes. Custom built-in wardrobes blend perfectly with walls. The bathroom features Italian marble and smart systems for a private luxurious experience.'
        },
        {
          title: 'Nature & Culture Villa',
          subtitle: 'Nature & Culture Villa',
          location: 'Hangzhou',
          area: '380㎡ · 4090 sqft',
          year: '2024',
          type: 'Residential',
          description: 'A detached villa by Hangzhou\'s Xixi Wetland, owned by art-loving returned expats. Based on "unity of heaven and humanity" philosophy, blending natural landscape with modern architecture. The ground floor uses extensive floor-to-ceiling glass, bringing lake and mountain scenery indoors. A 6-meter high living room features a suspended spiral staircase as visual focal point with Danish oak steps. The basement creates a private art gallery and home theater with professional climate control system. Named "2024\'s Most Humanistic Residence" by ELLE DECORATION.'
        },
        {
          title: 'Cozy Aesthetic Home',
          subtitle: 'Cozy Aesthetic Home',
          location: 'Guangzhou',
          area: '95㎡ · 1022 sqft',
          year: '2024',
          type: 'Residential',
          description: 'A cozy home in Tianhe District, Guangzhou, owned by a freelance illustrator. Inspired by Japanese "wabi-sabi" aesthetics, finding beauty in imperfection and warmth in simplicity. Natural materials like wood, linen, and terracotta create an authentic living atmosphere. Open kitchen with island design meets daily cooking needs and serves as an inspirational workspace. The bedroom features a raised platform with tatami and Japanese shoji doors for a Zen resting space. Balcony transformed into a mini garden.'
        },
        {
          title: 'Modern Office Space',
          subtitle: 'Modern Office Space',
          location: 'Shenzhen',
          area: '650㎡ · 6997 sqft',
          year: '2024',
          type: 'Commercial',
          description: 'A modern office space for a Shenzhen design firm accommodating 50+ designers. With "openness and inspiration" as core philosophy, breaking traditional office layouts. The ground floor uses island layouts with each work island equipped with independent discussion areas and whiteboard walls. A 6-meter high reception area uses extensive glass curtain walls with abundant natural light and green walls injecting vitality. The second floor sets up independent design studios and model-making areas with professional drafting tables and 3D printing equipment. Materials include industrial cement floors, black metal frames, and wood desktops.'
        },
        {
          title: 'Art Exhibition Space',
          subtitle: 'Art Exhibition Space',
          location: 'Shanghai',
          area: '420㎡ · 4521 sqft',
          year: '2024',
          type: 'Commercial',
          description: 'An art exhibition space in Shanghai\'s M50 Creative Zone, providing a platform for emerging artists. Old factory renovation preserving industrial heritage like exposed concrete beams and red brick walls. Adopting "old-new symbiosis" strategy, integrating minimalist modern display systems into an industrial base. The main exhibition area uses movable wall systems for flexible layout adjustments. Professional track lighting with 4000K color temperature and CRI>95. Entrance features a coffee bar and art bookstore offering rest and communication space for visitors.'
        }
      ],
      // Featured cases (bottom 3 projects)
      cases: [
        {
          title: 'Modern Minimalist Apartment',
          location: 'Location: Shanghai',
          area: 'Area: 120㎡',
          year: 'Year: 2024',
          description: 'Located in the heart of Shanghai\'s Pudong district, this project was commissioned by a successful entrepreneur seeking ultimate minimalist aesthetics. Guided by the philosophy "Less is More," we created pure beauty through abundant white space and refined lines. This work won the Silver Award at the 2024 Italy A\'Design Award.'
        },
        {
          title: 'Nordic Style Villa',
          location: 'Location: Hangzhou',
          area: 'Area: 280㎡',
          year: 'Year: 2024',
          description: 'Situated by Hangzhou\'s Xixi Wetland, this detached villa belongs to a returned overseas couple. Our design team drew inspiration from Nordic Hygge philosophy, extensively using Danish imported oak and Finnish premium tiles. Named "2024\'s Most Humanistic Residence" by ELLE DECORATION magazine.'
        },
        {
          title: 'Hillside Villa',
          location: 'Location: Chengdu',
          area: 'Area: 450㎡',
          year: 'Year: 2024',
          award: '🏆 Red Dot Design Award 2024',
          description: 'A detached villa on the outskirts of Chengdu, built against the mountain, blending Western Sichuan architectural language with modern minimalist style. The L-shaped layout embraces the mountain view with floor-to-ceiling glass bringing the misty clouds indoors.'
        }
      ],
      modalLabels: {
        location: 'Location',
        area:     'Area',
        year:     'Year',
        type:     'Type',
        close:    'Close'
      }
    },

    contactPage: {
      heroTitle:    'Contact Us',
      heroSubtitle: 'CONTACT US',
      formTitle: 'Online Consultation',
      formSubtitle: 'Please fill in the information below, we will contact you within 24 hours',
      processTitle: 'Service Process',
      faqTitle: 'FAQ',
      processSteps: [
        { title: 'Initial Consultation', desc: 'Free initial consultation<br>Understand project basics and budget range' },
        { title: 'In-Depth Communication', desc: 'Designer on-site measurement<br>Deeply understand client needs and lifestyle' },
        { title: 'Design Proposal', desc: 'Provide 3 design proposals within 15 working days<br>Deepen design after client confirmation' },
        { title: 'Construction', desc: 'Professional construction team on site<br>Designer visits twice weekly' }
      ],
      faqs: [
        {
          question: 'Q: What are your pricing standards?',
          answer: 'A: Our design fees range from 200-800 RMB/㎡ depending on project type and area. Villas and commercial spaces are quoted separately. Please contact our consultant for a free quote.'
        },
        {
          question: 'Q: How long does the design process take?',
          answer: 'A: Depending on project size, the design cycle is typically 15-45 days. Construction takes 3-6 months for residential projects and 6-12 months for commercial spaces.'
        },
        {
          question: 'Q: Do you accept out-of-town projects?',
          answer: 'A: Absolutely! We have project experience nationwide and have a Hangzhou branch. For out-of-town projects, we provide full services including design, construction, and styling with full follow-up.'
        },
        {
          question: 'Q: How do you ensure construction quality?',
          answer: 'A: We adopt the German DIN standard construction system with 16 quality inspection nodes, third-party supervision acceptance, and lifetime warranty commitment.'
        }
      ],
      form: {
        nameLabel: 'Name',
        phoneLabel: 'Phone',
        serviceLabel: 'Consultation Type',
        messageLabel: 'Message',
        submitBtn: 'Submit Inquiry',
        namePlaceholder:    'Enter your name',
        phonePlaceholder:   'Enter your phone number',
        serviceDefault:     'Select consultation type',
        serviceOptions: [
          'Phone Consultation',
          'Request Quote',
          'Schedule Visit',
          'Business Collaboration',
          'Other Inquiry'
        ],
        messagePlaceholder: 'Briefly describe your needs (project type, area, budget range, etc.)'
      }
    }
  } // end en
}; // end i18nTranslations

/**
 * applyLang(lang)
 * The single entry point for all language switching.
 * Call this from any page after the DOM is ready.
 */
function applyLang(lang) {
  if (!i18nTranslations[lang]) lang = 'zh';
  localStorage.setItem('language', lang);

  // Toggle body class for CSS-driven dual-language elements
  if (lang === 'en') {
    document.body.classList.add('lang-en');
  } else {
    document.body.classList.remove('lang-en');
  }

  // Update lang-switch button state
  document.querySelectorAll('.lang-option').forEach(function(el) {
    el.classList.toggle('active', el.dataset.lang === lang);
  });

  const t = i18nTranslations[lang];

  // ── Nav ──────────────────────────────────────────────────────────────────
  var navMap = {
    'index.html':     t.nav.home,
    '#page1':         t.nav.home,
    'about.html':     t.nav.about,
    'why-us.html':    t.nav.whyUs,
    'portfolio.html': t.nav.portfolio,
    'contact.html':   t.nav.contact
  };
  document.querySelectorAll('.nav-menu a').forEach(function(el) {
    var href = el.getAttribute('href');
    if (navMap[href] !== undefined) el.textContent = navMap[href];
  });

  // ── index.html — Hero ─────────────────────────────────────────────────────
  var heroSloganEl = document.querySelector('.hero-slogan h1');
  if (heroSloganEl) heroSloganEl.textContent = t.hero.slogan;

  // ── index.html — About module ─────────────────────────────────────────────
  var aboutTitleCn = document.querySelector('.about-title-cn');
  if (aboutTitleCn) aboutTitleCn.textContent = t.about.titleZh;

  var aboutTextCn = document.querySelector('.about-text-cn');
  if (aboutTextCn) aboutTextCn.textContent = t.about.textCn;

  var aboutTextEn = document.querySelector('.about-text-en');
  if (aboutTextEn) aboutTextEn.textContent = t.about.textEn;

  // ── index.html — Advantages list (data-index 0..4) ───────────────────────
  var cardTitles = ['card1','card2','card3','card4','card5'];
  document.querySelectorAll('.advantage-item').forEach(function(item) {
    var idx = parseInt(item.getAttribute('data-index'), 10);
    var key = cardTitles[idx];
    if (!key || !t.advantages[key]) return;
    var cnEl = item.querySelector('.advantage-title-cn');
    var enEl = item.querySelector('.advantage-title-en');
    if (cnEl) cnEl.textContent = t.advantages[key].title;
    if (enEl) enEl.textContent = t.advantages[key].sub;
  });

  // ── index.html — Description panel ───────────────────────────────────────
  var descTitle = document.querySelector('.description-title');
  var descText  = document.querySelector('.description-text');
  if (descTitle) descTitle.textContent = t.advantages.card1.title;
  if (descText)  descText.textContent  = t.advantages.card1.sub;

  // ── index.html — Stacked cases ────────────────────────────────────────────
  document.querySelectorAll('.stacked-case-item').forEach(function(el, i) {
    if (!t.cases[i]) return;
    var titleEl = el.querySelector('.case-title');
    var descEl  = el.querySelector('.case-desc');
    if (titleEl) titleEl.textContent = t.cases[i].title;
    if (descEl)  descEl.textContent  = t.cases[i].desc;
  });

  // ── index.html — Portfolio section (page4) ────────────────────────────────
  _setText('.index-portfolio-title', t.indexPortfolio.title);
  var portfolioSubtitle = document.querySelector('.index-portfolio-subtitle');
  if (portfolioSubtitle) portfolioSubtitle.innerHTML = t.indexPortfolio.subtitle;
  document.querySelectorAll('.portfolio-case-compact').forEach(function(el, i) {
    if (!t.indexPortfolio.cases[i]) return;
    _setIn(el, '.index-case-title', t.indexPortfolio.cases[i].title);
    _setIn(el, '.index-case-tags', t.indexPortfolio.cases[i].tags);
    _setIn(el, '.index-case-details', t.indexPortfolio.cases[i].details);
    _setIn(el, '.case-award', t.indexPortfolio.cases[i].award);
  });

  // ── index.html — Footer ───────────────────────────────────────────────────
  _setText('.footer-company', t.footer.company);
  _setText('.address', t.footer.address);
  _setText('.address-detail', t.footer.addressDetail);
  _setText('.hours', t.footer.hours);
  _setText('.hours-detail', t.footer.hoursDetail);
  _setText('.footer-contact', t.footer.contact);
  document.querySelectorAll('.footer-email-label').forEach(function(el) { el.textContent = t.footer.emailLabel; });
  document.querySelectorAll('.footer-email-value').forEach(function(el) { el.textContent = t.footer.email; });
  document.querySelectorAll('.footer-phone-label').forEach(function(el) { el.textContent = t.footer.phoneLabel; });
  document.querySelectorAll('.footer-phone-value').forEach(function(el) { el.textContent = t.footer.phone; });
  _setText('.footer-social', t.footer.social);
  _setText('.footer-social-1', t.footer.social1);
  _setText('.footer-social-2', t.footer.social2);
  _setText('.footer-social-3', t.footer.social3);
  _setText('.footer-copyright', t.footer.copyright);

  // ── about.html ────────────────────────────────────────────────────────────
  if (document.body.classList.contains('page-about')) {
    var ap = t.aboutPage;
    if (ap) {
      _setText('.page-hero .hero-title',    ap.heroTitle);
      _setText('.page-hero .hero-subtitle', ap.heroSubtitle);
      // Story section
      _setText('.story-title', ap.storyTitle);
      _setText('.story-lead', ap.storyLead);
      _setText('.section-text-1', ap.storyText1);
      _setText('.section-text-2', ap.storyText2);
      _setText('.section-text-3', ap.storyText3);
      _setText('.section-text-4', ap.storyText4);
      // Stats
      _setText('.stat-label-1', ap.stats.stat1);
      _setText('.stat-label-2', ap.stats.stat2);
      _setText('.stat-label-3', ap.stats.stat3);
      _setText('.stat-label-4', ap.stats.stat4);
      // Philosophy
      _setText('.section-title-2', ap.philosophyTitle);
      _setText('.section-intro-text', ap.philosophyIntro);
      document.querySelectorAll('.philosophy-card').forEach(function(card, i) {
        if (!ap.philosophy[i]) return;
        var tEl = card.querySelector('.philosophy-title');
        var dEl = card.querySelector('.philosophy-detail');
        if (tEl) tEl.textContent = ap.philosophy[i].title;
        if (dEl) dEl.textContent = ap.philosophy[i].desc;
      });
      // Tagline & CTA
      _setText('.section-tagline', ap.tagline);
      _setText('.section-cta-title', ap.ctaTitle);
      _setText('.section-cta-subtitle', ap.ctaSubtitle);
      _setText('.section-cta-primary', ap.ctaPrimary);
      _setText('.section-cta-secondary', ap.ctaSecondary);
    }
  }

  // ── why-us.html ───────────────────────────────────────────────────────────
  if (document.body.classList.contains('page-why-us')) {
    var wp = t.whyUsPage;
    if (wp) {
      _setText('.page-hero .hero-title',    wp.heroTitle);
      _setText('.page-hero .hero-subtitle', wp.heroSubtitle);
      _setText('.intro-title', wp.introTitle);
      _setText('.intro-text',  wp.introText);
      document.querySelectorAll('.advantage-showcase').forEach(function(el, i) {
        var item = wp.items[i];
        if (!item) return;
        _setIn(el, '.advantage-title',    item.title);
        _setIn(el, '.advantage-title-en', item.titleEn);
        _setIn(el, '.advantage-lead',     item.lead);
        _setIn(el, '.advantage-details',  item.details);
        var listEl = el.querySelector('.advantage-list');
        if (listEl && item.list) {
          listEl.innerHTML = item.list.map(function(s) {
            return '<li>' + s + '</li>';
          }).join('');
        }
      });
    }
  }

  // ── portfolio.html ────────────────────────────────────────────────────────
  if (document.body.classList.contains('page-portfolio')) {
    var pp = t.portfolioPage;
    if (pp) {
      _setText('.page-hero .hero-title',    pp.heroTitle);
      _setText('.page-hero .hero-subtitle', pp.heroSubtitle);
      // Update intro section
      _setText('.portfolio-intro-title', pp.introTitle);
      _setText('.portfolio-intro-subtitle', pp.introSubtitle);
      // Update section title
      _setText('.portfolio-section-title', pp.sectionTitle);
      // Update modal labels
      _setText('.modal-label-location', pp.modalLabels.location);
      _setText('.modal-label-area', pp.modalLabels.area);
      _setText('.modal-label-year', pp.modalLabels.year);
      _setText('.modal-label-type', pp.modalLabels.type);
      // Update featured cases
      document.querySelectorAll('.portfolio-case').forEach(function(el, i) {
        if (!pp.cases[i]) return;
        _setIn(el, '.case-title', pp.cases[i].title);
        _setIn(el, '.case-location', pp.cases[i].location);
        _setIn(el, '.case-area', pp.cases[i].area);
        _setIn(el, '.case-year', pp.cases[i].year);
        _setIn(el, '.case-description', pp.cases[i].description);
        if (pp.cases[i].award) {
          var awardEl = el.querySelector('.case-award');
          if (awardEl) awardEl.textContent = pp.cases[i].award;
        }
      });
    }
  }

  // ── contact.html ──────────────────────────────────────────────────────────
  if (document.body.classList.contains('page-contact')) {
    var cp = t.contactPage;
    if (cp) {
      _setText('.page-hero .hero-title',    cp.heroTitle);
      _setText('.page-hero .hero-subtitle', cp.heroSubtitle);
      // Update section titles
      _setText('.contact-process-title', cp.processTitle);
      _setText('.contact-faq-title', cp.faqTitle);
      // Update form title and labels
      _setText('.contact-form-title', cp.formTitle);
      _setText('.form-subtitle', cp.formSubtitle);
      _setText('.label-name', cp.form.nameLabel);
      _setText('.label-phone', cp.form.phoneLabel);
      _setText('.label-service', cp.form.serviceLabel);
      _setText('.label-message', cp.form.messageLabel);
      // Update form
      var f = cp.form;
      _setAttr('input[name="name"]',      'placeholder', f.namePlaceholder);
      _setAttr('input[name="phone"]',     'placeholder', f.phonePlaceholder);
      _setAttr('textarea[name="message"]','placeholder', f.messagePlaceholder);
      _setText('.submit-btn', f.submitBtn);
      var sel = document.querySelector('select[name="service"]');
      if (sel) {
        sel.innerHTML = '<option value="">' + f.serviceDefault + '</option>' +
          f.serviceOptions.map(function(s, i) {
            return '<option value="' + i + '">' + s + '</option>';
          }).join('');
      }
      // Update process steps
      document.querySelectorAll('.process-step').forEach(function(el, i) {
        if (!cp.processSteps[i]) return;
        _setIn(el, '.step-title', cp.processSteps[i].title);
        _setIn(el, '.step-desc', cp.processSteps[i].desc);
      });
      // Update FAQ
      document.querySelectorAll('.faq-item').forEach(function(el, i) {
        if (!cp.faqs[i]) return;
        _setIn(el, '.faq-question', cp.faqs[i].question);
        _setIn(el, '.faq-answer', cp.faqs[i].answer);
      });
    }
  }
}

// ── Helpers ───────────────────────────────────────────────────────────────
function _setText(selector, text) {
  if (!text) return;
  document.querySelectorAll(selector).forEach(function(el) {
    el.textContent = text;
  });
}
function _setIn(parent, selector, text) {
  if (!text) return;
  var el = parent.querySelector(selector);
  if (el) el.textContent = text;
}
function _setAttr(selector, attr, value) {
  if (!value) return;
  document.querySelectorAll(selector).forEach(function(el) {
    el.setAttribute(attr, value);
  });
}

/**
 * initLang()
 * Call once on DOMContentLoaded on every page.
 * Reads saved language preference and applies it.
 */
function initLang() {
  var lang = localStorage.getItem('language') || 'zh';
  applyLang(lang);
}