import Product from '../models/productsModel.js';
import AppError from '../utils/appError.js';
import CatchAsync from '../utils/catchAsync.js';


export const getproduct = CatchAsync(async (req, res, next) => {
    const users = await Product.findAll();
    if (!users) {
      return next(new AppError('No se ha encontrado ningun producto', 400));
    }
    res.status(200).json({
      status: 'success',
      results: users.length,
      data: {
        users,
      },
    });
  });
  