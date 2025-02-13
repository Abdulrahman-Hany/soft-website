const translations = {
  ar: {
    nav: {
      home: "الرئيسية",
      about: "عن الشركة",
      services: "خدماتنا",
      products: "منتجاتنا",
      Contact: "اتصل بنا",
    },
    home_slider: "الرئيسية",
    about_slider: "عن الشركة",
    services_slider: "خدماتنا",
    products_slider: "منتجاتنا",
    Contact_slider: "اتصل بنا",
    direction: "rtl",
    company_text: " نحن شركة رائدة في تقديم الحلول الرقمية المتكاملة، متخصصون في برمجة الأنظمة، تطوير المواقع ،تصميم التطبيقات، وإنشاء المتاجر الإلكترونية، التصميم الجرافيكي. نسعى دائمًا للابتكار والجودة لتحقيق أهداف عملائن وبناء شراكات ناجحة.",
    quick_links_title:"روابط سريعة ",
    contact_title_footer: "تواصل",
    copyright_text:"حقوق النسخ محفوظة © لدى شركة  ام سوفت للبرمجيات و تقنية المعلومات",
    heading_about: ' شركة ام سوفت<span class="heading-about"> نساعدك في المضي <span class="remove-br"></span> قدماً نحو المستقبل بخطى واثقة</span> ',
    description_text_about: 'نحن شركة ام سوفت للبرمجيات و تقنية المعلومات نقدم خدمات متكاملة <span class="remove-br"></span> تشمل برمجة الأنظمة، تطوير المواقع، تصميم التطبيقات، وإنشاء المتاجر <span class="remove-br"></span> الإلكترونية، التصميم الجرافيكي.',
    startProject: "ابدأ مشروعك الآن",
    subtitle:"عن الشركة",
    main_title_about:"شركة M Soft ",
    main_description_about: 'نحن شركة متخصصة في تقديم حلول رقمية متكاملة تلبي احتياجات الأفراد والشركات في عالم التقنية المتسارع. منذ تأسيسنا، <span class="highlight-about"> ركزنا على الابتكار والإبداع في تقديم خدماتنا التي تشمل برمجة الأنظمة المتطورة، تصميم وتطوير المواقع الإلكترونية المتجاوبة، إبداع التصميمات الجرافيكية المميزة، تطوير التطبيقات الحديثة، وإنشاء المتاجر الإلكترونية الاحترافية.</span>',
    secondary_description_about:"نهدف إلى بناء شراكات طويلة الأمد مع عملائنا من خلال تقديم حلول مخصصة تعزز أعمالهم وتساعدهم في تحقيق أهدافهم. فريقنا من الخبراء يتميز بالمرونة، الاحترافية، والالتزام بالجودة، مما يجعلنا الخيار الأمثل لكل من يسعى إلى التميز الرقمي.",
    main_title_about_lang_2:"نحو مستقبل رقمي متكامل",  
    solution_title_1:"تقديم حلول مبتكرة",
    solution_title_2:"تحقيق التميز الرقمي",
    solution_title_3:"الالتزام بالجودة",
    solution_desc_1:"تطوير خدمات رقمية عالية الجودة تعتمد على الابتكار والتقنيات الحديثة لتلبية احتياجات العملاء المتنوعة.",
    solution_desc_2:"تمكين الشركات والأفراد من الوصول إلى أفضل الحلول الرقمية التي تعزز حضورهم في السوق.",
    solution_desc_3:"توفير خدمات تتميز بالدقة والاحترافية لضمان رضا العملاء وتحقيق نتائج تتجاوز التوقعات.",
    custom_btn:"نظام روّك تك المحاسبي",

},
  en: {
    nav: {
      home: "Home",
      about: "About the Company",
      services: "Our Services",
      products: "Our Products",
      Contact: "Contact Us",
    },
    home_slider: "Home",
    about_slider: "About the Company",
    services_slider: "Our Services",
    products_slider: "Our Products",
    Contact_slider: "Contact Us",
    direction: "ltr",
    company_text: "We are a leading company in providing integrated digital solutions, specializing in system programming, website development, app design, e-commerce store creation, and graphic design. We always strive for innovation and quality to achieve our clients' goals and build successful partnerships.",
    quick_links_title:"Quick Links",
    contact_title_footer: "Contact",
    copyright_text:"Copyright © All rights reserved to M Soft Software and Information Technology Company",
    heading_about:"M Soft Company helps you <br/> move confidently into the<br/> future.",
    description_text_about:"We are M Soft Software and Information Technology Company,<br/> offering comprehensive services including system <br/>programming, website development, application design, and<br/> creating e-commerce stores, as well as graphic design.",
    startProject: "Start Your Project Now",
    subtitle:"About the Company",
    main_title_about:"M Soft <br/> Company",
    main_description_about:"We are a company specialized in providing integrated digital solutions that meet the needs of individuals and businesses in the fast-paced tech world. Since our establishment, we have focused on innovation and creativity in delivering our services, which include advanced system programming, responsive website design and development, unique graphic design creations, modern application development, and professional e-commerce store creation.",
    secondary_description_about:"We aim to build long-term partnerships with our clients by providing customized solutions that enhance their businesses and help them achieve their goals. Our team of experts is characterized by flexibility, professionalism, and commitment to quality, making us the ideal choice for anyone seeking digital excellence.",
    main_title_about_lang_2:"Towards an <br/>Integrated Digital<br/> Future",
    solution_title_1:"Providing Innovative Solutions",
    solution_title_2:"Achieving Digital Excellence",
    solution_title_3:"Commitment to Quality",
    solution_desc_1:"Developing high-quality digital services based on innovation and modern technologies to meet diverse customer needs.",
    solution_desc_2:"Empowering companies and individuals to access the best digital solutions that enhance their market presence.",
    solution_desc_3:"Providing services characterized by precision and professionalism to ensure customer satisfaction and achieve results that exceed expectations.",
    custom_btn:"Rock Tech accounting system",

  },
};

