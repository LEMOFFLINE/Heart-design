// ==================== Portfolio Project Data ====================
const portfolioProjects = {
    1: {
        title: '现代简约公寓',
        subtitle: 'Modern Minimalist Apartment',
        image: 'public/Collection/ali-moradi-qNic6LXHw-w-unsplash.jpg',
        location: '上海 · Shanghai',
        area: '150㎡ · 1614 sqft',
        year: '2024',
        type: '住宅空间',
        description: `此项目位于上海浦东核心地段，为追求极致简约美学的业主量身打造。整体以"少即是多"为核心理念，通过大面积留白与精致线条勾勒纯粹空间。开放式客厅与餐厅贯通，无主灯设计配合隐藏式灯带，营造层次丰富的光影效果。厨房采用意大利进口哑光白橱柜，搭配中岛台形成多功能料理区。主卧套房配置步入式衣帽间与独立卫浴，色调以白色、浅灰为主，局部点缀原木色。该作品荣获2024年意大利A'Design Award银奖。`
    },
    2: {
        title: '都市轻奢住宅',
        subtitle: 'Urban Luxe Residence',
        image: 'public/Collection/mahmoud-azmy-8ccOqbNdp1A-unsplash.jpg',
        location: '北京 · Beijing',
        area: '110㎡ · 1184 sqft',
        year: '2024',
        type: '住宅空间',
        description: `北京CBD核心区域的都市公寓，业主为时尚杂志主编。设计定位为"都市轻奢"，在简约基调上融入金色与黄铜元素，提升空间质感。采用LDK一体化设计，客厅、餐厅、厨房无缝连接。色彩以高级灰为底，搭配爱马仕橙软装配饰，展现都市精英生活态度。定制衣柜采用嵌入式设计，与墙面完美融合。卫浴空间选用意大利大理石与智能系统，打造私密奢华体验。`
    },
    3: {
        title: '山水人文别墅',
        subtitle: 'Nature & Culture Villa',
        image: 'public/Collection/roberto-nickson-emqnSQwQQDo-unsplash.jpg',
        location: '杭州 · Hangzhou',
        area: '380㎡ · 4090 sqft',
        year: '2024',
        type: '住宅空间',
        description: `杭州西溪湿地畔的独栋别墅，业主为热爱艺术的海归夫妇。以"天人合一"为哲学基础，将自然景观与现代建筑融合。一层采用大面积落地玻璃，将湖光山色引入室内。6米挑高客厅，悬挂式旋转楼梯成为视觉焦点，采用丹麦进口橡木踏步。地下室打造私人艺术画廊与家庭影院，配备专业恒温恒湿系统。该项目被《ELLE DECORATION》评为"2024年度最具人文关怀住宅"。`
    },
    4: {
        title: '现代办公空间',
        subtitle: 'Modern Office Space',
        image: 'public/Collection/office.jpg',
        location: '深圳 · Shenzhen',
        area: '650㎡ · 6997 sqft',
        year: '2024',
        type: '商业空间',
        description: `为深圳某设计事务所打造的现代化办公空间，容纳50+设计师团队。以"开放与灵感"为核心理念，打破传统办公格局。一层采用岛式布局，每个工作岛配备独立讨论区与白板墙。6米挑高接待区使用大面积玻璃幕墙，自然光线充足，绿植墙注入生机。二层设置独立设计室与模型制作区，配备专业绘图桌与3D打印设备。材料选用工业风水泥地面、黑色金属框架与原木桌面。`
    },
    5: {
        title: '艺术展示空间',
        subtitle: 'Art Exhibition Space',
        image: 'public/Collection/gallery.jpg',
        location: '上海 · Shanghai',
        area: '420㎡ · 4521 sqft',
        year: '2024',
        type: '商业空间',
        description: `位于上海M50创意园的艺术展示空间，为新兴艺术家提供展示平台。老厂房改造项目，保留裸露的混凝土梁柱与红砖墙等工业遗存。采用"新旧共生"策略，在工业风基底上融入极简现代展示系统。主展区采用可移动展墙系统，根据展览需求灵活调整布局。照明使用专业轨道射灯，色温4000K，显色指数>95。入口设置咖啡吧台与艺术书店，为观众提供休憩交流空间。`
    },
    6: {
        title: '温馨美学居所',
        subtitle: 'Cozy Aesthetic Home',
        image: 'public/Collection/spacejoy-nEtpvJjnPVo-unsplash.jpg',
        location: '广州 · Guangzhou',
        area: '95㎡ · 1022 sqft',
        year: '2024',
        type: '住宅空间',
        description: `广州天河区的温馨小宅，业主为自由插画师。以"日式wabi-sabi"美学为灵感，在不完美中发现美，在朴素中寻找温暖。整体采用原木、亚麻、陶土等自然材质，营造回归本真的居住氛围。开放式厨房与岛台设计，满足日常烹饪需求，也是创作灵感迸发的工作台。卧室采用地台设计，搭配榻榻米与日式障子门，打造禅意休息空间。阳台改造为迷你花园。`
    },
    7: {
        title: '半山云境别墅',
        subtitle: 'Hillside Villa',
        image: 'public/villa.jpg',
        location: '成都 · Chengdu',
        area: '450㎡ · 4844 sqft',
        year: '2024',
        type: '住宅空间',
        description: `成都近郊半山腰的独栋别墅，依山而建，将川西山地建筑语言与现代简约风格融合。建筑以L形布局拥抱山景，大面积落地玻璃将山林云雾引入室内。室内以米色石材、原木与哑光金属为主调，室外设置无边泳池与景观露台，俧瞥成都平原。该项目荣获Red Dot Design Award 2024。`
    }
};

