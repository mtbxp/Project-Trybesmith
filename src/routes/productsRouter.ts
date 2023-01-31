import { Router } from 'express';
import ProductController from '../controller/productsController';
import ValidateProducts from '../middlewares/validateProducts';

const router = Router();

const productsController = new ProductController();
const validateProducts = new ValidateProducts();

router.get('/', productsController.productsGetAll);
router.post(
  '/', 
  validateProducts.nameValidateProducts,
  validateProducts.validateAmount, 
  productsController.productCreated,
);

export default router;