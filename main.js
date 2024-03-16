
/*function getProducts(){
    let products = []
    const response = fetch('https://fakestoreapi.com/products?limit=12')
                    .then(res => res.json())
                    .then(json => products.push(json))

    
    
    console.log(products)
            
    
}

*/

const images = document.getElementsByClassName('card-image-top')

for (let index = 0; index < products.length; index++) {
    images[index].src = products[index].image
    
}

function getProducts() {
    const images = document.getElementsByClassName('card-image-top');
    const titles = document.getElementsByClassName('card-title')
    const descriptions = document.getElementsByClassName('card-text')
    const price = document.getElementsByClassName('item-price')
    
    fetch('https://fakestoreapi.com/products?limit=12')
        .then(res => res.json())
        .then(products => {
            // Once data is fetched, iterate through each product and update the corresponding image
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