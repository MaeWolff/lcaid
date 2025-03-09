document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMenuButton = document.getElementById('close-mobile-menu');

  function openMenu() {
    document.body.style.overflow = 'hidden';

    mobileMenu.classList.remove('-translate-x-full');
    mobileMenu.classList.add('translate-x-0');
  }

  function closeMenu() {
    document.body.style.overflow = '';

    mobileMenu.classList.remove('translate-x-0');
    mobileMenu.classList.add('-translate-x-full');
  }

  menuButton.addEventListener('click', (e) => {
    e.stopPropagation();
    openMenu();
  });

  closeMenuButton.addEventListener('click', closeMenu);

  document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && e.target !== menuButton) {
      closeMenu();
    }
  });
});
