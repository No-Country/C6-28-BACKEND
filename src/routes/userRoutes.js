import express from 'express';
const router = express.Router();
import * as UserRoute from '../controllers/userController.js';
import * as AuthRoute from '../controllers/authController.js';

router.post('/login', AuthRoute.login);
router.post('/signup', AuthRoute.signUp);
router.get('/logout', AuthRoute.getLogout);


router.get('/:id', UserRoute.getUser);
router.get('/', UserRoute.getAllUsers);
router.delete('/:id', UserRoute.deleteUser);

export default router;
