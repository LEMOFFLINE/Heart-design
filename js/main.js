// ==================== Language Data ====================
const translations = {
    zh: {
        nav: {
            home: '首页',
            about: '关于我们',
            why: '我们的优势',
            cases: '作品集',
            contact: '联系我们'
        },
        tooltips: {
            home: '首页',
            about: '关于我们',
            why: '我们的优势',
            cases: '作品集',
            contact: '联系我们'
        },
        hero: {
            slogan: '居心所向 · 空间所往'
        },
        module1: {
            since: '成立于',
            year: '2017',
            partners: '200+',
            partnersLabel: '合作伙伴',
            customers: '100000+',
            customersLabel: '服务客户',
            aboutTitle: '关于居心空间',
            aboutTitleEn: 'ABOUT HEART DESIGN',
            aboutDesc: '居心空间创立于2017年，是一家专注于高端住宅与商业空间设计的先锋设计事务所。我们以"居心所向，空间所往"为核心理念，将东方美学哲学与现代设计语言完美融合，为每一位客户打造超越期待的空间体验。多年来，我们已为超过100,000位客户实现了理想人居梦想，与200+知名品牌建立深度合作关系，作品屡获国际设计大奖，被业界誉为"空间美学的革新者"。',
            aboutDescEn: 'Founded in 2017, heart design is a pioneering design studio specializing in high-end residential and commercial space design. Guided by our philosophy "Design Your Heart\'s Desire," we seamlessly blend Eastern aesthetic philosophy with modern design language, creating spatial experiences that exceed expectations for every client. Over the years, we have realized ideal living dreams for over 100,000 clients and established deep partnerships with 200+ renowned brands. Our works have won numerous international design awards, earning us the reputation of "Innovators of Spatial Aesthetics" in the industry.',
            tagline: '技术创新 · 理论研究并重',
            taglineEn: 'Innovation And Theoretical Research',
            learnMore: '了解更多 →'
        },
        module2: {
            title: '我们的优势',
            subtitle: 'WHY CHOOSE US',
            cards: [
                {
                    title: '定制化全案设计',
                    titleEn: 'Customized Full-Service Design',
                    desc: '从空间规划、硬装设计到软装搭配，提供一站式全案设计服务。资深设计师团队深入了解客户的生活方式、审美偏好与功能需求，量身定制独一无二的空间解决方案。每一个细节都经过反复推敲，确保最终呈现既美观实用又彰显个性品味。'
                },
                {
                    title: '全球顶级供应链',
                    titleEn: 'Global Premium Supply Chain',
                    desc: '与意大利、德国、丹麦、芬兰等国家的顶尖品牌建立深度合作关系。直接从欧洲原厂采购进口家具、石材、瓷砖、灯具等高端材料，确保每一件产品都经过严格的质量认证。不仅有价格优势，更保证100%正品，让客户享受国际一流的品质。'
                },
                {
                    title: '国际环保标准',
                    titleEn: 'International Eco-Standards',
                    desc: '坚持使用符合国际环保标准的绿色建材，所有材料均通过ISO14001环境管理体系认证、欧盟CE认证、美国GREENGUARD认证。从源头杜绝甲醛、苯等有害物质，为老人、儿童、孕妇等敏感人群打造健康安全的居住环境。客户的健康是我们最高的承诺。'
                },
                {
                    title: '德系精工工艺',
                    titleEn: 'German Precision Craftsmanship',
                    desc: '引入德国DIN标准施工体系，建立16道质量检测节点、128项施工标准。由拥有10年以上经验的高级工匠亲自施工，项目经理全程驻场监督，每道工序必须通过第三方质检验收。正是这种近乎苛刻的工匠精神，确保了每一个项目都达到艺术品级别的交付标准。'
                },
                {
                    title: '终身管家服务',
                    titleEn: 'Lifetime Concierge Service',
                    desc: '行业首创终身管家服务，交付只是服务的开始。专属客服团队7×24小时在线响应，提供免费的定期回访、保养指导、维修服务。建立完整的客户档案，记录每一次沟通与服务。不仅是客户的设计师，更是值得信赖的生活伙伴，用心守护每一个家的幸福。'
                }
            ]
        },
        module3: {
            title: '作品集',
            titleEn: 'PORTFOLIO',
            subtitle: '精选作品',
            subtitleEn: 'Selected Works',
            cases: [
                {
                    number: 'NO.01',
                    title: '现代简约公寓',
                    titleEn: 'Modern Minimalist Apartment',
                    tag1: '住宅',
                    tag2: '现代简约',
                    location: '上海',
                    locationEn: 'Shanghai',
                    area: '120㎡',
                    areaEn: '1291 sqft',
                    year: '2024',
                    description: '此项目位于上海浦东核心地段，业主为一位成功的企业家，追求极致的简约美学。我们以"少即是多"为设计哲学，通过大量留白与精致的线条勾勒出空间的纯粹之美。空间中运用意大利进口石材、定制木作与高端金属元素，每一处细节都经过精心雕琢。智能家居系统的融入让科技与艺术完美交融，创造出既具视觉冲击力又充满人文温度的现代居所。该作品荣获2024年意大利A\'Design Award银奖。'
                },
                {
                    number: 'NO.02',
                    title: '北欧风格别墅',
                    titleEn: 'Nordic Style Villa',
                    tag1: '别墅',
                    tag2: '北欧风格',
                    location: '杭州',
                    locationEn: 'Hangzhou',
                    area: '280㎡',
                    areaEn: '3014 sqft',
                    year: '2024',
                    description: '坐落于杭州西溪湿地畔的独栋别墅，业主是一对海归夫妇，向往回归自然的生活方式。设计团队以北欧Hygge（舒适惬意）生活哲学为灵感，大量运用丹麦进口橡木、芬兰顶级瓷砖与瑞典设计师家具。开放式LDK布局让光线自由穿梭，超大落地窗将湿地美景引入室内。特别设计的壁炉区成为家庭聚会的温暖中心，地暖系统与新风系统的结合确保全年舒适如春。该项目被《ELLE DECORATION》杂志评为"2024年度最具人文关怀住宅"。'
                }
            ]
        },
        footer: {
            company: '居心空间',
            address: '上海市徐汇区西岸艺术中心',
            hours: '周一至周五 9:30-18:30',
            email: 'hello@juxin-space.com',
            phone: '+86 21 1234 5678',
            copyright: '© 2025 居心空间 heart design. All rights reserved.'
        }
    },
    en: {
        nav: {
            home: 'Home',
            about: 'About Us',
            why: 'Why Us',
            cases: 'Portfolio',
            contact: 'Contact Us'
        },
        tooltips: {
            home: 'Home',
            about: 'About Us',
            why: 'Why Us',
            cases: 'Portfolio',
            contact: 'Contact Us'
        },
        hero: {
            slogan: 'Design Your Heart\'s Desire'
        },
        module1: {
            since: 'Since',
            year: '2017',
            partners: '200+',
            partnersLabel: 'Partners',
            customers: '100000+',
            customersLabel: 'Customers Served',
            aboutTitle: 'About heart design',
            aboutTitleEn: 'ABOUT HEART DESIGN',
            aboutDesc: 'heart design is a high-end interior design studio dedicated to creating minimalist, elegant, and harmonious living spaces. We believe every space has a soul, and our mission is to discover and awaken it.',
            aboutDescEn: 'Founded in 2017, heart design is a pioneering design studio specializing in high-end residential and commercial space design. Guided by our philosophy "Design Your Heart\'s Desire," we seamlessly blend Eastern aesthetic philosophy with modern design language, creating spatial experiences that exceed expectations for every client. Over the years, we have realized ideal living dreams for over 100,000 clients and established deep partnerships with 200+ renowned brands. Our works have won numerous international design awards, earning us the reputation of "Innovators of Spatial Aesthetics" in the industry.',
            tagline: 'Innovation And Theoretical Research',
            taglineEn: 'Innovation And Theoretical Research',
            learnMore: 'Learn More →'
        },
        module2: {
            title: 'Why Choose Us',
            subtitle: 'WHY CHOOSE US',
            cards: [
                {
                    title: 'Customized Full-Service Design',
                    titleEn: 'Customized Full-Service Design',
                    desc: 'From spatial planning and hard furnishings to soft decoration, we provide comprehensive one-stop design services. Our senior design team deeply understands clients\' lifestyles, aesthetic preferences, and functional needs to create bespoke spatial solutions. Every detail is carefully considered to ensure the final result is both beautiful and practical while reflecting personal taste.'
                },
                {
                    title: 'Global Premium Supply Chain',
                    titleEn: 'Global Premium Supply Chain',
                    desc: 'Deep partnerships with top brands from Italy, Germany, Denmark, Finland, and more. Direct procurement from European original factories for high-end furniture, stone, tiles, lighting, and other premium materials. Each product undergoes strict quality certification. Not only do we offer price advantages, but we also guarantee 100% authentic products, delivering world-class quality to our clients.'
                },
                {
                    title: 'International Eco-Standards',
                    titleEn: 'International Eco-Standards',
                    desc: 'We insist on using green building materials that meet international environmental standards. All materials pass ISO14001 environmental management system certification, EU CE certification, and US GREENGUARD certification. Eliminating formaldehyde, benzene, and other harmful substances from the source, creating a healthy and safe living environment for sensitive groups including the elderly, children, and pregnant women. Our clients\' health is our highest commitment.'
                },
                {
                    title: 'German Precision Craftsmanship',
                    titleEn: 'German Precision Craftsmanship',
                    desc: 'Introduced German DIN standard construction system with 16 quality inspection nodes and 128 construction standards. Senior craftsmen with over 10 years of experience personally execute the work, with project managers on-site throughout the process. Each process must pass third-party quality inspection. It is this almost obsessive craftsmanship that ensures every project achieves artwork-level delivery standards.'
                },
                {
                    title: 'Lifetime Concierge Service',
                    titleEn: 'Lifetime Concierge Service',
                    desc: 'Industry-first lifetime concierge service—delivery is only the beginning of our service. Exclusive customer service team available 7×24 hours for response, providing complimentary regular return visits, maintenance guidance, and repair services. We maintain complete client profiles, documenting every communication and service. Not just your designer, but a trusted life partner, dedicated to guarding the happiness of every home we create.'
                }
            ]
        },
        module3: {
            title: 'Portfolio',
            titleEn: 'PORTFOLIO',
            subtitle: 'Selected Works',
            subtitleEn: 'Selected Works',
            cases: [
                {
                    number: 'NO.01',
                    title: 'Modern Minimalist Apartment',
                    titleEn: 'Modern Minimalist Apartment',
                    tag1: 'Residential',
                    tag2: 'Minimalist',
                    location: 'Shanghai',
                    locationEn: 'Shanghai',
                    area: '120㎡',
                    areaEn: '1291 sqft',
                    year: '2024',
                    description: 'Located in the heart of Shanghai\'s Pudong district, this project was commissioned by a successful entrepreneur seeking ultimate minimalist aesthetics. Guided by the philosophy "Less is More," we created pure beauty through abundant white space and refined lines. The space features imported Italian stone, custom woodwork, and premium metal elements—every detail meticulously crafted. The integration of smart home technology perfectly fuses technology with art, creating a modern residence that is both visually striking and warmly human. This work won the Silver Award at the 2024 Italy A\'Design Award.'
                },
                {
                    number: 'NO.02',
                    title: 'Nordic Style Villa',
                    titleEn: 'Nordic Style Villa',
                    tag1: 'Villa',
                    tag2: 'Nordic',
                    location: 'Hangzhou',
                    locationEn: 'Hangzhou',
                    area: '280㎡',
                    areaEn: '3014 sqft',
                    year: '2024',
                    description: 'Situated by Hangzhou\'s Xixi Wetland, this detached villa belongs to a returned overseas couple longing for a lifestyle close to nature. Our design team drew inspiration from Nordic Hygge (cozy) philosophy, extensively using Danish imported oak, Finnish premium tiles, and Swedish designer furniture. The open-plan LDK layout allows light to flow freely, while floor-to-ceiling windows bring the wetland beauty indoors. The specially designed fireplace area becomes a warm center for family gatherings. The combination of floor heating and fresh air systems ensures year-round comfort. Named "2024\'s Most Humanistic Residence" by ELLE DECORATION magazine.'
                }
            ]
        },
        footer: {
            company: 'heart design',
            address: 'West Bund Art Center, Xuhui District, Shanghai',
            hours: 'Mon-Fri 9:30-18:30',
            email: 'hello@juxin-space.com',
            phone: '+86 21 1234 5678',
            copyright: '© 2025 居心空间 heart design. All rights reserved.'
        }
    }
};

