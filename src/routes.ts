import { Router } from 'express';

import * as productsController from './controllers/products.controller';
import * as usersController from './controllers/users.controller';
import * as ordersController from './controllers/orders.controller ';
import * as loginController from './controllers/login.controller';

const router = Router();

router.post(
  '/products', 
  productsController.validaNomeProdutos,
  productsController.validaAmountProdutos, 
  productsController.addProduct,
);
router.get('/products', productsController.listAllProducts);
router.post('/users', usersController.addProduct);
router.get('/orders', ordersController.listAllOrders);
router.post('/login', loginController.loginValidation);

export default router;