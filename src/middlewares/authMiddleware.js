import jwt from 'jsonwebtoken';
const JWT_SECRET = 'my-32-character-ultra-secure-and-ultra-long-secret';

export const ensureAuth = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token) {
    return res.status(401).json({ msg: 'No tienes permisos para esta acción' });
  }
  try {
    const { id } = jwt.verify(token, JWT_SECRET);
    req.user = { id };
    next();
  } catch (error) {
    return res.status(401).json({ msg: 'No tienes permisos para esta acción' });
  }
};
