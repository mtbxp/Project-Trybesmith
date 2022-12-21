import express from 'express';
import productsController from '../controller/products.controller';
import usersController from '../controller/users.controller';
import ordersController from '../controller/orders.controller';
import loginController from '../controller/login.controller';

const router = express.Router();

router.post('/products', productsController.createProductController);

router.get('/products', productsController.getAllProductsController);

router.post('/users', usersController.createUserController);

router.get('/orders', ordersController.createOrderController);

router.post('/login', loginController.checkLoginController);

export default router;