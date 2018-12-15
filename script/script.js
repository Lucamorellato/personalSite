
const app = {}

app.animations = function () {
   let offset = 20;
   $('.aboutDot').on('click', function () {
      $('html, body').animate({
         scrollTop: $("#about").offset().top + offset
      }, 300);
   })
   $('.skillsDot').on('mouseover', function () {
      $('html, body').animate({
         scrollTop: $("#skills").offset().top + offset
      }, 300);
   })

   $('.heroDot').on('mouseover', function () {
      // $('.dotText').addClass('dotTextShow');
   })

   $('.projectsDot').on('mouseover', function () {
      $('html, body').animate({
         scrollTop: $("#projects").offset().top + offset
      }, 300);
   })
   $('.contactDot').on('mouseover', function () {
      $('html, body').animate({
         scrollTop: $("#contact").offset().top + offset
      }, 300);
   })
}

app.dotScroller = function () {
   let baseHeight = $("body").height();

   $(window).bind('scroll', function () {
      let scrollPercent = ($(window).scrollTop() / baseHeight);
      if (scrollPercent > -1 && scrollPercent < .08) {
         $('.dot').removeClass('dotSelected');
         $('.dotText').removeClass('dotTextShow')

         // $('.skillsDot').removeClass('dotSelected');
         // $('.aboutDot').removeClass('dotSelected');
         $('.heroDot').addClass('dotSelected');
         $('.dotText').addClass('dotTextShow')

      }
      else if (scrollPercent > .08 && scrollPercent < .31) {
         $('.dot').removeClass('dotSelected');

         // $('.aboutDot').removeClass('dotSelected');
         // $('.heroDot').removeClass('dotSelected');
         // $('.skillsDot').removeClass('dotSelected');
         $('.aboutDot').addClass('dotSelected');
      }
      else if (scrollPercent > .31 && scrollPercent < .43) {
         $('.dot').removeClass('dotSelected');

         // $('.aboutDot').removeClass('dotSelected');
         // $('.projectsDot').removeClass('dotSelected');
         $('.skillsDot').addClass('dotSelected');
         // $('.heroDot').removeClass('dotSelected');
      }
      else if (scrollPercent > .43 && scrollPercent < .76) {
         $('.dot').removeClass('dotSelected');

         // $('.skillsDot').removeClass('dotSelected');
         // $('.contactDot').removeClass('dotSelected');
         $('.projectsDot').addClass('dotSelected');
         // $('.heroDot').removeClass('dotSelected');
      }
      else if (scrollPercent > .76) {
         $('.dot').removeClass('dotSelected');

         // $('.aboutDot').removeClass('dotSelected');
         // $('.projectsDot').removeClass('dotSelected');
         $('.contactDot').addClass('dotSelected');
         // $('.heroDot').removeClass('dotSelected');
      }
      // else if($(window).scrollTop() / baseHeight){

      // }
      else {
         $('.aboutDot').removeClass('dotSelected');
      }
   });
}



app.init = function () {
   app.dotScroller()
   app.animations()
}


$(function () {
   app.init();

})
