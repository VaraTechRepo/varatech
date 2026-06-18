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

  // Cookie consent
  (function(){
    var banner = document.getElementById('cookie-banner');
    if(!banner) return;
    if(localStorage.getItem('cookie-consent')){
      banner.style.display = 'none';
      return;
    }
    banner.style.display = 'flex';
    var acceptBtn = document.getElementById('cookie-accept');
    var rejectBtn = document.getElementById('cookie-reject');
    if(acceptBtn) acceptBtn.addEventListener('click', function(){
      localStorage.setItem('cookie-consent', 'accepted');
      banner.style.display = 'none';
    });
    if(rejectBtn) rejectBtn.addEventListener('click', function(){
      localStorage.setItem('cookie-consent', 'rejected');
      banner.style.display = 'none';
    });
  })();

  // Service cards expansion
  document.querySelectorAll('.details-btn').forEach(function(btn){
    btn.addEventListener('click', function(){
      var card = this.closest('.card');
      var isExpanded = card.classList.contains('expanded');
      var btnText = this.querySelector('.btn-text');

      if(isExpanded){
        card.classList.remove('expanded');
        if(btnText) btnText.textContent = 'Detalii';
      } else {
        document.querySelectorAll('.card.expanded').forEach(function(c){
          c.classList.remove('expanded');
          var t = c.querySelector('.btn-text');
          if(t) t.textContent = 'Detalii';
        });
        card.classList.add('expanded');
        if(btnText) btnText.textContent = 'Ascunde';
      }
    });
  });

});

// Formular — trimite prin EmailJS
var form = document.getElementById('contact-form');
var submitBtn = document.querySelector('#contact-form button[type="submit"]');
if(form){
  form.addEventListener('submit', function(e){
    e.preventDefault();
    if(typeof emailjs === 'undefined'){
      alert('Serviciul de email nu este disponibil. Încearcă mai târziu.');
      return;
    }
    if(submitBtn) submitBtn.textContent = 'Se trimite...';

    emailjs.sendForm('service_oi33mbj', 'template_cg1uwn3', form)
      .then(function(response){
        alert('Mesajul a fost trimis cu succes!');
        form.reset();
        if(submitBtn) submitBtn.textContent = 'Trimite';
      }, function(error){
        alert('Eroare la trimiterea mesajului: ' + JSON.stringify(error));
        if(submitBtn) submitBtn.textContent = 'Trimite';
      });
  });
}
