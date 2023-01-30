import { Router } from 'express';
import productsController from '../controllers/productsController';

const router = Router();

router.get('/products', productsController.getAllProducts);
router.post('/products', productsController.createProduct);

export default router;