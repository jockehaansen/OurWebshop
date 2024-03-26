const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('productId');

// hämtar den specifika produkten genom produktId
fetch(`https://fakestoreapi.com/products/${productId}`)
            .then((response) => response.json())
            .then((product) => {
                renderProduct(product);
            })
            .catch((error) => {
                console.error('Error fetching product details:', error);
            });


// hämtar den specifika produkten genom produktId
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
