// JavaScript to handle adding items to the shopping cart

const cartItems = [];

function addToCart() {
    // Get product details (for simplicity, we'll use static data)
    const productName = document.querySelector('.product-title').textContent;
    const productPrice = document.querySelector('.product-price').textContent;

    // Add the product to the cart array
    cartItems.push({ name: productName, price: productPrice });

    // Update the cart UI
    updateCartUI();
}

function updateCartUI() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear existing items

    // Loop through the cart items and add them to the UI
    cartItems.forEach((item, index) => {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${item.name} - ${item.price}`;
        cartItemsContainer.appendChild(cartItem);
    });
}
