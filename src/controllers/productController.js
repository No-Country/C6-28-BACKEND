import Products from '../models/productsModel.js';
import AppError from '../utils/appError.js';
import CatchAsync from '../utils/catchAsync.js';


export const getProducts = CatchAsync(async (req, res, next) => {
    const products = await Products.findAll();
    if (!products) {
      return next(new AppError('No se ha encontrado ningun producto', 400));
    }
    res.status(200).json({
      status: 'success',
      results: products.length,
      data: {
        products,
      },
    });
  });
