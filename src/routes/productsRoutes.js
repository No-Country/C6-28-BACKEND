import express from 'express';
const router = express.Router();
import * as ProductRoute from '../controllers/productController.js';


router.get ('/todos', ProductRoute.getproduct);
export default router;