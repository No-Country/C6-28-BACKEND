import express from 'express';
const router = express.Router();
import * as UserRoute from '../controllers/userController.js';
import * as AuthRoute from '../controllers/authController.js';

router.post('/login', AuthRoute.login);
router.post('/signup', AuthRoute.signUp);

router.get('/:id', UserRoute.getUser);

export default router;
