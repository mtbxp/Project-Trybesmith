import express from 'express';

import {
  productCreateController,
  productGetAllController,
} from './controllers/products.controller';
import {
  usersCreateController,
  usersGetController,
} from './controllers/users.controller';
import ordersGetAllController from './controllers/orders.controller';

import validateLogin from './middlewares/validateUsers';

const app = express();
app.use(express.json());

app.get('/products', productGetAllController);
app.get('/orders', ordersGetAllController);

app.post('/products', productCreateController);
app.post('/users', usersCreateController);
app.post('/login', validateLogin, usersGetController);

export default app;
