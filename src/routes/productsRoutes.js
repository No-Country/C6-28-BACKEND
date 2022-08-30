import express from 'express';
const router = express.Router();
import * as ProductRoute from '../controllers/productController.js';

router.get('/', ProductRoute.getProducts);
router.get('/:id', ProductRoute.getProductById);
router.delete('/:id', ProductRoute.deleteProduct);
router.patch('/:id', ProductRoute.updateProduct);
router.post('/add-product', ProductRoute.addProduct);

export default router;
