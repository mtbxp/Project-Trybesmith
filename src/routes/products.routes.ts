import { Router } from 'express';
import productsController from '../controllers/products.controller';
import productsMiddlewares from '../middlewares/products.middlewares';

const router = Router();

router.post(
  '/',
  productsMiddlewares.validateName,
  productsMiddlewares.validateAmount,
  productsController.createProduct,
);
router.get('/', productsController.getAllProducts);

export default router;