// ==================== Language Data for Pages ====================
const pageTranslations = {
    zh: {
        nav: {
            home: '首页',
            about: '关于我们',
            why: '我们的优势',
            cases: '作品集',
            contact: '联系我们'
        },
        about: {
            title: '关于我们',
            subtitle: 'ABOUT US',
            story: `居心空间创立于2017年，是一家专注于高端住宅与商业空间设计的先锋设计事务所。
                   我们以"居心所向，空间所往"为核心理念，将东方美学哲学与现代设计语言完美融合，
                   为每一位客户打造超越期待的空间体验。

                   多年来，我们已为超过100,000位客户实现了理想人居梦想，与200+知名品牌建立深度合作关系，
                   作品屡获国际设计大奖，被业界誉为"空间美学的革新者"。

                   每一个项目，我们都将其视为一次艺术创作。用心倾听客户的故事，理解他们的生活方式，
                   最终呈现一个既美观又实用的理想空间。从概念设计到最终落地，我们严格把控每一个环节，
                   确保设计理念得到完美呈现。`
        },
        advantages: {
            title: '我们的优势',
            subtitle: 'WHY CHOOSE US',
            items: [
                {
                    number: '01',
                    title: '定制化全案设计',
                    lead: '从空间规划到软装搭配，提供一站式全案设计服务。资深设计师团队深入了解客户的生活方式、审美偏好与功能需求，量身定制独一无二的空间解决方案。',
                    details: '提供3套不同风格设计方案供选择，从平面图到3D效果图全面呈现；家具、灯具、窗帘、配饰一站式服务；设计师每周2次现场巡查跟进，客户满意度达98%，其中80%来自口碑推荐。',
                    list: [
                        '深度访谈2-3小时，全面了解需求',
                        '提供3套不同风格设计方案',
                        '从平面到3D效果图全面呈现',
                        '家具灯具窗帘配饰一站式服务',
                        '设计师每周2次现场跟进'
                    ]
                },
                {
                    number: '02',
                    title: '全球顶级供应链',
                    lead: '与意大利、德国、丹麦、芬兰等国家的顶尖品牌建立深度合作关系。直接从欧洲原厂采购进口家具、石材、瓷砖、灯具等高端材料，确保每一件产品都经过严格的质量认证。',
                    details: '意大利50+品牌直供（Poliform、Minotti等），德国30+品牌授权（Hülsta、Rolf Benz等），所有产品提供原厂授权证书及官方质保5-15年，比市场零售价低20-40%。',
                    list: [
                        '意大利50+品牌直供',
                        '德国30+品牌授权',
                        '丹麦芬兰20+品牌合作',
                        '原厂授权证书',
                        '比零售价低20-40%'
                    ]
                },
                {
                    number: '03',
                    title: '国际环保标准',
                    lead: '坚持使用符合国际环保标准的绿色建材，所有材料均通过ISO14001环境管理体系认证、欧盟CE认证、美国GREENGUARD认证。从源头杜绝甲醛、苯等有害物质，为老人、儿童、孕妇等敏感人群打造健康安全的居住环境。',
                    details: '甲醛含量≤0.03mg/m³（远低于国标0.08mg/m³），零VOC挥发性有机化合物；使用可持续来源的环保材料，施工过程采用无尘工艺保护环境，客户的健康是我们最高的承诺。',
                    list: [
                        'ISO14001认证',
                        '欧盟CE认证',
                        '美国GREENGUARD认证',
                        '甲醛≤0.03mg/m³（优于国标）',
                        '零VOC挥发性化合物'
                    ]
                },
                {
                    number: '04',
                    title: '德系精工工艺',
                    lead: '引入德国DIN标准施工体系，建立16道质量检测节点、128项施工标准。由拥有10年以上经验的高级工匠亲自施工，项目经理全程驻场监督，每道工序必须通过第三方质检验收。',
                    details: '128项施工细节标准严格把控，10年以上经验高级工匠亲自施工；项目经理全程驻场监督，每道工序第三方监理验收签字，正是这种近乎苛刻的工匠精神，确保了每一个项目都达到艺术品级别的交付标准。',
                    list: [
                        '德国DIN标准',
                        '16道质量检测节点',
                        '128项施工标准',
                        '10年以上经验工匠',
                        '第三方监理验收'
                    ]
                },
                {
                    number: '05',
                    title: '终身管家服务',
                    lead: '行业首创终身管家服务，交付只是服务的开始。专属客服团队7×24小时在线响应，提供免费的定期回访、保养指导、维修服务。建立完整的客户档案，记录每一次沟通与服务。',
                    details: '交付后第1年每月电话回访，1-3年每季度上门保养指导，3年以上每半年定期回访；7×24小时紧急维修热线，客户专属APP查看项目档案，我们不仅是客户的设计师，更是值得信赖的生活伙伴。',
                    list: [
                        '第1年：每月回访',
                        '1-3年：季度上门保养',
                        '3年以上：半年回访',
                        '7×24紧急维修热线',
                        '专属客户APP'
                    ]
                }
            ],
            introTitle: '为什么选择居心空间？',
            introText: '从设计到落地，从材料到服务，我们在每一个环节都精益求精。五大核心优势，为您打造超越期待的空间体验。',
            summaryTitle: '选择居心空间，选择品质生活',
            summaryText: '五大优势，从设计到服务，从材料到工艺，每一个环节都超越期待。让我们用专业和热情，为您打造梦想中的空间。',
            ctaConsult: '立即咨询',
            ctaPortfolio: '查看作品'
        },
        portfolio: {
            title: '作品集',
            subtitle: 'PORTFOLIO',
            filters: {
                all: '全部',
                residential: '住宅',
                commercial: '商业',
                award: '获奖作品'
            }
        },
        contact: {
            title: '联系我们',
            subtitle: 'CONTACT US',
            formTitle: '在线咨询',
            formSubtitle: '请填写以下信息，我们会在24小时内与您联系',
            nameLabel: '姓名',
            namePlaceholder: '请输入您的姓名',
            phoneLabel: '电话',
            phonePlaceholder: '请输入您的联系电话',
            serviceLabel: '咨询类型',
            servicePlaceholder: '请选择咨询类型',
            messageLabel: '留言',
            messagePlaceholder: '请简单描述您的需求',
            submitBtn: '提交咨询',
            services: {
                '': '请选择咨询类型',
                'phone': '电话咨询',
                'quote': '方案报价',
                'visit': '预约参观',
                'collaboration': '商务合作',
                'other': '其他咨询'
            }
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
        about: {
            title: 'About Us',
            subtitle: 'ABOUT US',
            story: `Founded in 2017, heart studio is a pioneering design studio specializing in high-end residential and commercial space design.
                   Guided by our philosophy "Design Your Heart's Desire," we seamlessly blend Eastern aesthetic philosophy with modern design language,
                   creating spatial experiences that exceed expectations for every client.

                   Over the years, we have realized ideal living dreams for over 100,000 clients and established deep partnerships with 200+ renowned brands.
                   Our works have won numerous international design awards, earning us the reputation of "Innovators of Spatial Aesthetics" in the industry.

                   Every project is a work of art for us. We listen to our clients' stories, understand their lifestyles,
                   and ultimately present ideal spaces that are both beautiful and practical.
                   From concept to completion, we strictly control every aspect to ensure perfect realization of design concepts.`
        },
        advantages: {
            title: 'Why Choose Us',
            subtitle: 'WHY CHOOSE US',
            items: [
                {
                    number: '01',
                    title: 'Customized Full-Service Design',
                    lead: 'From space planning to soft furnishing, we provide one-stop full-service design. Our senior designers deeply understand your lifestyle, aesthetic preferences and functional needs to craft a unique spatial solution.',
                    details: '3 design proposals in different styles; comprehensive presentation from floor plans to 3D renderings; one-stop service for furniture, lighting, curtains and accessories; designer visits twice weekly; 98% client satisfaction rate with 80% from referrals.',
                    list: [
                        '2-3 hours in-depth interview',
                        '3 different design proposals',
                        'From floor plans to 3D renderings',
                        'One-stop service: furniture, lighting, curtains',
                        'Designer visits twice weekly'
                    ]
                },
                {
                    number: '02',
                    title: 'Global Premium Supply Chain',
                    lead: 'We have established deep partnerships with leading brands from Italy, Germany, Denmark, Finland and more. Sourced directly from European factories — furniture, stone, tiles, lighting — every product is strictly quality certified.',
                    details: '50+ Italian brands direct supply (Poliform, Minotti etc.), 30+ German brands authorized (Hülsta, Rolf Benz etc.); all products come with original factory certificates and 5–15 year official warranty; 20–40% below retail price.',
                    list: [
                        '50+ Italian brands direct supply',
                        '30+ German brands authorized',
                        '20+ Danish & Finnish brands',
                        'Original factory authorization',
                        '20-40% below retail price'
                    ]
                },
                {
                    number: '03',
                    title: 'International Eco-Standards',
                    lead: 'We insist on green building materials meeting international eco-standards. All materials are ISO14001, EU CE and US GREENGUARD certified, eliminating formaldehyde and benzene at the source to create a healthy environment for families.',
                    details: 'Formaldehyde ≤0.03mg/m³ (far below the national standard of 0.08mg/m³); zero VOC volatile organic compounds; sustainable sourced materials; dust-free construction process — your health is our highest commitment.',
                    list: [
                        'ISO14001 certified',
                        'EU CE certified',
                        'US GREENGUARD certified',
                        'Formaldehyde ≤0.03mg/m³',
                        'Zero VOC compounds'
                    ]
                },
                {
                    number: '04',
                    title: 'German Precision Craftsmanship',
                    lead: 'We adopt the German DIN construction standard system, establishing 16 quality inspection checkpoints and 128 construction standards. Senior craftsmen with 10+ years of experience, supervised on-site by project managers, with every process verified by third-party inspectors.',
                    details: '128 construction detail standards strictly enforced; 10+ year experienced senior craftsmen on-site; project manager stationed throughout; third-party inspection sign-off at every stage — this near-obsessive craftsmanship ensures every project is delivered to museum quality.',
                    list: [
                        'German DIN standards',
                        '16 quality inspection nodes',
                        '128 construction standards',
                        '10+ years experienced craftsmen',
                        'Third-party supervision'
                    ]
                },
                {
                    number: '05',
                    title: 'Lifetime Concierge Service',
                    lead: 'An industry-first lifetime concierge service — delivery is just the beginning. Our dedicated team is available 7×24, providing free scheduled follow-ups, maintenance guidance and repair services, with a complete client archive for every project.',
                    details: 'Year 1: monthly phone follow-up; years 1–3: quarterly on-site maintenance; 3+ years: semi-annual visits; 7×24 emergency repair hotline; exclusive client APP to view project records — we are not just your designers, but your trusted lifelong partners.',
                    list: [
                        '1st year: monthly follow-up',
                        '1-3 years: quarterly maintenance',
                        '3+ years: semi-annual visits',
                        '7×24 emergency hotline',
                        'Exclusive client APP'
                    ]
                }
            ],
            introTitle: 'Why Choose Heart Studio?',
            introText: 'From design to delivery, from materials to service, we pursue excellence at every step. Five core advantages to create a spatial experience beyond your expectations.',
            summaryTitle: 'Choose Heart Studio, Choose Quality Living',
            summaryText: 'Five advantages — from design to service, from materials to craftsmanship — every step exceeds expectations. Let us use our expertise and passion to build the space of your dreams.',
            ctaConsult: 'Consult Now',
            ctaPortfolio: 'View Portfolio'
        },
        portfolio: {
            title: 'Portfolio',
            subtitle: 'PORTFOLIO',
            filters: {
                all: 'All',
                residential: 'Residential',
                commercial: 'Commercial',
                award: 'Award-Winning'
            }
        },
        contact: {
            title: 'Contact Us',
            subtitle: 'CONTACT US',
            formTitle: 'Online Consultation',
            formSubtitle: 'Please fill in the information below, we will contact you within 24 hours',
            nameLabel: 'Name',
            namePlaceholder: 'Enter your name',
            phoneLabel: 'Phone',
            phonePlaceholder: 'Enter your phone number',
            serviceLabel: 'Consultation Type',
            servicePlaceholder: 'Select consultation type',
            messageLabel: 'Message',
            messagePlaceholder: 'Briefly describe your needs',
            submitBtn: 'Submit',
            services: {
                '': 'Select consultation type',
                'phone': 'Phone Consultation',
                'quote': 'Request Quote',
                'visit': 'Schedule Visit',
                'collaboration': 'Business Collaboration',
                'other': 'Other'
            }
        }
    }
};

// ==================== Global State ====================
let currentPageLang = 'zh';

// ==================== Initialize ====================
$(document).ready(function() {
    // Hide loading animation
    setTimeout(function() {
        $('.loading-box').addClass('hidden');
        setTimeout(function() {
            $('.loading-box').hide();
        }, 500);
    }, 800);

    // Back to top button
    const backToTop = $('.back-to-top');

    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            backToTop.addClass('show');
        } else {
            backToTop.removeClass('show');
        }
    });

    backToTop.on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
    });

    // Smooth scroll for navigation links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
    });

    // Language switch
    $('.lang-option').on('click', function() {
        const lang = $(this).data('lang');
        setCurrentLanguage(lang);
    });

    // Initialize language from localStorage or default to 'zh'
    const savedPageLang = localStorage.getItem('language') || 'zh';
    setCurrentLanguage(savedPageLang);

    // Portfolio modal
    const modal = $('#portfolioModal');
    const modalOverlay = $('#modalOverlay');
    const modalClose = $('#modalClose');
    let currentModalProjectId = null;

    // Open modal on portfolio item click
    $('.portfolio-stack-item').on('click', function() {
        const projectId = $(this).data('project');
        currentModalProjectId = projectId;

        // Get translated data from i18n
        const lang = localStorage.getItem('language') || 'zh';
        const t = i18nTranslations[lang];
        const project = t.portfolioPage.stackItems[projectId - 1]; // stackItems is 0-indexed

        if (project) {
            const originalProject = portfolioProjects[projectId];
            $('#modalImage').attr('src', originalProject.image);
            $('#modalTitle').text(project.title);
            $('#modalSubtitle').text(project.subtitle);
            $('#modalLocation').text(project.location);
            $('#modalArea').text(project.area);
            $('#modalYear').text(project.year);
            $('#modalType').text(project.type);
            $('#modalDescription').text(project.description.trim());

            modal.addClass('active');
            $('body').css('overflow', 'hidden');
        }
    });

    // Close modal handlers
    modalClose.on('click', closeModal);
    modalOverlay.on('click', closeModal);

    function closeModal() {
        modal.removeClass('active');
        $('body').css('overflow', '');
    }

    // Close modal on ESC key
    $(document).on('keydown', function(e) {
        if (e.key === 'Escape' && modal.hasClass('active')) {
            closeModal();
        }
    });

    // Form submission (demo only)
    $('.submit-btn').on('click', function(e) {
        e.preventDefault();

        const form = $(this).closest('form');
        const name = form.find('input[name="name"]').val();
        const phone = form.find('input[name="phone"]').val();
        const service = form.find('select[name="service"]').val();
        const message = form.find('textarea[name="message"]').val();

        if (!name || !phone) {
            alert('请填写必填项 / Please fill in required fields');
            return;
        }

        // Demo submission
        alert(`感谢您的咨询！\n我们会尽快与您联系。\n\nThank you for your inquiry!\nWe will contact you soon.`);

        form[0].reset();
    });

});

