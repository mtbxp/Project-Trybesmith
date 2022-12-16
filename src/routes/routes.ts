import { Router } from 'express';
import ProductController from '../controller/product.controller';
import UserController from '../controller/user.controller';

const router = Router();

router.post('/products', ProductController.create);

router.get('/products', ProductController.getAllProducts);

router.post('/users', UserController.create);

export default router;