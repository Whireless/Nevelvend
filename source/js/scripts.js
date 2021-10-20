const navMain = document.querySelector('.main-nav__list');
const navBtn = document.querySelector('.main-nav__menu-button');
const navHead = document.querySelector('.main-nav__button-block');

navBtn.addEventListener('click', function() {
  navMain.classList.toggle('main-nav__list--open')
  navHead.classList.toggle('main-nav__button-block--open')
});
