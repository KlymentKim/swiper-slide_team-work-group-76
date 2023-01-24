//  Initialize Swiper
let swiper = new Swiper(".mySwiper", {
   // initial slide index
   initialSlide: 0,

  slidesPerView: 1,
  // spaceBetween: 10,
  pagination: {
      el: ".swiper-pagination",
      clickable: true
  },

    keyboard: {
      enable: true,
      onlyInViewpot: true,
      pageUpDown: true
  },
  breakpoints: {
       320: {
      slidesPerView: 1,
      spaceBetween: 20,
        },
        480: {
        slidesPerView: 1,
        spaceBetween: 20,
          
        },
        768: {
        slidesPerView: 1,
        spaceBetween: 30,
          
        },
        1200: {
          slidesPerView: 1,
           spaceBetween: 30,
        },
        1440: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
  },
  
 // target element to listen touch events on.
  touchEventsTarget: 'container',
    
  // auto up<a href="https://www.jqueryscript.net/time-clock/">date</a> 
  // n window resize
   updateOnWindowResize:true,

  
    // animation speed
    speed: 500,

   // slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
    effect:'slide',

    
 });


// document.addEventListener('DOMContentLoaded', function () { 
//   (function () {
//     const swiper = new swiper('.customers-swiper', {
//       loop: true,
//       autoHeight: true,
//       spaceBetween: 20,
//       pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//       },
//     });
//   })();
// });

// const swiper = new swiper('.swiper', {
//     // Optional parameters
//     direction: 'vertical',
//     // direction: 'horizontal',
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//        
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });


// const swiper = new swiper('.swiper', {
//   // Optional parameters
//   loop: true,
//   centeredSlides: true,
//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   breakpoints: {
//     // when window width is >= 320px
//     768: {
//       slidesPerView: 3,
//       spaceBetween: 30
//     },
//     // when window width is >= 480px
//     1024: {
//       slidesPerView: 4,
//       spaceBetween: 40
//     },
//     // when window width is >= 640px
//     1280: {
//       slidesPerView: 5,
//       spaceBetween: 50
//     }
//   }
// });