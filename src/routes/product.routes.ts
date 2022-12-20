import { Router } from 'express';
import ProductController from '../controllers/product.controller';
import { validateName, validateAmount } from '../middlewares/validateProduct';

const router = Router();

const productController = new ProductController();

router.post('/', validateName, validateAmount, productController.createProduct);
router.get('/', productController.getAllProducts);

export default router;