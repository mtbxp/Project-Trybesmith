import { Router } from 'express';
import ProductMiddleware from '../middlewares/product.middleware';
import ProductController from '../controllers/product.controller';

const router = Router();

const productController = new ProductController();

router.get('/products', productController.getAll);
router.post(
  '/products', 
  ProductMiddleware.validateName,
  ProductMiddleware.validateAmount, 
  productController.create,
);

export default router;
