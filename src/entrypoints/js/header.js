document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMenuButton = document.getElementById('close-mobile-menu');
  const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

  function openMenu() {
    document.body.style.overflow = 'hidden';

    mobileMenu.classList.remove('-translate-x-full');
    mobileMenu.classList.add('translate-x-0');

    if (mobileMenuOverlay) {
      mobileMenuOverlay.classList.remove('hidden');
      mobileMenuOverlay.classList.add('block');
    }
  }

  function closeMenu() {
    document.body.style.overflow = '';

    mobileMenu.classList.remove('translate-x-0');
    mobileMenu.classList.add('-translate-x-full');

    if (mobileMenuOverlay) {
      mobileMenuOverlay.classList.remove('block');
      mobileMenuOverlay.classList.add('hidden');
    }
  }

  menuButton.addEventListener('click', (e) => {
    e.stopPropagation();
    openMenu();
  });

  closeMenuButton.addEventListener('click', closeMenu);

  // Fermer le menu lorsqu'on clique sur l'overlay
  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', closeMenu);
  }

  document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && e.target !== menuButton) {
      closeMenu();
    }
  });
});
