import express from 'express';
const router = express.Router();
import * as UserRoute from '../controllers/usersController.js';

router.get('/users/:id', UserRoute.getUser);

export default router;
