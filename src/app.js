import express from 'express';
import morgan from 'morgan';
import User from './models/UserModel.js';







const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));

const login= async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
        return res.status(404).json({ msg: 'El usuario no existe' });
    }
    if (user.password !== password) {
        return res.status(404).json({ msg: 'Contraseña incorrecta' });
    }
    return res.json({ msg: 'Login correcto' });
};
app.post('/api/login', login);

export default app;
