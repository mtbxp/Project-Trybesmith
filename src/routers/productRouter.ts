import { Router } from 'express';
import ProductController from '../controllers/productController';
import validateProduct from '../middlewares/productValidation';

const router = Router();

const productsController = new ProductController();

router.get('/products', productsController.getAll);
router.post('/products', validateProduct, productsController.create);

export default router;
