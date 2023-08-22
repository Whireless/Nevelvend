const page = document.querySelector('body');

const nav = page.querySelector('.main-nav');
const navHead = nav.querySelector('.main-nav__button-block'),
      navBtn = nav.querySelector('.main-nav__menu-button'),
      navMain = nav.querySelector('.main-nav__list'),
      navElem = navMain.querySelectorAll('.main-nav__item a');

const order = page.querySelector('.order'),
      orderButtons = order.querySelectorAll('.order__subtitle'),
      orderBlocks = order.querySelectorAll('.order__info'),
      amountSmall = order.querySelector('.order__box-number--small'),
      smlTotal = order.querySelector('.order__small-total'),
      smlBtnUp = order.querySelector('.order__button--small-up'),
      smlBtnDown = order.querySelector('.order__button--small-down'),
      amountBig = order.querySelector('.order__box-number--big'),
      bigTotal = order.querySelector('.order__big-total'),
      bigBtnUp = order.querySelector('.order__button--big-up'),
      bigBtnDown = order.querySelector('.order__button--big-down'),
      totalInfo = order.querySelector('.order__total-price .blue-text');

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

// Сумма заказа
let bigPrice = 0;
let smallPrice = 0;
let totalPrice = 0;
let amountS = 0;
let amountB = 0;

smlBtnUp.onclick = () => {
  amountS++;
  smlBtnDown.disabled = false;
  smallPrice += 750;
  totalPrice += 750;
  amountSmall.textContent = amountS;
  smlTotal.textContent = `${smallPrice} руб.`;
  totalInfo.textContent = `${totalPrice} руб.`;
};

smlBtnDown.onclick = () => {
  amountS--;
  if (amountS === 0) {
    smlBtnDown.disabled = true;
  }
  smallPrice -= 750;
  totalPrice -= 750;
  amountSmall.textContent = amountS;
  smlTotal.textContent = `${smallPrice} руб.`;
  totalInfo.textContent = `${totalPrice} руб.`;
};

bigBtnUp.onclick = () => {
  amountB++;
  bigBtnDown.disabled = false;
  bigPrice += 6000;
  totalPrice += 6000;
  amountBig.textContent = amountB;
  bigTotal.textContent = `${bigPrice} руб.`;
  totalInfo.textContent = `${totalPrice} руб.`;
};

bigBtnDown.onclick = () => {
  amountB--;
  if (amountB === 0) {
    bigBtnDown.disabled = true;
  }
  bigPrice -= 6000;
  totalPrice -= 6000;
  amountBig.textContent = amountB;
  bigTotal.textContent = `${bigPrice} руб.`;
  totalInfo.textContent = `${totalPrice} руб.`;
};

window.onload = () => {
  amountS = 0;
  amountB = 0;
  amountS === 0 ? smlBtnDown.disabled = true : smlBtnDown.disabled = false;
  amountB === 0 ? bigBtnDown.disabled = true : bigBtnDown.disabled = false;
};
