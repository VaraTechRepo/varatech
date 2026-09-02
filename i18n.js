// i18n.js — RO/EN switcher for the homepage. Loads before main.js.
(function () {
  var translations = {
    ro: {
      title: 'Varatech — Soluții IT pentru afaceri din România',
      'nav.servicii': 'Servicii',
      'nav.proiecte': 'Proiecte',
      'nav.preturi': 'Prețuri',
      'nav.despre': 'Despre',
      'nav.contact': 'Contact',
      'nav.cta': 'Solicită ofertă',
      'nav.close': 'Închide meniu',
      'nav.toggle': 'Meniu',

      'hero.h1': 'Un site profesional, gata în 10 zile — de la 1.490 RON.',
      'hero.p': 'De la website-uri și aplicații web, la marketing digital, securitate și automatizări — soluții IT complete pentru IMM-uri din România.',
      'hero.cta1': 'Vreau un preț pentru site-ul meu',
      'hero.cta2': 'Vezi ce putem face pentru afacerea ta',
      'hero.micro': 'Fără obligații. Răspuns în maximum 24h.',

      'stats.label1': 'Ani de experiență',
      'stats.label2': 'Intermediari — colaborare directă',
      'stats.label3': 'Timp de răspuns',

      'services.label': 'Ce oferim',
      'services.h2': 'Servicii complete pentru afacerea ta',
      'services.lead': 'Fiecare afacere e unică. Ne adaptăm la nevoile tale cu soluții testate și eficiente.',

      'common.details': 'Detalii',
      'common.hide': 'Ascunde',
      'common.sending': 'Se trimite...',
      'common.emailUnavailable': 'Serviciul de email nu este disponibil. Încearcă mai târziu.',
      'common.sendSuccess': 'Mesajul a fost trimis cu succes!',
      'common.sendError': 'Eroare la trimiterea mesajului: ',

      'service1.title': 'Creare site & aplicații web',
      'service1.desc': 'Website-uri rapide, atractive și orientate spre rezultate.',
      'service1.details': 'Proiectăm și dezvoltăm website-uri personalizate și aplicații web pentru vânzări online, rezervări și managementul afacerii. Design modern, optimizat pentru orice dispozitiv.',
      'service2.title': 'Sisteme de rezervări',
      'service2.desc': 'Rezervări online automatizate, fără efort din partea ta.',
      'service2.details': 'Soluții intuitive de programări online, sincronizate cu Google Calendar, cu notificări automate și management complet al clienților.',
      'service3.title': 'Optimizare SEO & UX',
      'service3.desc': 'Fii găsit. Fii ales.',
      'service3.details': 'Creștem vizibilitatea site-ului tău în căutările locale, optimizăm experiența utilizatorilor și îmbunătățim rata de conversie.',
      'service4.title': 'Promovare Google Ads & Social',
      'service4.desc': 'Campanii care aduc clienți, nu doar click-uri.',
      'service4.details': 'Campanii eficiente pe Google și rețele sociale, orientate spre clienți locali, cu rezultate clare și măsurabile.',
      'service5.title': 'Servicii foto & video',
      'service5.desc': 'Conținut vizual care face diferența.',
      'service5.details': 'Fotografii de produs, video-uri promoționale și sesiuni foto pentru social media — conținut profesional care prezintă afacerea ta la cel mai înalt nivel.',
      'service6.title': 'Suport IT & Configurații PC',
      'service6.desc': 'IT fără bătăi de cap.',
      'service6.details': 'Administrare rețele, configurare PC-uri, backup-uri sigure și intervenții rapide on-site sau remote, pentru continuitatea afacerii tale.',
      'service7.title': 'Meniuri digitale cu QR',
      'service7.desc': 'Meniuri moderne, fără costuri de printare.',
      'service7.details': 'Meniuri interactive pentru restaurante și cafenele, actualizabile instant, accesibile printr-un simplu cod QR. Fără hârtie, fără costuri suplimentare.',
      'service8.title': 'Instalare CCTV & Rețele',
      'service8.desc': 'Securitate și conectivitate pentru afacerea ta.',
      'service8.details': 'Instalăm sisteme de supraveghere video, rețele cablate și wireless, cu monitorizare 24/7 și securitate avansată.',
      'service9.title': 'Smart Home & Multimedia',
      'service9.desc': 'Spații inteligente, experiențe premium.',
      'service9.details': 'Automatizări smart home și sisteme multimedia profesionale pentru locuințe și spații comerciale — confort, eficiență și o imagine modernă.',

      'portfolio.label': 'Portofoliu',
      'portfolio.h2': 'Un proiect real, live acum',
      'portfolio.desc': 'Site de prezentare pentru un apicultor din Munții Apuseni — design premium, poveste de brand, galerie foto și formular de contact. Live, funcțional, 100% verificabil.',
      'portfolio.cta': 'Vezi site-ul live →',
      'portfolio.imgAlt1': 'Pagina principală honeytransylvania.ro',
      'portfolio.imgAlt2': 'Galeria foto de pe honeytransylvania.ro',

      'pricing.label': 'Prețuri orientative',
      'pricing.h2': 'Cât costă, de la ce sumă pornim',
      'pricing.lead': 'Oferta finală depinde de complexitate — dar știi de la ce nivel pornești, nu ghicești.',
      'pricing.onetime': '/ o singură dată',
      'price1.tier': 'Pachet 1',
      'price1.name': 'Website de prezentare',
      'price1.amount': '1.490 RON',
      'price1.f1': '1–4 pagini, design responsive',
      'price1.f2': 'Formular de contact inclus',
      'price1.f3': 'Livrare în 7–10 zile',
      'price2.tier': 'Pachet 2',
      'price2.name': 'Site + rezervări sau vânzare online',
      'price2.amount': '2.990 RON',
      'price2.f1': 'Integrare rezervări/Google Calendar sau magazin simplu',
      'price2.f2': 'SEO de bază + Google Business Profile',
      'price2.f3': 'Livrare în 2–3 săptămâni',
      'price3.tier': 'Pachet 3',
      'price3.name': 'Mentenanță & suport',
      'price3.amount': '149 RON',
      'price3.period': '/ lună',
      'price3.f1': 'Găzduire, backup, actualizări',
      'price3.f2': 'Modificări mici incluse',
      'price3.f3': 'Suport prioritar <24h',

      'about.label': 'Despre noi',
      'about.h2': 'Cine suntem',
      'about.p': 'Vorbești direct cu cine îți construiește site-ul, fără intermediari. Suntem alături de tine la orice întrebare, de la prima discuție și până după ce site-ul e live. Lucrăm din Oradea, cu proiecte reale la activ și îți spunem mereu clar ce se poate face, ca să nu pierzi timpul cu promisiuni goale.',
      'about.imgAlt': 'Dezvoltare web și aplicații personalizate',
      'about.f1': 'Experiență locală',
      'about.f2': 'Soluții personalizate pentru fiecare proiect',
      'about.f3': 'Suport tehnic continuu după livrare',
      'about.f4': 'Răspuns garantat în maximum 24 de ore',

      'contact.label': 'Contact',
      'contact.h2': 'Hai să vorbim',
      'contact.lead': 'O consultanță gratuită poate fi primul pas. Scrie-ne și îți răspundem în cel mult 24 de ore.',
      'contact.location': '📍 Oradea, Bihor, România',

      'form.name': 'Nume',
      'form.namePh': 'Nume și prenume',
      'form.email': 'Email',
      'form.emailPh': 'ex: nume@exemplu.ro',
      'form.more': 'Adaugă detalii (opțional)',
      'form.hideDetails': 'Ascunde detalii',
      'form.phone': 'Telefon',
      'form.service': 'Serviciu',
      'form.message': 'Mesaj',
      'form.messagePh': 'Spune-ne cu ce te putem ajuta...',
      'form.submit': 'Trimite — primești răspuns azi/mâine',
      'form.micro': 'Nu facem spam. Răspuns de la un om real, în maximum 24h.',

      'opt.site': 'Creare site & aplicații web',
      'opt.booking': 'Sisteme de rezervări',
      'opt.seo': 'SEO & UX',
      'opt.ads': 'Google Ads & Social',
      'opt.photo': 'Foto & Video',
      'opt.it': 'Suport IT',
      'opt.qr': 'Meniu digital QR',
      'opt.cctv': 'Instalare CCTV & Rețele',
      'opt.smarthome': 'Smart Home & Multimedia',
      'opt.other': 'Altele',

      'footer.brandP': 'Soluții IT complete pentru IMM-uri din România — web, marketing digital, securitate și automatizări.',
      'footer.location': 'Oradea, Bihor, România',
      'footer.legalH4': 'Legal',
      'footer.privacy': 'Politică de Confidențialitate',
      'footer.cookiePolicy': 'Politică Cookie',
      'footer.rights': 'Varatech — Toate drepturile rezervate',
      'footer.confidentialitate': 'Confidențialitate',
      'footer.cookieuri': 'Cookie-uri',

      'cookie.ariaLabel': 'Consimțământ cookie-uri',
      'cookie.text': 'Folosim cookie-uri esențiale pentru funcționarea site-ului. Dacă apeși Accept, activăm și Google Analytics pentru statistici de trafic. <a href="cookies.html">Politică Cookie</a>',
      'cookie.reject': 'Refuz',
      'cookie.accept': 'Accept'
    },
    en: {
      title: 'Varatech — IT solutions for businesses in Romania',
      'nav.servicii': 'Services',
      'nav.proiecte': 'Projects',
      'nav.preturi': 'Pricing',
      'nav.despre': 'About',
      'nav.contact': 'Contact',
      'nav.cta': 'Get a quote',
      'nav.close': 'Close menu',
      'nav.toggle': 'Menu',

      'hero.h1': 'A professional website, ready in 10 days — from 1,490 RON (~300 €).',
      'hero.p': 'From websites and web apps, to digital marketing, security and automation — complete IT solutions for Romanian SMEs.',
      'hero.cta1': 'I want a quote for my website',
      'hero.cta2': 'See what we can do for your business',
      'hero.micro': 'No obligations. Reply within 24h.',

      'stats.label1': 'Years of experience',
      'stats.label2': 'Middlemen — direct collaboration',
      'stats.label3': 'Response time',

      'services.label': 'What we offer',
      'services.h2': 'Complete services for your business',
      'services.lead': 'Every business is unique. We adapt to your needs with tested, efficient solutions.',

      'common.details': 'Details',
      'common.hide': 'Hide',
      'common.sending': 'Sending...',
      'common.emailUnavailable': 'The email service is unavailable. Please try again later.',
      'common.sendSuccess': 'Your message was sent successfully!',
      'common.sendError': 'Error sending message: ',

      'service1.title': 'Website & web app development',
      'service1.desc': 'Fast, attractive, results-driven websites.',
      'service1.details': 'We design and build custom websites and web apps for online sales, bookings, and business management. Modern design, optimized for any device.',
      'service2.title': 'Booking systems',
      'service2.desc': 'Automated online bookings, zero effort on your side.',
      'service2.details': 'Intuitive online scheduling, synced with Google Calendar, with automatic notifications and full client management.',
      'service3.title': 'SEO & UX optimization',
      'service3.desc': 'Get found. Get chosen.',
      'service3.details': "We boost your site's visibility in local search, optimize the user experience, and improve your conversion rate.",
      'service4.title': 'Google Ads & Social advertising',
      'service4.desc': 'Campaigns that bring customers, not just clicks.',
      'service4.details': 'Effective campaigns on Google and social media, targeted at local customers, with clear, measurable results.',
      'service5.title': 'Photo & video services',
      'service5.desc': 'Visual content that makes the difference.',
      'service5.details': 'Product photography, promotional videos, and social media photo sessions — professional content that showcases your business at its best.',
      'service6.title': 'IT support & PC setup',
      'service6.desc': 'Hassle-free IT.',
      'service6.details': 'Network administration, PC setup, secure backups, and fast on-site or remote support for your business continuity.',
      'service7.title': 'Digital QR menus',
      'service7.desc': 'Modern menus, no printing costs.',
      'service7.details': 'Interactive menus for restaurants and cafes, updatable instantly, accessible via a simple QR code. No paper, no extra costs.',
      'service8.title': 'CCTV & network installation',
      'service8.desc': 'Security and connectivity for your business.',
      'service8.details': 'We install video surveillance systems, wired and wireless networks, with 24/7 monitoring and advanced security.',
      'service9.title': 'Smart Home & Multimedia',
      'service9.desc': 'Smart spaces, premium experiences.',
      'service9.details': 'Smart home automation and professional multimedia systems for homes and commercial spaces — comfort, efficiency, and a modern image.',

      'portfolio.label': 'Portfolio',
      'portfolio.h2': 'A real project, live right now',
      'portfolio.desc': 'A presentation website for a beekeeper in the Apuseni Mountains — premium design, brand story, photo gallery, and contact form. Live, functional, 100% verifiable.',
      'portfolio.cta': 'See the live site →',
      'portfolio.imgAlt1': 'honeytransylvania.ro homepage',
      'portfolio.imgAlt2': 'Photo gallery on honeytransylvania.ro',

      'pricing.label': 'Ballpark pricing',
      'pricing.h2': 'What it costs, starting price points',
      'pricing.lead': "The final quote depends on complexity — but you'll know the starting point, not have to guess.",
      'pricing.onetime': '/ one-time',
      'price1.tier': 'Package 1',
      'price1.name': 'Presentation website',
      'price1.amount': '1,490 RON (~300 €)',
      'price1.f1': '1–4 pages, responsive design',
      'price1.f2': 'Contact form included',
      'price1.f3': 'Delivered in 7–10 days',
      'price2.tier': 'Package 2',
      'price2.name': 'Site + bookings or online sales',
      'price2.amount': '2,990 RON (~600 €)',
      'price2.f1': 'Booking/Google Calendar integration or a simple store',
      'price2.f2': 'Basic SEO + Google Business Profile',
      'price2.f3': 'Delivered in 2–3 weeks',
      'price3.tier': 'Package 3',
      'price3.name': 'Maintenance & support',
      'price3.amount': '149 RON (~30 €)',
      'price3.period': '/ month',
      'price3.f1': 'Hosting, backup, updates',
      'price3.f2': 'Small changes included',
      'price3.f3': 'Priority support <24h',

      'about.label': 'About us',
      'about.h2': 'Who we are',
      'about.p': "You talk directly with the person building your site — no middlemen. We're here for any question, from the first conversation through to after your site goes live. We work from Oradea, with real projects behind us, and we'll always tell you clearly what's actually possible, so you don't waste time on empty promises.",
      'about.imgAlt': 'Web development and custom applications',
      'about.f1': 'Local experience',
      'about.f2': 'Custom solutions for every project',
      'about.f3': 'Ongoing technical support after delivery',
      'about.f4': 'Guaranteed response within 24 hours',

      'contact.label': 'Contact',
      'contact.h2': "Let's talk",
      'contact.lead': "A free consultation can be the first step. Write to us and we'll reply within 24 hours.",
      'contact.location': '📍 Oradea, Bihor, Romania',

      'form.name': 'Name',
      'form.namePh': 'Full name',
      'form.email': 'Email',
      'form.emailPh': 'e.g. name@example.com',
      'form.more': 'Add details (optional)',
      'form.hideDetails': 'Hide details',
      'form.phone': 'Phone',
      'form.service': 'Service',
      'form.message': 'Message',
      'form.messagePh': 'Tell us how we can help...',
      'form.submit': 'Send — get a reply today/tomorrow',
      'form.micro': 'No spam. A reply from a real person, within 24h.',

      'opt.site': 'Website & web app creation',
      'opt.booking': 'Booking systems',
      'opt.seo': 'SEO & UX',
      'opt.ads': 'Google Ads & Social',
      'opt.photo': 'Photo & Video',
      'opt.it': 'IT Support',
      'opt.qr': 'Digital QR menu',
      'opt.cctv': 'CCTV & Network installation',
      'opt.smarthome': 'Smart Home & Multimedia',
      'opt.other': 'Other',

      'footer.brandP': 'Complete IT solutions for Romanian SMEs — web, digital marketing, security, and automation.',
      'footer.location': 'Oradea, Bihor, Romania',
      'footer.legalH4': 'Legal',
      'footer.privacy': 'Privacy Policy',
      'footer.cookiePolicy': 'Cookie Policy',
      'footer.rights': 'Varatech — All rights reserved',
      'footer.confidentialitate': 'Privacy',
      'footer.cookieuri': 'Cookies',

      'cookie.ariaLabel': 'Cookie consent',
      'cookie.text': 'We use essential cookies for the site to function properly. If you click Accept, we also enable Google Analytics for traffic statistics. <a href="cookies.html">Cookie Policy</a>',
      'cookie.reject': 'Decline',
      'cookie.accept': 'Accept'
    }
  };

  var STORAGE_KEY = 'varatech-lang';

  function t(key) {
    var lang = window.VT_I18N.lang;
    var dict = translations[lang] || translations.ro;
    return Object.prototype.hasOwnProperty.call(dict, key) ? dict[key] : (translations.ro[key] || key);
  }

  function applyLanguage(lang) {
    if (lang !== 'ro' && lang !== 'en') lang = 'ro';
    window.VT_I18N.lang = lang;
    var dict = translations[lang];

    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-alt');
      if (dict[key] !== undefined) el.setAttribute('alt', dict[key]);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    localStorage.setItem(STORAGE_KEY, lang);
  }

  window.VT_I18N = {
    lang: 'ro',
    t: t,
    set: applyLanguage
  };

  document.addEventListener('DOMContentLoaded', function () {
    var saved = localStorage.getItem(STORAGE_KEY);
    applyLanguage(saved === 'en' ? 'en' : 'ro');

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLanguage(btn.getAttribute('data-lang'));
      });
    });
  });
})();
