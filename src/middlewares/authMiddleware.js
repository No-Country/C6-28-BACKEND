// import jwt from 'jsonwebtoken';
// import { promisify } from 'util';
import AppError from '../utils/appError.js';
import CatchAsync from '../utils/catchAsync.js';
// import User from '../models/userModel.js';
// import * as env from '../config/env-vars.js';

// TODO: Recibir user id del token decoded

export const ensureAuth = CatchAsync(async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token) {
    return next(new AppError('No se ha encontrado el token', 401));
  }
  next();
});

export const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.rol)) {
      return next(new AppError('No tienes permisos para realizar esta acción', 403));
    }
    next();
  };
};
