const app = {}


//nav scroller funciton =---> checks height of body vs where user has scrolled to and assigns classes

app.navScroller = function () {
   let initialHeight = $("body").height();

   $(window).on('scroll', function () {
      let scrollPercent = ($(window).scrollTop() / initialHeight);
      if (scrollPercent > -1 && scrollPercent < .10) {
         $('.dot').removeClass('dotSelected');

         $('.heroDot').addClass('dotSelected');
      }
      else if (scrollPercent > .10 && scrollPercent < .22) {
         $('.dot').removeClass('dotSelected');

         $('.aboutDot').addClass('dotSelected');
      }
      else if (scrollPercent > .22 && scrollPercent < .35) {
         $('.dot').removeClass('dotSelected');

         $('.section1Dot').addClass('dotSelected');
      }
      else if (scrollPercent > .35 && scrollPercent < .49) {
         $('.dot').removeClass('dotSelected');

         $('.section2Dot').addClass('dotSelected');
      }
      else if (scrollPercent > .49 && scrollPercent < .64) {
         $('.dot').removeClass('dotSelected');

         $('.section3Dot').addClass('dotSelected');
      }
      else if (scrollPercent > .64 && scrollPercent < .79) {
         $('.dot').removeClass('dotSelected');

         $('.section4Dot').addClass('dotSelected');
      }
      else if (scrollPercent > .79 && scrollPercent < .87) {
         $('.dot').removeClass('dotSelected');

         $('.contactDot').addClass('dotSelected');
      }
      else if($(window).scrollTop() / initialHeight){

      }
      else {
         $('.contactDot').removeClass('dotSelected');
      }
   });
}


// COME BACK TO THIS FUNCTION to Throttle my screen resizing joke.
// I want to do something here that makes the screen show a funny thing when someone is RESIZING window width.
// ------------------------------___--------------------------------------->
// app.throttling = function (callback, limit, time) {
//    /// monitor the count
//    let calledCount = 0;

//    /// refesh the `calledCount` varialbe after the `time` has been passed
//    setInterval(function () { calledCount = 0 }, time);

//    /// creating a clousre that will be called
//    return function () {
//       /// checking the limit (if limit is exceeded then do not call the passed function
//       if (limit > calledCount) {
//          /// increase the count
//          calledCount++;
//          callback(); /// call the function
//       }
//       else console.log('not calling because the limit has exeeded');
//    };
// }


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

// ------------------------------___----------------------------------->

app.init = function () {
   app.navScroller()
   app.windowWidthScanner()
}


$(function () {
   app.init();
})
