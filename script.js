// Get all "Add to Cart" buttons
var addToCartButtons = document.querySelectorAll('.btn');

// Add event listener to each button
addToCartButtons.forEach(function(button) {
  button.addEventListener('click', function(event) {
    event.preventDefault();
    var productItem = this.parentNode;
    var productName = productItem.querySelector('h3').textContent;
    var productPrice = productItem.querySelector('.price').textContent;

    // Create a new cart item element
    var cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');

    // Create elements for product name, price, and remove button
    var productNameElement = document.createElement('h4');
    productNameElement.textContent = productName;

    var productPriceElement = document.createElement('p');
    productPriceElement.textContent = productPrice;

    var removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('btn-remove');

    // Append elements to cart item
    cartItem.appendChild(productNameElement);
    cartItem.appendChild(productPriceElement);
    cartItem.appendChild(removeButton);

    // Add cart item to the cart
    var cart = document.querySelector('.cart');
    cart.appendChild(cartItem);
  });
});

// Remove cart item when remove button is clicked
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('btn-remove')) {
    var cartItem = event.target.parentNode;
    var cart = document.querySelector('.cart');
    cart.removeChild(cartItem);
  }
});
