const { Sequelize, DataTypes } = require('sequelize');

const db = new Sequelize('shopdb', 'myuser', 'mypass', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    min: 0,
    max: 5,
  },
});

const User = db.define('users', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Product = db.define('products', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  manufacturer: DataTypes.STRING,
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 0.0,
  },
});

db.sync()
  .then(() => console.log('db has been synced'))
  .catch((e) => console.error('error creating db'));

module.exports = {
  User,
  Product,
};
