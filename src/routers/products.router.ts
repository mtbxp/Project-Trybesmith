import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const productController = new ProductController();
const router = Router();

router.get('/products', productController.findAll);

router.post('/products', productController.create);

export default router;