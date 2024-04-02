let buyNowProductId

//fetch
fetch('https://fakestoreapi.com/products')
  .then((response) => response.json())
  .then((data) => {
    let row
    // Iterate through the products and create cards
    data.forEach((product, index) => {
      if (index % 4 === 0) {
        row = document.createElement('div')
        row.classList.add('row')
        row.classList.add('product-container')
        //row.classList.add('mb-4')
        document.getElementById('main-container').appendChild(row)
      }

      renderProducts(product, row)
    })
  })
  .catch((error) => {
    console.error('Error fetching products:', error)
  })

//dynamically set-up the productpage with as many products as we fetch
function renderProducts(product, row) {
  const col = document.createElement('div')
  col.classList.add('col-sm-6')
  col.classList.add('col-md-3')
  col.classList.add('col-lg-3')

  const card = document.createElement('div')
  card.classList.add('card')

  const cardContent = `
    <img src="${product.image}" class="card-image-top" alt="${product.title}">
        <div class="card-body">
            <h6 class="card-title">${product.title}</h6>
            <p class="card-text">${product.description}</p>
            <div class="card-button">
                <h6 class="item-price">${product.price} $</h6>                
                <a href="form.html?productId=${product.id}"><button class="addToCartBtn" >Buy Now</button><a/>                
            </div>
        </div>`

  card.innerHTML = cardContent
  col.appendChild(card)
  row.appendChild(col)
}
