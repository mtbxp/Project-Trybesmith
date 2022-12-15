import { Router } from 'express';
import * as productController from '../controllers/product.controller';
import { validationName, validationAmount } from '../middlewares/products.validation';

const router = Router();

router.post('/', validationName, validationAmount, productController.createNewProduct);
router.get('/', productController.getAllProducts);

export default router;