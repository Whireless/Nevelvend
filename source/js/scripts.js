'use strict';

const navMain = document.querySelector('.main-nav__list'),
      navElem = document.querySelectorAll('.main-nav__item a'),
      navBtn = document.querySelector('.main-nav__menu-button'),
      navHead = document.querySelector('.main-nav__button-block');

const ordBtn1 = document.querySelector('.order__title--specific'),
      ordBtn2 = document.querySelector('.order__title--box'),
      ordBtn3 = document.querySelector('.order__title--buy'),
      zone1 = document.querySelector('.order__specifications'),
      zone2 = document.querySelector('.order__box'),
      zone3 = document.querySelector('.order__buy');


// Мобильное меню

navBtn.addEventListener('click', function() {
  navMain.classList.toggle('main-nav__list--open')
  navHead.classList.toggle('main-nav__button-block--open')
});

navElem.forEach(a => {
  a.addEventListener('click', function() {
    if(navMain.classList.contains('main-nav__list--open')) {
      navMain.classList.remove('main-nav__list--open')
      navHead.classList.remove('main-nav__button-block--open')
    }
  })
});

// Кнопки в блоке заказа

zone1.classList.add('order__specifications--active');

ordBtn1.addEventListener('click', function() {
  ordBtn1.classList.add('order__title--specific--active')
  ordBtn2.classList.remove('order__title--box--active')
  ordBtn3.classList.remove('order__title--buy--active')

  zone1.classList.add('order__specifications--active')
  zone2.classList.remove('order__box--active')
  zone3.classList.remove('order__buy--active')
});

ordBtn2.addEventListener('click', function() {
  ordBtn2.classList.add('order__title--box--active')
  ordBtn1.classList.remove('order__title--specific--active')
  ordBtn3.classList.remove('order__title--buy--active')

  zone2.classList.add('order__box--active')
  zone1.classList.remove('order__specifications--active')
  zone3.classList.remove('order__buy--active')
});

ordBtn3.addEventListener('click', function() {
  ordBtn3.classList.add('order__title--buy--active')
  ordBtn1.classList.remove('order__title--specific--active')
  ordBtn2.classList.remove('order__title--box--active')

  zone3.classList.add('order__buy--active')
  zone1.classList.remove('order__specifications--active')
  zone2.classList.remove('order__box--active')
});