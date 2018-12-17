
const app = {}

// app.animations = function () {
//    let offset = 20;
//    $('.aboutDot').on('click', function () {
//       $('html, body').animate({
//          scrollTop: $("#about").offset().top + offset
//       }, 300);
//    })
//    $('.skillsDot').on('mouseover', function () {
//       $('html, body').animate({
//          scrollTop: $("#skills").offset().top + offset
//       }, 300);
//    })

//    $('.heroDot').on('mouseover', function () {
//       // $('.dotText').addClass('dotTextShow');
//    })

//    $('.projectsDot').on('mouseover', function () {
//       $('html, body').animate({
//          scrollTop: $("#projects").offset().top + offset
//       }, 300);
//    })
//    $('.contactDot').on('mouseover', function () {
//       $('html, body').animate({
//          scrollTop: $("#contact").offset().top + offset
//       }, 300);
//    })
// }

app.dotScroller = function () {
   let baseHeight = $("body").height();

   $(window).bind('scroll', function () {
      let scrollPercent = ($(window).scrollTop() / baseHeight);
      if (scrollPercent > -1 && scrollPercent < .10) {
         $('.dot').removeClass('dotSelected');
         $('.dotText').removeClass('dotTextShow')

         // $('.skillsDot').removeClass('dotSelected');
         // $('.aboutDot').removeClass('dotSelected');
         $('.heroDot').addClass('dotSelected');
         $('.dotText').addClass('dotTextShow')

      }
      else if (scrollPercent > .10 && scrollPercent < .22) {
         $('.dot').removeClass('dotSelected');

         // $('.aboutDot').removeClass('dotSelected');
         // $('.heroDot').removeClass('dotSelected');
         // $('.skillsDot').removeClass('dotSelected');
         $('.aboutDot').addClass('dotSelected');
      }
      else if (scrollPercent > .22 && scrollPercent < .35) {
         $('.dot').removeClass('dotSelected');

         // $('.aboutDot').removeClass('dotSelected');
         // $('.projectsDot').removeClass('dotSelected');
         $('.section1Dot').addClass('dotSelected');
         // $('.heroDot').removeClass('dotSelected');
      }
      else if (scrollPercent > .35 && scrollPercent < .49) {
         $('.dot').removeClass('dotSelected');

         // $('.skillsDot').removeClass('dotSelected');
         // $('.contactDot').removeClass('dotSelected');
         $('.section2Dot').addClass('dotSelected');
         // $('.heroDot').removeClass('dotSelected');
      }
      else if (scrollPercent > .49 && scrollPercent < .64) {
         $('.dot').removeClass('dotSelected');

         // $('.aboutDot').removeClass('dotSelected');
         // $('.projectsDot').removeClass('dotSelected');
         $('.section3Dot').addClass('dotSelected');
         // $('.heroDot').removeClass('dotSelected');
      }
      else if (scrollPercent > .64 && scrollPercent < .79) {
         $('.dot').removeClass('dotSelected');

         // $('.aboutDot').removeClass('dotSelected');
         // $('.projectsDot').removeClass('dotSelected');
         $('.section4Dot').addClass('dotSelected');
         // $('.heroDot').removeClass('dotSelected');
      }
      else if (scrollPercent > .79 && scrollPercent < .87) {
         $('.dot').removeClass('dotSelected');

         // $('.aboutDot').removeClass('dotSelected');
         // $('.projectsDot').removeClass('dotSelected');
         $('.contactDot').addClass('dotSelected');
         // $('.heroDot').removeClass('dotSelected');
      }
      else if($(window).scrollTop() / baseHeight){

      }
      else {
         $('.contactDot').removeClass('dotSelected');
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
