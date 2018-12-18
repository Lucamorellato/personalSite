const app = {}

app.navScroller = function () {
   let baseHeight = $("body").height();

   $(window).on('scroll', function () {
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


app.throttling = function (callback, limit, time) {
   /// monitor the count
   let calledCount = 0;

   /// refesh the `calledCount` varialbe after the `time` has been passed
   setInterval(function () { calledCount = 0 }, time);

   /// creating a clousre that will be called
   return function () {
      /// checking the limit (if limit is exceeded then do not call the passed function
      if (limit > calledCount) {
         /// increase the count
         calledCount++;
         callback(); /// call the function
      }
      else console.log('not calling because the limit has exeeded');
   };
}




// app.windowWidthScanner = () => {
//    let baseWidth = $(window).width();
//    app.baseWidth = baseWidth

//    $(window).on("resize", function () {
//    let resizeWidth = $(window).width();
   
   
//       if (resizeWidth != app.baseWidth) {
//          console.log('inside if')

//          $(".responsiveModule").addClass("sneaky")

//          setTimeout(function () {
//             $(".responsiveModule").removeClass("sneaky")
//             console.log("timeout")
//          }, 800);
//          // // let app.baseWidth = resizeWidth;
//       }
//    })
// }







app.init = function () {
   app.navScroller()
   app.windowWidthScanner()
}



$(function () {
   app.init();
})
