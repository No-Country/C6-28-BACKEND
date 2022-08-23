import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import Products from './productsModel.js';

const Marcas = sequelize.define('marcas', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  }
});

Marcas.hasMany(Products, {
  foreignKey: {
    allowNull: false,
    name: 'productsId'
  }
});
Products.belongsTo(Marcas);

export default Marcas;
