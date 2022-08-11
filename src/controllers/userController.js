import { User } from '../models/UserModel.js';

export const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
