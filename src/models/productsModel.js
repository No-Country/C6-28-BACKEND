import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

const Products = sequelize.define('products', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  technical_specs: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  precio: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
    },
    defaultValue: 0,
  },
  existencia: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  nombre_marca: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  categoria: {
    type: DataTypes.ENUM,
    values: ['ropa', 'juguetes', 'comida', 'comederos', 'macho', 'hembra'],
    allowNull: false
  }
});

export default Products;
