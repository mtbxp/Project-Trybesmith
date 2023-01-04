import express from 'express';
import productsController from '../controller/products.controller';
import usersController from '../controller/users.controller';
import ordersController from '../controller/orders.controller';
import loginController from '../controller/login.controller';
import middlewaresProducts from '../middlewares/verifyNameAndAmount.middleware';
import middlewareUsers from '../middlewares/verifyUsernameVocationLevelPassword.middleware';

const router = express.Router();

router.post(
  '/products', 
  middlewaresProducts.verifyName,
  middlewaresProducts.verifyAmount, 
  productsController.createProductController,
);

router.get('/products', productsController.getAllProductsController);

router.post(
  '/users',
  middlewareUsers.verifyUsername,
  middlewareUsers.verifyVocation,
  middlewareUsers.verifyLevel,
  middlewareUsers.verifyPassword,
  usersController.createUserController,
);

router.get('/orders', ordersController.createOrderController);

router.post('/login', loginController.checkLoginController);

export default router;