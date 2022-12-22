import { Router } from 'express';
import ProductController from '../controllers/product.controller';
import UserController from '../controllers/user.controller';

const router = Router();

const productController = new ProductController();
const userController = new UserController();

router.get('/products', productController.getAll);
router.post('/products', productController.create);
router.post('/users', userController.create);

export default router;