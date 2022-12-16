import { Router } from 'express';
import orderController from '../controller/order.controller';
import ProductController from '../controller/product.controller';
import UserController from '../controller/user.controller';

const router = Router();

router.post('/products', ProductController.create);

router.get('/products', ProductController.getAllProducts);

router.post('/users', UserController.create);

router.get('/orders', orderController.getAll);

export default router;