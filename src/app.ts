import express, { Application } from 'express';
import {
  getAllProductsController,
  registerProductController,
} from './controllers/products.controller';
import {
  getAllUsers,
  registerNewUserController,
} from './controllers/users.controller';
import { getAllOrdersController } from './controllers/orders.controller';
import { loginValidation } from './middlewares/loginValidation';
import { userLoginController } from './controllers/login.controller';

const app: Application = express();

app.use(express.json());

app.post('/login', loginValidation, userLoginController);

app.post('/products', registerProductController);

app.get('/products', getAllProductsController);

app.post('/users', registerNewUserController);

app.get('/orders', getAllOrdersController);

app.get('/users', getAllUsers);

export default app;
