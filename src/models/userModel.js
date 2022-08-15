import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import bcrypt from 'bcryptjs';

const User = sequelize.define(
  'user',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellidos: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: 'El email no es válido',
          args: true,
        },
      },
    },
    foto: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    confirmarPassword: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

User.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());
  delete values.password;
  delete values.confirmarPassword;
  return values;
};

User.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  user.confirmarPassword = user.password;
});

export default User;
