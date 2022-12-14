import { Router } from 'express';
import ProductController from '../controllers/product.controller';
import ProductMiddleware from '../middleware/product.middleware';
import AmountMiddleware from '../middleware/amount.middleware';

const router = Router();

const productController = new ProductController();
const productMiddleware = new ProductMiddleware();
const amountMiddleware = new AmountMiddleware();

router.post('/products', productMiddleware.product, amountMiddleware
  .amount, productController.create);
router.get('/products', productController.getAll);

export default router;