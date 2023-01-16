import { Router } from 'express';
import ProductController from '../controllers/productController';

const router = Router();

const productsController = new ProductController();

router.post('/products', productsController.create);

export default router;
