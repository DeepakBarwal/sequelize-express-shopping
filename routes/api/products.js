const route = require('express').Router();
const { Product } = require('../../db');

route.get('/', (req, res) => {
  // Get all products
  Product.findAll()
    .then((products) => {
      res.status(200).send(products);
    })
    .catch((err) => {
      res.status(500).send({
        error: "couldn't retrieve products",
      });
    });
});

route.post('/', (req, res) => {
  // Validate the values
  if (isNaN(req.body.price)) {
    return res.status(403).send({
      error: 'price is not a valid number',
    });
  }

  // Add a new Product
  Product.create({
    name: req.body.name,
    manufacturer: req.body.manufacturer,
    price: parseFloat(req.body.price),
  })
    .then((product) => {
      res.status(201).send(product);
    })
    .catch((err) => {
      res.status(501).send({
        error: 'error adding product',
      });
    });
});

module.exports = route;
