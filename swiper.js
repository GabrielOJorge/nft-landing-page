const swiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
    delay: 3000,
  },

  slidesPerView: 1,
  spaceBetween: 50,

  breakpoints: {
    950: {
      slidesPerView: 2,
    },
    1400: {
      slidesPerView: 3,
    },
  },

  centeredSlides: true,
});
