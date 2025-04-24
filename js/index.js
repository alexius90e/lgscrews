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
