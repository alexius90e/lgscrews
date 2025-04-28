const headerBurger = document.querySelector('.header__controls-burger');
const headerMenu = document.querySelector('.header__menu');

if (headerBurger && headerMenu) {
  headerBurger.addEventListener('click', (event) => {
    const isActive = event.currentTarget.classList.contains('active');

    if (isActive) {
      headerBurger.classList.remove('active');
      headerMenu.classList.remove('active');
    } else {
      headerBurger.classList.add('active');
      headerMenu.classList.add('active');
    }
  });

  headerMenu.addEventListener('click', (event) => {
    const isLayout = event.target === event.currentTarget;
    const isNavlink = event.target.classList.contains('header__nav-link');
    const isPhone = event.target.classList.contains('header__callback-phone');
    const isCallbackBtn = event.target.classList.contains('header__callback-button');
    const isEmail = event.target.classList.contains('header__contacts-email');

    if (isLayout || isNavlink || isPhone || isCallbackBtn || isEmail) {
      headerBurger.classList.remove('active');
      headerMenu.classList.remove('active');
    }
  });
}

/// callback modal

const modals = document.querySelectorAll('.modal');
const modalCallback = document.querySelector('.modal-callback');
const modalThanks = document.querySelector('.modal-thanks');
const callbackButtons = document.querySelectorAll('.callback-button');
const modalCallbackForm = document.querySelector('.modal-callback__form');

callbackButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (modalCallback) {
      modalCallback.classList.add('active');
    }
  });
});

modals.forEach((modal) => {
  modal.addEventListener('click', (event) => {
    const isLayout = event.target === event.currentTarget;
    const isClose = event.target.classList.contains('modal__close');

    if (isLayout || isClose) {
      event.currentTarget.classList.remove('active');
    }
  });
});

if (modalCallbackForm) {
  modalCallbackForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (modalCallback) modalCallback.classList.remove('active');
    if (modalThanks) modalThanks.classList.add('active');
  });
}

/// product-info

const productThumbsSwiperEl = document.querySelector('.product-info__gallery-thumbs .swiper');
const productMainSwiperEl = document.querySelector('.product-info__gallery-main .swiper');
const productThumbsSwiperPrevEl = document.querySelector('.product-info__gallery-thumbs-prev');
const productThumbsSwiperNextEl = document.querySelector('.product-info__gallery-thumbs-next');

if (
  productThumbsSwiperEl &&
  productMainSwiperEl &&
  productThumbsSwiperPrevEl &&
  productThumbsSwiperNextEl
) {
  const productThumbsSwiper = new Swiper(productThumbsSwiperEl, {
    spaceBetween: 4,
    slidesPerView: 1,
    breakpoints: {
      320: {
        slidesPerView: 4,
      },
      480: {
        slidesPerView: 5,
      },
      768: {
        slidesPerView: 6,
      },
    },
    freeMode: true,
    watchSlidesProgress: true,
  });

  const productMainSwiper = new Swiper(productMainSwiperEl, {
    spaceBetween: 10,
    navigation: {
      prevEl: productThumbsSwiperPrevEl,
      nextEl: productThumbsSwiperNextEl,
    },
    thumbs: {
      swiper: productThumbsSwiper,
    },
  });
}

/// labeled-input_password

const labeledPasswordInputEls = document.querySelectorAll('.labeled-input_password');

labeledPasswordInputEls.forEach((labeledInputEl) => {
  labeledInputEl.addEventListener('click', (event) => {
    const isShowEl = event.target.classList.contains('labeled-input__show');
    const inputEl = event.currentTarget.querySelector('.labeled-input__input');

    if (isShowEl && inputEl) {
      if (inputEl.getAttribute('type') === 'text') {
        inputEl.setAttribute('type', 'password');
      } else {
        inputEl.setAttribute('type', 'text');
      }
    }
  });
});
