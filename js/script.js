// script.js — базовая инициализация и демо логика
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  if (M && M.Sidenav) M.Sidenav.init(elems);

  var boxes = document.querySelectorAll('.materialboxed');
  if (M && M.Materialbox) M.Materialbox.init(boxes);

  // demo toast for contact form submission (if present)
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      if (M && M.toast) M.toast({html: 'Спасибо! Сообщение отправлено.'});
      contactForm.reset();
    });
  }

  // small canvas demo initialization if present
  var canvas = document.getElementById('myCanvas');
  if (canvas && canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'teal';
    ctx.fillRect(10,10,80,60);
  }
});
