import Swiper, { Navigation, Pagination, EffectFade, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, EffectFade, Scrollbar]);

const swiperJobs = new Swiper('.jobs__slider', {
  slidesPerView: 3,
  spaceBetween: 24,
  speed: 700,
  autoplay: {
    delay: 300,
  },
  navigation: {
    nextEl: ".jobs .swiper-button-next",
    prevEl: ".jobs .swiper-button-prev",
  },
  breakpoints: {
    1440: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 2,
    },
    300: {
      slidesPerView: 1,
    }
  },
});

const swiperTestimonials = new Swiper('.testimonials__slider', {
  slidesPerView: 1,
  spaceBetween: 24,
  centeredSlides: true,
  speed: 700,
  autoplay: {
    delay: 300,
  },
  navigation: {
    nextEl: ".testimonials .swiper-button-next",
    prevEl: ".testimonials .swiper-button-prev",
  },
});