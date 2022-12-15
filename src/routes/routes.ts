import { Router } from 'express';
import ProductController from '../controller/product.controller';

const router = Router();

router.post('/products', ProductController.create);

router.get('/products', ProductController.getAllProducts);

export default router;