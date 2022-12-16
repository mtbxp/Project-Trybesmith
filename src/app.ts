import express, { Application } from 'express';
import {
  getAllProductsController,
  registerProductController,
} from './controllers/products.controller';
import userController from './controllers/users.controller';
import orderController from './controllers/orders.controller';

const app: Application = express();

app.use(express.json());

app.post('/products', registerProductController);

app.get('/products', getAllProductsController);

app.post('/users', userController.registerNewUserController);

app.get('/orders', orderController.getAllOrdersController);

export default app;
