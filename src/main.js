import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

(() => {
  const mobileMenu = document.querySelector('.mob-menu');
  const openMenuBtn = document.querySelector('.menu-btn');
  const closeMenuBtn = document.querySelector('.menu-close-btn');
  const closeMenuLink = document.querySelectorAll('.close-menu-link');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    if (!isMenuOpen) {
      disableBodyScroll(mobileMenu);
    } else {
      enableBodyScroll(mobileMenu);
    }
  };
  closeMenuLink.forEach(item => item.addEventListener('click', toggleMenu));
  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    enableBodyScroll(mobileMenu);
  });
})();
