import express from 'express';
import * as productsController from './controllers/productsController';
import * as usersController from './controllers/usersController';
import validateLogin from './middleware/validateLogin';
import * as validateProduct from './middleware/validateProduct';
import validateToken from './middleware/validateToken';
import * as validateUser from './middleware/validateUser';

const app = express();

app.use(express.json());

app.post('/login', validateLogin, usersController.getByLogin);

app.post(
  '/users',
  validateUser.validateUserName,
  validateUser.validateUserVocation,
  validateUser.validateUserLevel,
  validateUser.validateUserPassword,
  usersController.insertUser,
);

app.post(
  '/products',
  validateProduct.validateProductName,
  validateProduct.validateProductAmount,
  productsController.insertProduct,
);
app.get('/products', productsController.getAll);

app.post(
  '/orders',
  validateToken,
  validateProduct.validateOrder,
  productsController.insertOrder,
);
app.get('/orders', productsController.getAllOrders);

export default app;
