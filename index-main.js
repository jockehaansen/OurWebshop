
//12 produkter lagrade i ett array
/*
fetch('https://fakestoreapi.com/products?limit=12')
.then(response => response.json())
.then(data => {
    let products = []

    
    data.forEach(product => {
        
        let productInfo = {
            id: product.id,
            title: product.title,
            price: product.price,
            description: product.description,
            category: product.category,
            image: product.image
        };

        products.push(productInfo);
    });

    console.log(products);
})
.catch(error => {
    console.log('Error fetching data:', error);
});

//Skicka med produkten till nästa sida
function openOrderPageWithProduct(){
    
}



//Hämtar produkter och ritar upp alla element och information direkt utan lagring
function getProducts() {
    const images = document.getElementsByClassName('card-image-top');
    const titles = document.getElementsByClassName('card-title')
    const descriptions = document.getElementsByClassName('card-text')
    const price = document.getElementsByClassName('item-price')
    
    fetch('https://fakestoreapi.com/products?limit=12')
        .then(res => res.json())
        .then(products => {
            for (let index = 0; index < products.length; index++) {
                images[index].src = products[index].image;
                titles[index].innerHTML = products[index].title
                descriptions[index].innerHTML = products[index].description
                price[index].innerHTML = products[index].price + '$'
                
            }
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
}

*/



//New resposive way

//fetch
fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        
        let row
        // Iterate through the products and create cards
        data.forEach((product, index) => {
            if(index % 4 === 0){
                row = document.createElement('div')
                row.classList.add('row')
                row.classList.add('product-container')
                row.classList.add('mb-4')
                document.getElementById('main-container').appendChild(row)
            }
            console.log(product)
            renderProducts(product, row)
        })
    })
    .catch(error => {
        console.error('Error fetching products:', error);
    });



//renderProducts
function renderProducts(product, row){
    
    console.log(product);
    const col = document.createElement('div')
    col.classList.add('col-sm-6')
    col.classList.add('col-md-3')
    col.classList.add('col-lg-3')

    const card = document.createElement('div')
    card.classList.add('card')

    const cardContent = `
    <img src="${product.image}" class="card-img-top" alt="${product.title}">
        <div class="card-body">
            <h6 class="card-title">${product.title}</h6>
            <p class="card-text">${product.description}</p>
            <div class="card-button">
                <h6 class="item-price">${product.price}</h6>
                <form>
                    <button type="button" id="addToCartBtn">Buy Now</button>
                </form>
            </div>
        </div>`

    card.innerHTML = cardContent

    col.appendChild(card)

    row.appendChild(col)

}



