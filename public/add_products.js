$(function () {
  let productName = $('#productName');
  let productManufacturer = $('#productManufacturer');
  let productPrice = $('#productPrice');
  let btnProductAdd = $('#btnProductAdd');
  btnProductAdd.click(function () {
    addProduct(
      productName.val(),
      productManufacturer.val(),
      productPrice.val(),
      function (addedProduct) {
        alert('Added ' + addedProduct.name + ' to Database.');
      }
    );
  });
});
