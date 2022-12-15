import { Router } from 'express';
import * as productController from '../controllers/product.controller';
import validationProducts from '../middlewares/products.validation';

const router = Router();

router.post('/', validationProducts, productController.createNewProduct);
router.get('/', productController.getAllProducts);

export default router;