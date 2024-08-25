document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cartItems = document.getElementById('cart-items');
  const totalElement = document.getElementById('total');
  let total = 0;

  addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
          const name = button.getAttribute('data-name');
          const price = parseFloat(button.getAttribute('data-price'));

          const listItem = document.createElement('li');
          listItem.textContent = `${name} - $${price.toFixed(2)}`;
          cartItems.appendChild(listItem);

          total += price;
          totalElement.textContent = total.toFixed(2);
      });
  });
});