import User from '../models/userModel.js';
import handleHttpError from '../utils/httpError.js';

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    // const user = await User.findByPk(id).omit('password', 'confirmarPassword');
    const user = await User.findByPk(id);
    res.json(user);
  } catch (error) {
    handleHttpError(res, error);
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    handleHttpError(res, error);
  }
};