// ==================== Language Functions ====================
function setCurrentLanguage(lang) {
    currentPageLang = lang;
    // applyLang (i18n.js) handles: localStorage, body class, lang-option active,
    // nav, hero title/subtitle, why-us showcases, contact form, about page text
    applyLang(lang);
    // Update lang button label (not handled by applyLang)
    $('.lang-btn span').text(lang === 'zh' ? '中文' : 'English');
    // updatePageContent handles remaining pageTranslations-specific elements
    updatePageContent(lang);
}

function updatePageContent(lang) {
    const t = pageTranslations[lang];

    // Update contact form (elements not covered by applyLang)
    if ($('.contact-card-form').length) {
        $('.contact-form-title').text(t.contact.formTitle);
        $('.form-subtitle').text(t.contact.formSubtitle);
        // updateContactFormLabels is no longer needed - handled by applyLang
    }

    // Update why-us summary section (not covered by applyLang)
    if ($('.why-intro-section').length) {
        $('.summary-title').text(t.advantages.summaryTitle);
        $('.summary-text').text(t.advantages.summaryText);
        $('.summary-cta .cta-button:not(.secondary)').text(t.advantages.ctaConsult);
        $('.summary-cta .cta-button.secondary').text(t.advantages.ctaPortfolio);
    }

    // Update modal if currently open
    if (typeof currentModalProjectId !== 'undefined' && currentModalProjectId && $('#portfolioModal').hasClass('active')) {
        const t2 = i18nTranslations[lang];
        const project = t2.portfolioPage.stackItems[currentModalProjectId - 1];
        if (project) {
            $('#modalTitle').text(project.title);
            $('#modalSubtitle').text(project.subtitle);
            $('#modalLocation').text(project.location);
            $('#modalArea').text(project.area);
            $('#modalYear').text(project.year);
            $('#modalType').text(project.type);
            $('#modalDescription').text(project.description.trim());
        }
    }
}

function updateContactFormLabels(lang) {
    const t = pageTranslations[lang].contact;

    $('label[for="name"]').text(t.nameLabel);
    $('input[name="name"]').attr('placeholder', t.namePlaceholder);

    $('label[for="phone"]').text(t.phoneLabel);
    $('input[name="phone"]').attr('placeholder', t.phonePlaceholder);

    $('label[for="service"]').text(t.serviceLabel);

    $('label[for="message"]').text(t.messageLabel);
    $('textarea[name="message"]').attr('placeholder', t.messagePlaceholder);

    $('.submit-btn').text(t.submitBtn);

    // Update service options
    const serviceSelect = $('select[name="service"]');
    serviceSelect.empty();
    $.each(t.services, function(value, text) {
        serviceSelect.append($('<option></option>').attr('value', value).text(text));
    });
}
