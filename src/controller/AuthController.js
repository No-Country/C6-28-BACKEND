import User from './models/UserModel.js';


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

export default login;




   