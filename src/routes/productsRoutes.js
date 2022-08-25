import express from 'express';
const router = express.Router();
import * as ProductRoute from '../controllers/productController.js';

router.get ('/', ProductRoute.getProducts);

export default router;