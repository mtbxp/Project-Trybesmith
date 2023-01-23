import { Router } from 'express';
import productsController from '../controllers/products.controller';

const router = Router();

router.get('/products', productsController.getProducts);
router.post('/products', productsController.registerProduct);

export default router;