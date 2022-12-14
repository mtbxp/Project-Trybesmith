import { Router } from 'express';
import ProductController from '../controllers/product.controller';
import validateProductFields from '../middlewares/productMiddleware';

const router = Router();

const productController = new ProductController();

router.get('/', productController.getAll);

router.post('/', validateProductFields, productController.create);

export default router;