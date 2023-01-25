import { Router } from 'express';
import ProductController from '../controllers/products.controller';
import { amountProductValidate, nameProductValidate } from '../middlewares/validate.products';

const router = Router();

const productController = new ProductController();

router.get('/products', productController.getAll);
router.post('/', nameProductValidate, amountProductValidate, productController.create);

export default router;