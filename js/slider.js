//  Initialize Swiper
let swiper = new Swiper(".mySwiper", {
 
  pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    keyboard: {
      enable: true,
      onlyInViewpot: true,
      pageUpDown: true
    }
 });


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