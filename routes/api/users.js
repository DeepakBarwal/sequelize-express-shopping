const { User } = require('../../db');
const route = require('express').Router();

route.get('/', (req, res) => {
  // We want to send an array of all users from our db
  User.findAll()
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((e) => {
      res.status(500).send({
        error: "Couldn't retrieve users",
      });
    });
});

route.post('/', (req, res) => {
  // we expect req to have the name in it. so we create a new user
  // id will be auto incremented
  User.create({
    name: req.body.name,
  })
    .then((user) => {
      res.status(201).send(user);
    })
    .catch((e) => {
      res.status(501).send({
        error: "Couldn't add new user",
      });
    });
});

module.exports = route;
