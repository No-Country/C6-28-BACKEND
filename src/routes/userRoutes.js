import express from 'express';
const router = express.Router();
import * as UserRoute from '../controllers/userController.js';
import * as AuthRoute from '../controllers/authController.js';
import * as AuthMiddleware from '../middlewares/authMiddleware.js';

router.post('/login', AuthRoute.login);
router.post('/signup', AuthRoute.signUp);
router.get('/logout', AuthRoute.getLogout);

router.get('/:id', AuthMiddleware.ensureAuth, UserRoute.getUser);
router.get('/', AuthMiddleware.ensureAuth, UserRoute.getAllUsers);
router.delete('/:id', AuthMiddleware.ensureAuth, UserRoute.deleteUser);
router.patch('/:id', AuthMiddleware.ensureAuth, UserRoute.updateUser); 

export default router;