const loadLanguage = () => {
    const savedLang = localStorage.getItem("selectedLang") || "en";
    const langToggle = document.getElementById("language-toggle");
    langToggle.checked = savedLang === "ar";
    updatePageLanguage(savedLang);
  };
  
const updatePageLanguage = (lang) => {
  const selectedLang = translations[lang];
  document.querySelector('.header .nav a:nth-child(1)').textContent = selectedLang.nav.home;
  document.querySelector('.header .nav a:nth-child(2)').textContent = selectedLang.nav.about;
  document.querySelector('.header .nav a:nth-child(3)').textContent = selectedLang.nav.services;
  document.querySelector('.header .nav a:nth-child(4) .lang-prodacts').textContent = selectedLang.nav.products;
  document.querySelector('.all-btn-munu .contact-btn .lang-contact').textContent = selectedLang.nav.Contact;
  const sidebar = document.querySelectorAll(".sidebar ul a li span");
  sidebar[0].textContent = selectedLang.home_slider;
  sidebar[1].textContent = selectedLang.about_slider;
  sidebar[2].textContent = selectedLang.services_slider;
  sidebar[3].textContent = selectedLang.products_slider;
  document.querySelector(".contact-btn.side span").textContent =
    selectedLang.Contact_slider;

  document.querySelector('.company-text').textContent = selectedLang.company_text;
  document.querySelector('.quick-links-title').textContent = selectedLang.quick_links_title;
  document.querySelector('.contact-title-footer').textContent = selectedLang.contact_title_footer;
  document.querySelector('.copyright-text').textContent = selectedLang.copyright_text;
  const quick_links_list = document.querySelectorAll('.quick-links-list a');
  quick_links_list[0].textContent = selectedLang.nav.home;
  quick_links_list[1].textContent = selectedLang.nav.about;
  quick_links_list[2].textContent = selectedLang.nav.services;
  quick_links_list[3].textContent = selectedLang.nav.products;
  document.querySelector('.main-heading.about').innerHTML = selectedLang.heading_about;
  document.querySelector('.description-text.about').innerHTML = selectedLang.description_text_about;  
  document.querySelector('.cta-button span').textContent = selectedLang.startProject;
  document.querySelector('.subtitle').textContent = selectedLang.subtitle;
  document.querySelector('.main-title-about').innerHTML = selectedLang.main_title_about;
  document.querySelector('.main-title-about.lang-2').innerHTML = selectedLang.main_title_about_lang_2;
  document.querySelector('.main-description-about').innerHTML = selectedLang.main_description_about;
  document.querySelector('.secondary-description-about').innerHTML = selectedLang.secondary_description_about;
  const solution_title = document.querySelectorAll('.solution-title');
  solution_title[0].textContent = selectedLang.solution_title_1;
  solution_title[1].textContent = selectedLang.solution_title_2;
  solution_title[2].textContent = selectedLang.solution_title_3;
  const solution_desc = document.querySelectorAll('.solution-description');
  solution_desc[0].textContent = selectedLang.solution_desc_1;
  solution_desc[1].textContent = selectedLang.solution_desc_2;
  solution_desc[2].textContent = selectedLang.solution_desc_3;
  document.querySelector('.custom-btn a').textContent = selectedLang.custom_btn;
  
  

  document.querySelector("title").textContent = selectedLang.title;
  document.documentElement.style.direction = selectedLang.direction;
};
document
  .getElementById("language-toggle")
  .addEventListener("change", function () {
    const lang = this.checked ? "ar" : "en";
    localStorage.setItem("selectedLang", lang);
    location.reload();
  });
loadLanguage();
