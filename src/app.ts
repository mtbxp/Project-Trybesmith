import express, { Application } from 'express';
import {
  getAllProductsController,
  registerProductController,
} from './controllers/products.controller';
import {
  registerNewUserController,
  userLoginController,
} from './controllers/users.controller';
import orderController from './controllers/orders.controller';

const app: Application = express();

app.use(express.json());

app.post('/products', registerProductController);

app.get('/products', getAllProductsController);

app.post('/users', registerNewUserController);

app.get('/orders', orderController.getAllOrdersController);

app.post('/login', userLoginController);

export default app;
