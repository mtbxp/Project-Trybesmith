import { Router } from 'express';

import * as productsController from './controllers/products.controller';
import * as usersController from './controllers/users.controller';
import * as ordersController from './controllers/orders.controller ';

const router = Router();

router.post('/products', productsController.addProduct);
router.get('/products', productsController.listAllProducts);
router.post('/users', usersController.addProduct);
router.get('/orders', ordersController.listAllOrders);

export default router;