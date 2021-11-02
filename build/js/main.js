'use strict';

// слайдер на главной странице
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

// слайдер по направлениям услуг
const directionsSwiper = document.querySelector('.directions-slider__swiper');
if (directionsSwiper) {
  var swiper2  = new Swiper(".directions-slider__swiper", {
  slidesPerView: 5,
  spaceBetween: 32,
  slidesPerGroup: 1,
  loopFillGroupWithBlank: true,

  navigation: {
    nextEl: ".directions-slider-next",
    prevEl: ".directions-slider-prew"
  }
});
}

// Слайдер с отзывами
// const reviewsSwiper = document.querySelector('.main-reviews-swiper');
// if (reviewsSwiper) {

// }

var swiper3 = new Swiper(".main-reviews-swiper", {
  // cssMode: true,
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // mousewheel: true,
  // keyboard: true,
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    // clickable: true,
  },
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
    // document.body.classList.toggle('custom-lock');
    menuButton.classList.toggle('active');
    mainMenu.classList.toggle('show');

  });

}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4vLyDRgdC70LDQudC00LXRgCDQvdCwINCz0LvQsNCy0L3QvtC5INGB0YLRgNCw0L3QuNGG0LVcbmNvbnN0IGZpcnN0U3dpcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpcnN0LXNsaWRlcicpO1xuaWYgKGZpcnN0U3dpcGVyKSB7XG52YXIgc3dpcGVyMSA9IG5ldyBTd2lwZXIoXCIuZmlyc3Qtc2xpZGVyXCIsIHtcbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogXCIuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXG4gICAgcHJldkVsOiBcIi5zd2lwZXItYnV0dG9uLXByZXZcIixcbiAgfSxcbiAgcGFnaW5hdGlvbjoge1xuICAgIGVsOiBcIi5maXJzdC1zbGlkZXJfX3BhZ2luYXRpb25cIixcbiAgICBjbGlja2FibGU6IHRydWUsXG4gIH0sXG59KTtcbn1cblxuLy8g0YHQu9Cw0LnQtNC10YAg0L/QviDQvdCw0L/RgNCw0LLQu9C10L3QuNGP0Lwg0YPRgdC70YPQs1xuY29uc3QgZGlyZWN0aW9uc1N3aXBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXJlY3Rpb25zLXNsaWRlcl9fc3dpcGVyJyk7XG5pZiAoZGlyZWN0aW9uc1N3aXBlcikge1xuICB2YXIgc3dpcGVyMiAgPSBuZXcgU3dpcGVyKFwiLmRpcmVjdGlvbnMtc2xpZGVyX19zd2lwZXJcIiwge1xuICBzbGlkZXNQZXJWaWV3OiA1LFxuICBzcGFjZUJldHdlZW46IDMyLFxuICBzbGlkZXNQZXJHcm91cDogMSxcbiAgbG9vcEZpbGxHcm91cFdpdGhCbGFuazogdHJ1ZSxcblxuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiBcIi5kaXJlY3Rpb25zLXNsaWRlci1uZXh0XCIsXG4gICAgcHJldkVsOiBcIi5kaXJlY3Rpb25zLXNsaWRlci1wcmV3XCJcbiAgfVxufSk7XG59XG5cbi8vINCh0LvQsNC50LTQtdGAINGBINC+0YLQt9GL0LLQsNC80Lhcbi8vIGNvbnN0IHJldmlld3NTd2lwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1yZXZpZXdzLXN3aXBlcicpO1xuLy8gaWYgKHJldmlld3NTd2lwZXIpIHtcblxuLy8gfVxuXG52YXIgc3dpcGVyMyA9IG5ldyBTd2lwZXIoXCIubWFpbi1yZXZpZXdzLXN3aXBlclwiLCB7XG4gIC8vIGNzc01vZGU6IHRydWUsXG4gIHNsaWRlc1BlclZpZXc6IDEsXG4gIHNwYWNlQmV0d2VlbjogMjAsXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6IFwiLnN3aXBlci1idXR0b24tbmV4dFwiLFxuICAgIHByZXZFbDogXCIuc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXG4gIH0sXG4gIC8vIG1vdXNld2hlZWw6IHRydWUsXG4gIC8vIGtleWJvYXJkOiB0cnVlLFxuICBzbGlkZXNQZXJWaWV3OiAxLFxuICBzcGFjZUJldHdlZW46IDMwLFxuICBmcmVlTW9kZTogdHJ1ZSxcbiAgcGFnaW5hdGlvbjoge1xuICAgIGVsOiBcIi5zd2lwZXItcGFnaW5hdGlvblwiLFxuICAgIC8vIGNsaWNrYWJsZTogdHJ1ZSxcbiAgfSxcbn0pO1xuXG5cbi8vINCa0LDRgdGC0L7QvNC90YvQuSBzZWxlY3Qg0LTQu9GPINC90L7QstGL0YUg0YHRgtGA0LDQvdC40YZcbi8qIGNvbnN0IGRlZmF1bHRTZWxlY3QgPSAoKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tLXNlbGVjdCcpO1xuICBjb25zdCBleGFtcGxlID0gbmV3IENob2ljZXMoZWxlbWVudCwge1xuICAgIGl0ZW1TZWxlY3RUZXh0OiAnJyxcbiAgICBzZWFyY2hFbmFibGVkOiBmYWxzZSxcbiAgICBwbGFjZWhvbGRlcjogdHJ1ZSxcbiAgfSk7XG59O1xuXG5kZWZhdWx0U2VsZWN0KCk7ICovXG5cbi8vINC/0YDQuNC70LjQv9Cw0Y7RidC10LUg0LzQtdC90Y4g0LIg0YjQsNC/0LrQtVxud2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gc2hvd0hlYWRlcigpIHtcbiAgbGV0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcblxuICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gaGVhZGVyLm9mZnNldEhlaWdodCkge1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdzdGlja3knKTtcbiAgfSBlbHNlIHtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnc3RpY2t5Jyk7XG4gIH1cbn1cblxuLy8g0LrQvdC+0L/QutCwINC80LXQvdGOXG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtYnV0dG9uJyk7XG5pZiAobWVudUJ1dHRvbikge1xuICBjb25zdCBtYWluTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW5hdicpO1xuICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKHIpIHtcbiAgICAvLyBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2N1c3RvbS1sb2NrJyk7XG4gICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICBtYWluTWVudS5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG5cbiAgfSk7XG5cbn1cbiJdfQ==
