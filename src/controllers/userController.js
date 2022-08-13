import User from '../models/userModel.js';
import handleHttpError from '../utils/httpError.js';

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id).omit('password', 'confirmarPassword');
    res.json(user);
  } catch (error) {
    handleHttpError(res, error);
  }
};
