import { Router } from 'express';
import productsController from '../controllers/products.controller';
import validateProducts from '../middlewares/validateProducts.middlewares';

const router: Router = Router();

router.post(
  '/', 
  validateProducts.validateName, 
  validateProducts.validateAmount, 
  productsController.create,
);
router.get('/', productsController.getAll);

export default router;