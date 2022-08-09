import { User } from '../models/UserModel.js';
import { handleHttpError } from '../utils/httpError.js';

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    res.json(user);
  } catch (error) {
    handleHttpError(res, error);
  }
};

export default getUser;
