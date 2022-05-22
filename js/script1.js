"use strict";
$(document).ready(function () {

  // Плавне перелистування сторінки
  $(".goto").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate({
          scrollTop: $(hash).offset().top,
        },
        2000,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });

  // Кнопка «нагору»
  var button = $('#button-up');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1000) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
  });
  button.on('click', function () {
    $('body, html').animate({
      scrollTop: 0
    }, 200);
    return false;
   });
   
     // Анімація  бібліотеки AOS
  AOS.init();
  window.addEventListener("load", AOS.refresh);
  AOS.init({
    once: true
  })

});