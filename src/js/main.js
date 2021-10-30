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

// прилипающее меню в шапке
window.onscroll = function showHeader() {
  let header = document.querySelector('.header');

  if(window.pageYOffset > header.offsetHeight) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}

// кнопка меню
const menuButton = document.querySelector('.menu-button');
if (menuButton) {
  const mainMenu = document.querySelector('.main-nav');
  menuButton.addEventListener('click', function(r) {
    // document.body.classList.toggle('custom-lock');
    menuButton.classList.toggle('active');
    mainMenu.classList.toggle('show');

  });

}

