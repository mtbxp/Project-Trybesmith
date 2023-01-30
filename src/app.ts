import express from 'express';
import 'express-async-errors';
import productsController from './controllers/productsController';
import usersController from './controllers/usersController';
import ordersController from './controllers/ordersController';
import productsValidations from './middlewares/productsValidations';
import usersValidations from './middlewares/usersValidations';
import tokenValidations from './middlewares/tokenValidations';

const app = express();

app.use(express.json());

app.get(
  '/products',
  productsController.listProducts,
);

app.post(
  '/products', 
  productsValidations.validadeProductName,
  productsValidations.validadeProductQuantity,
  productsController.addProducts,
);

app.post(
  '/users',
  usersValidations.validadeUserPassword,
  usersValidations.validadeUserLevel,
  usersValidations.validadeUsername,
  usersValidations.validadeUserVocation,
  usersController.addUser,
);

app.post('/login', usersController.login);

app.get('/orders', ordersController.listOrders);

app.post(
  '/orders', 
  tokenValidations.validateAuth, 
  tokenValidations.validadeProducts, 
  ordersController.addOrders,
);

export default app;
