const page = document.querySelector('body');

const nav = page.querySelector('.main-nav');
const navHead = nav.querySelector('.main-nav__button-block'),
      navBtn = nav.querySelector('.main-nav__menu-button'),
      navMain = nav.querySelector('.main-nav__list'),
      navElem = navMain.querySelectorAll('.main-nav__item a');

const order = page.querySelector('.order'),
      orderButtons = order.querySelectorAll('.order__subtitle'),
      orderBlocks = order.querySelectorAll('.order__info'),
      smlBtnUp = order.querySelector('.order__button--small-up'),
      smlBtnDown = order.querySelector('.order__button--small-down'),
      bigBtnUp = order.querySelector('.order__button--big-up'),
      bigBtnDown = order.querySelector('.order__button--big-down');

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

// Блоки с информацией о заказе
for (let i = 0; i < orderButtons.length; i++) {
  orderButtons[i].addEventListener('click', function () {
    orderButtons[i].classList.add('order__subtitle--active')
    orderBlocks[i].classList.add('order__info--active')

    for (let j = 0; j < orderButtons.length; j++) {
      if (i !== j) {
        orderButtons[j].classList.remove('order__subtitle--active')
        orderBlocks[j].classList.remove('order__info--active')
      }
    }
  })
};
