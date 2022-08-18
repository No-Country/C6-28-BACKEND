import express from 'express';
const router = express.Router();
import * as UserRoute from '../controllers/userController.js';
import * as AuthRoute from '../controllers/authController.js';
import * as AuthMiddleware from '../middlewares/authMiddleware.js';
//import * as RateLimit from '../middlewares/ratelimit.js';

router.post('/login',AuthRoute.login);
router.post('/signup', AuthRoute.signUp);
router.get('/logout', AuthRoute.getLogout);

router.get('/:id', AuthMiddleware.ensureAuth, UserRoute.getUser);
router.get('/', AuthMiddleware.ensureAuth, UserRoute.getAllUsers);
router.delete('/:id', AuthMiddleware.ensureAuth, UserRoute.deleteUser);

export default router;
