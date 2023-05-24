// cart.js

// Cart data structure
let cart = [];

// Retrieve cart data from local storage, if available
const cartData = localStorage.getItem('cart');
if (cartData) {
    cart = JSON.parse(cartData);
    updateCartCounter();
}

// Function to add a product to the cart
function addToCart(product) {
    cart.push(product);
    updateCartCounter();
    saveCartToLocalStorage();
}

// Function to update the cart counter
function updateCartCounter() {
    const cartCounter = document.getElementById('cart-counter');
    cartCounter.textContent = cart.length.toString();
}

// Function to save cart data to local storage
function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}



// Event listener for the cart image click
const cartImage = document.getElementById('cart-image');
cartImage.addEventListener('click', showCart);

// Event listener for the "Add to cart" buttons
const addToCartButtons = document.getElementsByClassName('add-to-cart-button');
for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener('click', function(event) {
        const product = JSON.parse(event.target.dataset.product);
        addToCart(product);
    });
}

// Function to clear the cart
function clearCart() {
    cart = []; // Reset cart to an empty array
    updateCartCounter(); // Update the cart counter to display zero
    saveCartToLocalStorage(); // Save the updated cart data to local storage
}


// Event listener for the cart preview image click

document.addEventListener("DOMContentLoaded", function() {
    const cartPreviewImage = document.getElementById("cart-preview");
    cartPreviewImage.addEventListener('click', function() {

        const cartItems = document.getElementById('cart-items');

        // Check if 'cart-items' element exists
        if (cartItems) {
            // Clear previous cart items
            cartItems.innerHTML = '';

            cart.forEach(product => {
                const cartItem = document.createElement('div');
                cartItem.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>Price: $${product.price}</p>
          `;
                cartItems.appendChild(cartItem);
            });
        }
        console.log("Image has been clicked");
    });

})