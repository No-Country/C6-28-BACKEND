import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import Products from './productsModel.js';

const Categorías = sequelize.define('categorías', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

Categorías.hasMany(Products, {
  foreignKey: {
    allowNull: false,
    name: 'productsId',
  },
});
Products.belongsTo(Categorías);

export default Categorías;
