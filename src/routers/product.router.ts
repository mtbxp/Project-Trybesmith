import { Router } from 'express';
import ProductController from '../controllers/products.controller';
import ProductValidation from '../middleware/productValidation';

const router = Router();

const productController = new ProductController();

router.post(
  '/products', 
  ProductValidation.nameValidation,
  ProductValidation.amountCheck,
  productController.create,
);
router.get('/products', productController.getAll);

export default router;
