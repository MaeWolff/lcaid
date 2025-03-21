document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMenuButton = document.getElementById('close-mobile-menu');
  const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
  const shopLink = document.getElementById('shop-link');
  const shopSubmenu = document.getElementById('shop-submenu');
  const closeShopSubmenuButton = document.getElementById('close-shop-submenu');
  const backToMainMenuButton = document.getElementById('back-to-main-menu');

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

    // Assurez-vous que le sous-menu de la boutique est également fermé
    if (shopSubmenu) {
      shopSubmenu.classList.remove('translate-x-0');
      shopSubmenu.classList.add('-translate-x-full');
    }

    if (mobileMenuOverlay) {
      mobileMenuOverlay.classList.remove('block');
      mobileMenuOverlay.classList.add('hidden');
    }
  }

  function openShopSubmenu() {
    // Ouvrir le sous-menu de la boutique
    shopSubmenu.classList.remove('-translate-x-full');
    shopSubmenu.classList.add('translate-x-0');
  }

  function closeShopSubmenu() {
    // Fermer seulement le sous-menu de la boutique
    shopSubmenu.classList.remove('translate-x-0');
    shopSubmenu.classList.add('-translate-x-full');
  }

  menuButton.addEventListener('click', (e) => {
    e.stopPropagation();
    openMenu();
  });

  closeMenuButton.addEventListener('click', closeMenu);

  // Gestion du clic sur le lien de la boutique
  if (shopLink) {
    shopLink.addEventListener('click', (e) => {
      e.stopPropagation();
      openShopSubmenu();
    });
  }

  // Gestion du bouton de fermeture du sous-menu boutique
  if (closeShopSubmenuButton) {
    closeShopSubmenuButton.addEventListener('click', (e) => {
      e.stopPropagation();
      closeMenu(); // Fermer le menu principal et le sous-menu
    });
  }

  // Gestion du bouton retour au menu principal
  if (backToMainMenuButton) {
    backToMainMenuButton.addEventListener('click', (e) => {
      e.stopPropagation();
      closeShopSubmenu(); // Fermer seulement le sous-menu et revenir au menu principal
    });
  }

  // Fermer le menu lorsqu'on clique sur l'overlay
  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', closeMenu);
  }

  document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !shopSubmenu.contains(e.target) && e.target !== menuButton) {
      closeMenu();
    }
  });
});
