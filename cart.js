// cart.js
const cart = [];
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartPopup = document.getElementById('cart-popup');

function addToCart(name, price) {
  cart.push({name, price});
  cartCount.textContent = cart.length;

  const div = document.createElement('div');
  div.className = 'cart-item';
  div.textContent = name + " - " + price + " грн";
  cartItems.appendChild(div);

  let total = cart.reduce((sum, item) => sum + item.price, 0);
  cartTotal.textContent = total;

  // Тут можна додати анімацію "літає у кошик" пізніше
}

function toggleCart() {
  cartPopup.style.display = cartPopup.style.display === 'block' ? 'none' : 'block';
}

function closeCart() {
  cartPopup.style.display = 'none';
}

document.getElementById('cart-icon').addEventListener('click', toggleCart);