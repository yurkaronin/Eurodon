'use strict';

// Слайдер в первом экране страниц
const firstSwiper = document.querySelector('.first-slider');
if (firstSwiper) {
  var swiper1 = new Swiper(".first-slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".first-slider__pagination",
      clickable: true,
    },
  });
}

// слайдер по направлениям услуг с иконками
const directionsSwiper = document.querySelector('.directions-slider__swiper');
if (directionsSwiper) {
  var swiper2 = new Swiper(".directions-slider__swiper", {
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      1150: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
      1400: {
        slidesPerView: 5,
        spaceBetween: 32,
      }
    },
    slidesPerGroup: 1,
    loopFillGroupWithBlank: true,
    loop: true,
    navigation: {
      nextEl: ".directions-slider-next",
      prevEl: ".directions-slider-prew"
    },
    pagination: {
      el: ".directions__pagination",
      clickable: true,
    },
  });
}

// Слайдер с текстовыми отзывами
const reviewsSwiper = document.querySelector('.main-reviews-swiper');
if (reviewsSwiper) {
var swiper3 = new Swiper(".main-reviews-swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".reviews-button-next",
    prevEl: ".reviews-button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".reviews-pagination",
    clickable: true,
  },
});
}

// Кастомный select для новых страниц
const element = document.querySelector('.custom-select');
if (element) {
const defaultSelect = () => {
  const example = new Choices(element, {
    itemSelectText: '',
    searchEnabled: false,
    placeholder: true,
  });
};

  defaultSelect();
}



// прилипающее меню в шапке
window.onscroll = function showHeader() {
  let header = document.querySelector('.header');

  if (window.pageYOffset > header.offsetHeight) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}

// кнопка меню
const menuButton = document.querySelector('.menu-button');
if (menuButton) {
  const mainMenu = document.querySelector('.main-nav');
  menuButton.addEventListener('click', function (r) {
    document.body.classList.toggle('custom-lock');
    menuButton.classList.toggle('active');
    mainMenu.classList.toggle('show');
  });
}

// кнопка аккордеона в меню
var subList = document.querySelectorAll(".main-nav__sublist");
var subMenuButton = document.querySelectorAll('.submenu-button').forEach((item) =>
  item.addEventListener('click', () => {
    item.classList.toggle('active');
    subList.classList.toggle('active');
  })
);
