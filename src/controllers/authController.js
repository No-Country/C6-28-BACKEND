import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import { validatePassword, comparePass } from '../utils/compare.js';

const JWT_SECRET = 'my-32-character-ultra-secure-and-ultra-long-secret';
const JWT_EXPIRES_IN = '7d';

const signToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    const correct = await validatePassword(password, user.password);

    if (!user || !correct) {
      return res.status(404).json({ msg: 'Contraseña o email invalidos' });
    }

    const token = signToken(user.id);

    return res.json({ msg: 'Login correcto', token });
  } catch (error) {
    return res.status(500).json({ msg: 'Error en el servidor' });
  }
};

export const signUp = async (req, res) => {
  try {
    const { nombre, apellidos, email, password, confirmarPassword } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user) {
      return res.status(400).json({ msg: 'El usuario ya existe' });
    } else if (!comparePass(password, confirmarPassword)) {
      return res.status(400).json({ msg: 'Las contraseñas no coinciden' });
    }

    const newUser = await User.create({
      nombre,
      apellidos,
      email,
      password,
      confirmarPassword,
    });

    const token = signToken(newUser.id);
    
    return res.status(200).json({ msg: 'Usuario creado correctamente', token });
  } catch (error) {
    return res.status(500).json({ msg: 'Error en el servidor' });
  }
};

export const getLogout = (req, res) => {
  res.cookie('token' , '', {maxAge:1});
  res.redirect('/');
};