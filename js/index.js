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