// ==================== Global State ====================
let currentLang = 'zh';
let currentSlide = 0;
const totalSlides = 3;

// ==================== DOM Elements ====================
const langBtn = document.querySelector('.lang-btn');
const langOptions = document.querySelectorAll('.lang-option');

// ==================== Language Switch ====================
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    updateContent();
    updateLangButton();
}

function updateLangButton() {
    langOptions.forEach(option => {
        option.classList.remove('active');
        if (option.dataset.lang === currentLang) {
            option.classList.add('active');
        }
    });

    const langText = currentLang === 'zh' ? '中文' : 'English';
    langBtn.innerHTML = `<span>${langText}</span><svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}

function updateContent() {
    const t = translations[currentLang];

    // Navigation - update by href
    const navLinks = document.querySelectorAll('.nav-menu a');
    if (navLinks[0]) navLinks[0].textContent = t.nav.home;
    if (navLinks[1]) navLinks[1].textContent = t.nav.about;
    if (navLinks[2]) navLinks[2].textContent = t.nav.why;
    if (navLinks[3]) navLinks[3].textContent = t.nav.cases;
    if (navLinks[4]) navLinks[4].textContent = t.nav.contact;

    // Hero Slogan
    document.querySelector('.hero-slogan h1').textContent = t.hero.slogan;

    // Module 1 - About Us Section
    const aboutTitleCn = document.querySelector('.about-title-cn');
    const aboutTitleEn = document.querySelector('.about-title-en');
    const aboutTextCn = document.querySelector('.about-text-cn');
    const aboutTextEn = document.querySelector('.about-text-en');
    const taglineCn = document.querySelector('.tagline-cn');
    const taglineEn = document.querySelector('.tagline-en');

    if (aboutTitleCn) aboutTitleCn.textContent = t.module1.aboutTitle;
    if (aboutTitleEn) aboutTitleEn.textContent = t.module1.aboutTitleEn;
    if (aboutTextCn) aboutTextCn.textContent = t.module1.aboutDesc;
    if (aboutTextEn) aboutTextEn.textContent = t.module1.aboutDescEn;
    if (taglineCn) taglineCn.textContent = t.module1.tagline;
    if (taglineEn) taglineEn.textContent = t.module1.taglineEn;

    // Module 2 - Why Us Advantages
    const whyTitle = document.querySelector('.why-title');
    const whySubtitle = document.querySelector('.why-subtitle');
    if (whyTitle) whyTitle.textContent = t.module2.title;
    if (whySubtitle) whySubtitle.textContent = t.module2.subtitle;

    // Update advantage items
    const advantageItems = document.querySelectorAll('.advantage-item');
    advantageItems.forEach((item, index) => {
        if (t.module2.cards[index]) {
            const titleCn = item.querySelector('.advantage-title-cn');
            const titleEn = item.querySelector('.advantage-title-en');
            if (titleCn) titleCn.textContent = t.module2.cards[index].title;
            if (titleEn) titleEn.textContent = t.module2.cards[index].titleEn;
        }
    });

    // Update description panel for active item
    const activeItem = document.querySelector('.advantage-item.active');
    if (activeItem) {
        const activeIndex = parseInt(activeItem.getAttribute('data-index'));
        const descriptionTitle = document.querySelector('.description-title');
        const descriptionText = document.querySelector('.description-text');
        if (descriptionTitle && t.module2.cards[activeIndex]) {
            descriptionTitle.textContent = currentLang === 'zh'
                ? t.module2.cards[activeIndex].title
                : t.module2.cards[activeIndex].titleEn;
        }
        if (descriptionText && t.module2.cards[activeIndex]) {
            descriptionText.textContent = t.module2.cards[activeIndex].desc;
        }
    }

    // Also update stacked cards if they exist
    const module2Title = document.querySelector('.module-2-title');
    if (module2Title) module2Title.textContent = t.module2.title;

    const cards = document.querySelectorAll('.stacked-card');
    cards.forEach((card, index) => {
        if (t.module2.cards[index]) {
            card.querySelector('.stacked-card-title').textContent = t.module2.cards[index].title;
            card.querySelector('.stacked-card-description').textContent = t.module2.cards[index].desc;
        }
    });

    // Module 3 - Portfolio
    const portfolioTitleCn = document.querySelector('.portfolio-title-cn');
    const portfolioTitleEn = document.querySelector('.portfolio-title-en');
    const portfolioSubtitle = document.querySelector('.portfolio-subtitle');

    if (portfolioTitleCn) portfolioTitleCn.textContent = t.module3.title;
    if (portfolioTitleEn) portfolioTitleEn.textContent = t.module3.titleEn;
    if (portfolioSubtitle) portfolioSubtitle.textContent = `${t.module3.subtitleEn} · ${t.module3.subtitle}`;

    // Update portfolio cases
    const caseNumbers = document.querySelectorAll('.case-number');
    const caseTitles = document.querySelectorAll('.case-title');
    const caseTitlesEn = document.querySelectorAll('.case-title-en');
    const caseTags1 = document.querySelectorAll('.case-tag:first-child');
    const caseTags2 = document.querySelectorAll('.case-tag:last-child');
    const caseLocations = document.querySelectorAll('.case-info p:nth-child(1)');
    const caseAreas = document.querySelectorAll('.case-info p:nth-child(2)');
    const caseYears = document.querySelectorAll('.case-info p:nth-child(3)');
    const caseDescriptions = document.querySelectorAll('.case-description');

    caseNumbers.forEach((el, index) => {
        if (t.module3.cases[index]) {
            el.textContent = t.module3.cases[index].number;
        }
    });

    caseTitles.forEach((el, index) => {
        if (t.module3.cases[index]) {
            el.textContent = t.module3.cases[index].title;
        }
    });

    caseTitlesEn.forEach((el, index) => {
        if (t.module3.cases[index]) {
            el.textContent = t.module3.cases[index].titleEn;
        }
    });

    caseTags1.forEach((el, index) => {
        if (t.module3.cases[index]) {
            el.textContent = t.module3.cases[index].tag1;
        }
    });

    caseTags2.forEach((el, index) => {
        if (t.module3.cases[index]) {
            el.textContent = t.module3.cases[index].tag2;
        }
    });

    caseLocations.forEach((el) => {
        const index = Array.from(caseLocations).indexOf(el);
        if (t.module3.cases[index]) {
            const locationLabel = el.querySelector('.info-label');
            if (locationLabel) locationLabel.textContent = currentLang === 'zh' ? '地点' : 'Location';
            el.innerHTML = `<span class="info-label">${currentLang === 'zh' ? '地点' : 'Location'}</span> ${t.module3.cases[index][currentLang === 'zh' ? 'location' : 'locationEn']}`;
        }
    });

    caseAreas.forEach((el) => {
        const index = Array.from(caseAreas).indexOf(el);
        if (t.module3.cases[index]) {
            const areaLabel = currentLang === 'zh' ? '面积' : 'Area';
            el.innerHTML = `<span class="info-label">${areaLabel}</span> ${currentLang === 'zh' ? t.module3.cases[index].area : t.module3.cases[index].areaEn}`;
        }
    });

    caseYears.forEach((el) => {
        const index = Array.from(caseYears).indexOf(el);
        if (t.module3.cases[index]) {
            const yearLabel = currentLang === 'zh' ? '年份' : 'Year';
            el.innerHTML = `<span class="info-label">${yearLabel}</span> ${t.module3.cases[index].year}`;
        }
    });

    caseDescriptions.forEach((el, index) => {
        if (t.module3.cases[index]) {
            el.textContent = t.module3.cases[index].description;
        }
    });

    // Also update old-style cases grid if exists
    const module3Title = document.querySelector('.module-3-title');
    if (module3Title) module3Title.textContent = t.module3.title;

    const oldCaseItems = document.querySelectorAll('.case-overlay');
    oldCaseItems.forEach((item, index) => {
        if (t.module3.cases[index]) {
            item.querySelector('h3').textContent = t.module3.cases[index].title;
            item.querySelector('p').textContent = `${t.module3.cases[index].location} · ${t.module3.cases[index].area} · ${t.module3.cases[index].year}`;
        }
    });

    // Footer
    document.querySelector('.footer-section.company h4').textContent = t.footer.company;
    document.querySelector('.footer-section.company .address').textContent = t.footer.address;
    document.querySelector('.footer-section.company .hours').textContent = t.footer.hours;
    document.querySelector('.footer-section.contact .email').textContent = t.footer.email;
    document.querySelector('.footer-section.contact .phone').textContent = t.footer.phone;
    document.querySelector('.footer-bottom p').textContent = t.footer.copyright;
}

// ==================== Hero Slider ====================
function showSlide(index) {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function startSlideshow() {
    setInterval(nextSlide, 25000); // 25 seconds interval
}

// ==================== Stacked Cards ====================
function initStackedCards() {
    const cards = document.querySelectorAll('.stacked-card');
    const totalCards = cards.length;

    cards.forEach((card, index) => {
        card.addEventListener('click', function() {
            // Remove active class from all cards
            cards.forEach(c => c.classList.remove('active'));

            // Add active class to clicked card
            this.classList.add('active');

            // Reset all cards to their original positions
            cards.forEach((c, i) => {
                c.style.top = `${i * 30}px`;
                c.style.zIndex = totalCards - i;
            });

            // Move clicked card to top
            cards.forEach((c, i) => {
                if (c === this) {
                    c.style.top = '0';
                    c.style.zIndex = '100';
                }
            });
        });
    });
}

// ==================== Why Us Advantages ====================
function initWhyUsAdvantages() {
    const advantageItems = document.querySelectorAll('.advantage-item');
    const bgImage = document.getElementById('why-bg-image');
    const descriptionTitle = document.querySelector('.description-title');
    const descriptionText = document.querySelector('.description-text');

    advantageItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            advantageItems.forEach(i => i.classList.remove('active'));

            // Add active class to clicked item
            this.classList.add('active');

            // Get data attributes
            const imageSrc = this.getAttribute('data-image');
            const titleCn = this.getAttribute('data-title-cn');
            const titleEn = this.getAttribute('data-title-en');
            const descCn = this.getAttribute('data-desc-cn');
            const descEn = this.getAttribute('data-desc-en');

            // Get the content from the advantage item
            const advantageTitleCn = this.querySelector('.advantage-title-cn').textContent;
            const advantageTitleEn = this.querySelector('.advantage-title-en').textContent;

            // Update background image with fade effect
            bgImage.style.opacity = '0';
            setTimeout(() => {
                bgImage.src = imageSrc;
                bgImage.style.opacity = '1';
            }, 300);

            // Update description
            const lang = currentLang;
            if (lang === 'zh') {
                descriptionTitle.textContent = advantageTitleCn;
                // Find the corresponding description from translations
                const index = parseInt(this.getAttribute('data-index'));
                descriptionText.textContent = translations[lang].module2.cards[index].desc;
            } else {
                descriptionTitle.textContent = advantageTitleEn;
                const index = parseInt(this.getAttribute('data-index'));
                descriptionText.textContent = translations[lang].module2.cards[index].desc;
            }
        });
    });
}

// ==================== Initialize FullPage ====================
function initFullPage() {
    $('#fullpage').fullpage({
        // Navigation
        menu: '.side-nav',
        lockAnchors: false,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['首页', '关于我们', '我们的优势', '作品集', '联系我们'],
        showActiveTooltip: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        // Scrollbar
        scrollBar: false,
        hybrid: false,

        // Design
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 500,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',

        // Events
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: null,
        scrollOverflow: false,
        scrollOverflowReset: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        // Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        // Design mode
        controlArrows: true,
        controlArrowColor: '#fff',
        verticalCentered: true,
        sectionsColor: [],
        paddingTop: 0,
        paddingBottom: 0,
        fixedElements: '.header',
        responsive: 768,
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,

        // Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        // Events - fullPage.js 2.x API
        afterLoad: function(anchorLink, index) {
            // Add active class to section for animations
            const section = $('.section').eq(index - 1);
            section.addClass('active');

            // Update header navigation active state
            $('.nav-menu a').removeClass('active');
            const activeSectionMap = {
                1: 0, // Hero -> Home
                2: 1, // About -> About
                3: 2, // Why Us -> Why
                4: 3, // Portfolio -> Portfolio
                5: 4  // Footer -> Contact
            };
            const activeNavIndex = activeSectionMap[index];
            if (activeNavIndex !== undefined) {
                $('.nav-menu a').eq(activeNavIndex).addClass('active');
            }
        },
        onLeave: function(index, nextIndex, direction) {
            // Remove active class from leaving section
            const section = $('.section').eq(index - 1);
            section.removeClass('active');
        }
    });
}

// ==================== Initialize ====================
$(document).ready(function() {
    // Hide loading animation
    setTimeout(function() {
        $('.loading-box').addClass('hidden');
        setTimeout(function() {
            $('.loading-box').hide();
        }, 500);
    }, 1000);

    // Initialize language from localStorage or default to 'zh'
    const savedLang = localStorage.getItem('language') || 'zh';
    setLanguage(savedLang);

    // Language switch event listeners
    langOptions.forEach(option => {
        option.addEventListener('click', function() {
            setLanguage(this.dataset.lang);
        });
    });

    // Initialize Hero Slider
    showSlide(0);
    startSlideshow();

    // Hero dots click handlers
    const dots = document.querySelectorAll('.hero-dot');
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            showSlide(index);
        });
    });

    // Initialize Stacked Cards
    initStackedCards();

    // Initialize Why Us Advantages
    initWhyUsAdvantages();

    // Initialize FullPage
    initFullPage();
});
