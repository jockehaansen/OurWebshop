
//12 produkter lagrade i ett array
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


