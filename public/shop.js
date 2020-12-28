function fetchProducts(done) {
  $.get('/api/products', function (data) {
    done(data);
  });
}

function addProduct(name, manufacturer, price, done) {
  $.post(
    '/api/products',
    {
      name: name,
      manufacturer: manufacturer,
      price: price,
    },
    function (data) {
      done(data);
    }
  );
}

function createProductCard(product) {
  return $(`<div class="col-4 card mx-2 p-2">
                  <h4 class="product-name">${product.name}</h4>
                  <div class="product-manufacturer">${product.manufacturer}</div>
                  <div class="row">
                      <div class="col m-3 p-3"><strong>Rs. ${product.price}</strong></div>
                      <button class="btn btn-primary col m-3">Buy</button>
                  </div>
              </div>`);
}
