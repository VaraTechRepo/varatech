// main.js - nav mobil, formular EmailJS, cookie consent
document.addEventListener('DOMContentLoaded', function(){

  // Anul curent în footer
  var y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();

  // Nav mobil — slide-in sidebar
  var navToggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('main-nav');
  var backdrop = document.getElementById('nav-backdrop');
  var navClose = document.getElementById('nav-close');

  function openNav(){
    if(nav) nav.classList.add('show');
    if(backdrop) backdrop.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
  function closeNav(){
    if(nav) nav.classList.remove('show');
    if(backdrop) backdrop.classList.remove('show');
    document.body.style.overflow = '';
  }

  if(navToggle) navToggle.addEventListener('click', function(){
    nav && nav.classList.contains('show') ? closeNav() : openNav();
  });
  if(navClose) navClose.addEventListener('click', closeNav);
  if(backdrop) backdrop.addEventListener('click', closeNav);
  if(nav) nav.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', closeNav);
  });

  // Cookie consent + consent-gated Google Analytics (GA4)
  (function(){
    var GA_ID = 'G-9BQBXXS1PD';
    var gaLoaded = false;
    function loadAnalytics(){
      if(gaLoaded) return;
      gaLoaded = true;
      var s = document.createElement('script');
      s.async = true;
      s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
      document.head.appendChild(s);
      window.dataLayer = window.dataLayer || [];
      window.gtag = function(){ dataLayer.push(arguments); };
      gtag('js', new Date());
      gtag('config', GA_ID);
    }

    var consent = localStorage.getItem('cookie-consent');
    if(consent === 'accepted') loadAnalytics();

    var banner = document.getElementById('cookie-banner');
    if(!banner) return;
    if(consent){
      banner.style.display = 'none';
      return;
    }
    banner.style.display = 'flex';
    var acceptBtn = document.getElementById('cookie-accept');
    var rejectBtn = document.getElementById('cookie-reject');
    if(acceptBtn) acceptBtn.addEventListener('click', function(){
      localStorage.setItem('cookie-consent', 'accepted');
      banner.style.display = 'none';
      loadAnalytics();
    });
    if(rejectBtn) rejectBtn.addEventListener('click', function(){
      localStorage.setItem('cookie-consent', 'rejected');
      banner.style.display = 'none';
    });
  })();

  // Service cards expansion
  var t = window.VT_I18N ? window.VT_I18N.t : function(key){ return key; };
  document.querySelectorAll('.details-btn').forEach(function(btn){
    btn.addEventListener('click', function(){
      var card = this.closest('.card');
      var isExpanded = card.classList.contains('expanded');
      var btnText = this.querySelector('.btn-text');

      if(isExpanded){
        card.classList.remove('expanded');
        if(btnText) btnText.textContent = t('common.details');
      } else {
        document.querySelectorAll('.card.expanded').forEach(function(c){
          c.classList.remove('expanded');
          var ct = c.querySelector('.btn-text');
          if(ct) ct.textContent = t('common.details');
        });
        card.classList.add('expanded');
        if(btnText) btnText.textContent = t('common.hide');
      }
    });
  });

  // Formular contact — extindere câmpuri opționale
  var formMoreBtn = document.querySelector('.form-more-btn');
  var formExtra = document.querySelector('.form-extra');
  if(formMoreBtn && formExtra){
    formMoreBtn.addEventListener('click', function(){
      var isOpen = formExtra.classList.contains('open');
      var btnText = this.querySelector('.btn-text');

      formExtra.classList.toggle('open');
      formMoreBtn.classList.toggle('open');
      if(btnText) btnText.textContent = isOpen ? t('form.more') : t('form.hideDetails');
    });
  }

});

// Formular — trimite prin EmailJS
var form = document.getElementById('contact-form');
var submitBtn = document.querySelector('#contact-form button[type="submit"]');
if(form){
  var tSubmit = window.VT_I18N ? window.VT_I18N.t : function(key){ return key; };
  form.addEventListener('submit', function(e){
    e.preventDefault();
    if(typeof emailjs === 'undefined'){
      alert(tSubmit('common.emailUnavailable'));
      return;
    }
    if(submitBtn) submitBtn.textContent = tSubmit('common.sending');

    emailjs.sendForm('service_oi33mbj', 'template_cg1uwn3', form)
      .then(function(response){
        alert(tSubmit('common.sendSuccess'));
        form.reset();
        if(submitBtn) submitBtn.textContent = tSubmit('form.submit');
      }, function(error){
        alert(tSubmit('common.sendError') + JSON.stringify(error));
        if(submitBtn) submitBtn.textContent = tSubmit('form.submit');
      });
  });
}
