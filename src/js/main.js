'use strict';

// слайдер на главной странице
var swiper = new Swiper(".first-slider", {
  // loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".first-slider .swiper-button-next",
    prevEl: ".first-slider .swiper-button-prev",
  },
  pagination: {
    el: ".first-slider .swiper-pagination",
    clickable: true,
  },
  // mousewheel: true,
  // keyboard: true,
});

// слайдер по направлениям услуг
var swiper = new Swiper(".directions-slider", {
  slidesPerView: 5,
  spaceBetween: 32,
  slidesPerGroup: 1,
  loopFillGroupWithBlank: true,

  navigation: {
    nextEl: ".directions-slider .swiper-button-next",
    prevEl: ".directions-slider .swiper-button-prev"
  },
  pagination: {
    el: ".directions-slider .swiper-pagination",
    clickable: true,
  }
});

// Кастомный select для новых страниц
/* const defaultSelect = () => {
  const element = document.querySelector('.custom-select');
  const example = new Choices(element, {
    itemSelectText: '',
    searchEnabled: false,
    placeholder: true,
  });
};

defaultSelect(); */
