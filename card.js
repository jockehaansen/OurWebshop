// Extract productId from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('productId');

// Check if productId is null or empty
if (!productId) {
    console.error('Product ID is missing.');
} else {
    // Fetch the specific product using productId
    fetch(`https://fakestoreapi.com/products/${productId}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse response as JSON
        })
        .then((product) => {
            console.log('Product details:', product); // Log the product details
            renderProduct(product);
        })
        .catch((error) => {
            console.error('Error fetching product details:', error);
        });
}

// Function to render product card
function renderProduct(product) {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardContent = `
        <img src="${product.image}" class="card-image-top w-25 h-25" alt="${product.title}">
        <div class="card-body">
            <h6 class="card-title">${product.title}</h6>
            <div class="card-button">
                <h6 class="item-price">${product.price} $</h6>
            </div>
        </div>`;

    card.innerHTML = cardContent;
    document.getElementById('productDisplay').appendChild(card);
}
