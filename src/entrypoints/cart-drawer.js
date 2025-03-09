document.addEventListener('DOMContentLoaded', function () {
  function openDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('drawer-overlay');
    drawer.classList.remove('translate-x-full');
    drawer.classList.add('translate-x-0');

    if (overlay) {
      overlay.classList.remove('hidden', 'pointer-events-none');
      overlay.classList.add('block', 'pointer-events-auto');
    }
  }

  function closeDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('drawer-overlay');
    drawer.classList.remove('translate-x-0');
    drawer.classList.add('translate-x-full');

    if (overlay) {
      overlay.classList.remove('block', 'pointer-events-auto');
      overlay.classList.add('hidden', 'pointer-events-none');
    }
  }

  const openButton = document.querySelectorAll('[data-drawer-show="cart-drawer"]');
  const closeButton = document.querySelectorAll('[data-drawer-hide="cart-drawer"]');

  openButton.forEach((button) =>
    button.addEventListener('click', function (e) {
      e.stopPropagation();
      openDrawer();
    }),
  );

  closeButton.forEach((button) =>
    button.addEventListener('click', function () {
      closeDrawer();
    }),
  );

  const overlay = document.getElementById('drawer-overlay');
  overlay.addEventListener('click', function () {
    closeDrawer();
  });

  function updateCartItemCounts(count) {
    document.querySelectorAll('#cart-count').forEach((el) => {
      el.textContent = `(${count})`;
    });
  }

  async function updateCartDrawer() {
    const res = await fetch('?snippet_id=cart-drawer-items');
    const text = await res.text();

    const html = document.createElement('div');
    html.innerHTML = text;

    const newBox = html.querySelector('#cart-drawer-items').innerHTML;
    document.querySelector('#cart-drawer-items').innerHTML = newBox;

    updateProductQuantities();
    addRemoveItemListeners();
  }

  function updateProductQuantities() {
    const quantitySelectors = document.querySelectorAll('#cart-drawer-quantity-selector');

    quantitySelectors.forEach((button) => {
      button.addEventListener('click', async () => {
        const rootItem = button.parentElement.parentElement.parentElement;
        const key = rootItem.getAttribute('data-line-item-key');

        const currentQuantity = Number(button.parentElement.querySelector('input').value);

        const isPlus = button.getAttribute('data-selector') === 'plus';
        const isMinus = button.getAttribute('data-selector') === 'minus';

        const newQuantity = isPlus ? currentQuantity + 1 : isMinus ? currentQuantity - 1 : currentQuantity;

        try {
          const res = await fetch('/cart/update.js', {
            method: 'post',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ updates: { [key]: newQuantity } }),
          });

          const cart = await res.json();
          updateCartItemCounts(cart.item_count);
          updateCartDrawer();
        } catch (err) {
          console.error(err);
        }
      });
    });
  }

  function addRemoveItemListeners() {
    const removeButtons = document.querySelectorAll('#cart-drawer-remove-item');

    removeButtons.forEach((button) => {
      button.addEventListener('click', async (event) => {
        event.preventDefault();

        const lineItemKey = button.getAttribute('data-line-item-key');

        try {
          const res = await fetch('/cart/update.js', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify({ updates: { [lineItemKey]: 0 } }),
          });

          const cart = await res.json();
          updateCartItemCounts(cart.item_count);
          updateCartDrawer();
        } catch (error) {
          console.error('Failed to remove item:', error);
        }
      });
    });
  }

  updateProductQuantities();
  addRemoveItemListeners();

  const addForm = document.querySelectorAll(`form[action="/cart/add"], form[action="${window.routes.cart_add_url}"]`);
  addForm.forEach((form) => {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const submitButton = form.querySelector('button[type="submit"]');
      submitButton.classList.add('btn-loading');
      submitButton.disabled = true;

      const formData = new FormData(form);

      try {
        const response = await fetch('/cart/add.js', {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json',
          },
        });

        if (response.ok) {
          const cartResponse = await fetch('/cart.js');
          const cart = await cartResponse.json();

          updateCartItemCounts(cart.item_count);

          updateCartDrawer();
          openDrawer();
        } else {
          console.error('Failed to add item to cart', response);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        submitButton.classList.remove('btn-loading');
        submitButton.disabled = false;
      }
    });
  });
});
