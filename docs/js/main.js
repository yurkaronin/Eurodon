"use strict";function _defineProperty(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}var swiper1,firstSwiper=document.querySelector(".first-slider");firstSwiper&&(swiper1=new Swiper(".first-slider",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".first-slider__pagination",clickable:!0}}));var swiper2,directionsSwiper=document.querySelector(".directions-slider__swiper");directionsSwiper&&(swiper2=new Swiper(".directions-slider__swiper",{breakpoints:{320:{slidesPerView:2,spaceBetween:30},640:{slidesPerView:3,spaceBetween:16},1150:{slidesPerView:4,spaceBetween:24},1400:{slidesPerView:5,spaceBetween:32}},slidesPerGroup:1,loopFillGroupWithBlank:!0,loop:!0,navigation:{nextEl:".directions-slider-next",prevEl:".directions-slider-prew"},pagination:{el:".directions__pagination",clickable:!0}}));var _Swiper,swiper3,reviewsSwiper=document.querySelector(".main-reviews-swiper");reviewsSwiper&&(swiper3=new Swiper(".main-reviews-swiper",(_defineProperty(_Swiper={slidesPerView:1,spaceBetween:20,loop:!0,navigation:{nextEl:".reviews-button-next",prevEl:".reviews-button-prev"}},"slidesPerView",1),_defineProperty(_Swiper,"spaceBetween",30),_defineProperty(_Swiper,"freeMode",!0),_defineProperty(_Swiper,"pagination",{el:".reviews-pagination",clickable:!0}),_Swiper)));var elements=document.querySelectorAll(".custom-select");if(elements)for(var i=0,customName=1;i<elements.length;i++){elements[i].setAttribute("data-name","select".concat(customName));var nameSelect=elements[i].getAttribute("data-name"),example=new Choices("[data-name='".concat(nameSelect,"']"),{itemSelectText:"",searchEnabled:!1,placeholder:!1});customName++}window.onscroll=function(){var e=document.querySelector(".header");window.pageYOffset>e.offsetHeight?e.classList.add("sticky"):e.classList.remove("sticky")};var mainMenu,menuButton=document.querySelector(".menu-button");menuButton&&(mainMenu=document.querySelector(".main-nav"),menuButton.addEventListener("click",function(e){document.body.classList.toggle("custom-lock"),menuButton.classList.toggle("active"),mainMenu.classList.toggle("show")}));var subList=document.querySelectorAll(".main-nav__sublist"),subMenuButton=document.querySelectorAll(".submenu-button").forEach(function(e){return e.addEventListener("click",function(){e.classList.toggle("active"),subList.classList.toggle("active")})});