document.addEventListener('DOMContentLoaded', function() {
    // Hämta URL-parametrar
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const phoneNumber = urlParams.get('phoneNumber');
    const address = urlParams.get('address');
    const email = urlParams.get('email');
    const productId = urlParams.get('productId');

    // Visa användarinformation och produktinformation på sidan
    

    // Hämta produktinformation från API:et baserat på produktens ID
    fetch(`https://fakestoreapi.com/products/${productId}`)
        .then((response) => response.json())
        .then((product) => {
            renderProduct(product);
        })
        .catch((error) => {
            console.error('Error fetching product details:', error);
        });

    // Funktion för att rendera produktinformation på sidan
    function renderProduct(product) {
        const card = document.createElement('div');
        card.classList.add('card');
                
        const cardContent = `
    <img src="${product.image}" class="card-image-top" alt="${product.title}">
        <div class="card-body">
            <h6 class="card-title">${product.title}</h6>
            <p class="card-text">${product.description}</p>
            <div class="card-button">
                <h6 class="item-price">${product.price} $</h6>                
                <a href="form.html?productId=${product.id}">              
            </div>
        </div>`

                
        card.innerHTML = cardContent;
        document.getElementById('productDisplay').appendChild(card);
    }
});
