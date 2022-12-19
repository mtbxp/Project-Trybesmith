import express, { Application } from 'express';
import {
  getAllProductsController,
  registerProductController,
} from './controllers/products.controller';
import {
  getAllUsers,
  registerNewUserController,
} from './controllers/users.controller';
import { getAllOrdersController, registerNewOder } from './controllers/orders.controller';
import { userLoginController } from './controllers/login.controller';
import { loginValidation } from './middlewares/loginValidation';
import {
  nameValidation,
  amountValidation,
  productIdValidation,
} from './middlewares/productValidation';
import {
  levelValidation,
  passwordValidation,
  usernameValidation,
  vocationValidation,
} from './middlewares/userValidation';
import validateToken from './middlewares/tokenValidation';

const app: Application = express();

app.use(express.json());

app.post('/login', loginValidation, userLoginController);

app.post('/products', nameValidation, amountValidation, registerProductController);

app.get('/products', getAllProductsController);

app.post(
  '/users',
  usernameValidation,
  vocationValidation,
  passwordValidation,
  levelValidation,
  registerNewUserController,
);

app.get('/orders', getAllOrdersController);

app.get('/users', getAllUsers);

app.post('/orders', validateToken, productIdValidation, registerNewOder);

export default app;
