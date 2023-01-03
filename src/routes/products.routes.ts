import { Router } from 'express';
import productController from '../controllers/products.controller';

const router = Router();

router.get('/', productController.getAllProducts);
router.post('/', productController.insertProduct);

export default router;