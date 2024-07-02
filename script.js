// Initialize cart array and other variables
let cart = [];
let cartTotal = 0;
const taxRate = 0.10; // 10% tax rate

// Function to add item to cart
function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

// Function to update cart items and counts
function updateCart() {
    const cartCount = document.getElementById('cart-count');

    // Update cart count
    cartCount.textContent = cart.length;

    // Save cart data to sessionStorage or localStorage if needed
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Initial update on page load
updateCart();


























