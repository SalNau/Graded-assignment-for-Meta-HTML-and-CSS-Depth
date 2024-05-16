function toggleCart() {
    const cartContainer = document.querySelector('.cart-container');
    cartContainer.classList.toggle('show-cart');
}

// Example function to add items to the cart and update count
function addToCart() {
    const cartCountElement = document.querySelector('.cart-count');
    let cartCount = parseInt(cartCountElement.textContent);
    cartCount++;
    cartCountElement.textContent = cartCount;

    // Select the product details
    const productDetails = this.parentElement.parentElement;
    const productName = productDetails.querySelector('.product-name').textContent;
    const productPrice = productDetails.querySelector('.product-price').textContent;
    const productImageSrc = productDetails.querySelector('img').src;

    // Select the cart container
    const cartContainer = document.querySelector('.cart-items');

    // Create a new cart item element
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');

    // Create an image element for the product
    const productImage = document.createElement('img');
    productImage.src = productImageSrc;
    productImage.alt = productName;
    productImage.classList.add('product-image');
    cartItem.appendChild(productImage);

    // Create a div for product details
    const productDetailsDiv = document.createElement('div');
    productDetailsDiv.classList.add('product-details');

    // Add product name and price to product details div
    const productNameElement = document.createElement('span');
    productNameElement.textContent = productName;
    productDetailsDiv.appendChild(productNameElement);

    const productPriceElement = document.createElement('span');
    productPriceElement.textContent = productPrice;
    productDetailsDiv.appendChild(productPriceElement);

    // Add increment and decrement buttons
    const decrementButton = document.createElement('button');
    decrementButton.textContent = '-';
    decrementButton.classList.add('quantity-button');
    decrementButton.addEventListener('click', decrementQuantity);
    productDetailsDiv.appendChild(decrementButton);

    const quantityElement = document.createElement('span');
    quantityElement.textContent = 1;
    quantityElement.classList.add('quantity');
    productDetailsDiv.appendChild(quantityElement);

    const incrementButton = document.createElement('button');
    incrementButton.textContent = '+';
    incrementButton.classList.add('quantity-button');
    incrementButton.addEventListener('click', incrementQuantity);
    productDetailsDiv.appendChild(incrementButton);

    cartItem.appendChild(productDetailsDiv);

    // Append the cart item to the cart container
    cartContainer.appendChild(cartItem);
}

// Function to increment the quantity of a product in the cart
function incrementQuantity() {
    const quantityElement = this.parentElement.querySelector('.quantity');
    let quantity = parseInt(quantityElement.textContent);
    quantity++;
    quantityElement.textContent = quantity;
}

// Function to decrement the quantity of a product in the cart
function decrementQuantity() {
    const quantityElement = this.parentElement.querySelector('.quantity');
    let quantity = parseInt(quantityElement.textContent);
    quantity--;
    if (quantity <= 0) {
        // Remove the product from the cart if the quantity is zero or negative
        const cartItem = this.parentElement.parentElement;
        cartItem.remove();
        updateCartCount();
    } else {
        quantityElement.textContent = quantity;
    }
}

// Function to update the cart count
function updateCartCount() {
    const cartCountElement = document.querySelector('.cart-count');
    const cartItems = document.querySelectorAll('.cart-item');
    cartCountElement.textContent = cartItems.length;
}

// Add click event listener to the "Add to Cart" buttons
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', addToCart);
});




if (typeof(Storage) !== "undefined") {
    // Local storage is supported
} else {
    // Local storage is not supported
    console.error("Local storage is not supported in this browser.");
}