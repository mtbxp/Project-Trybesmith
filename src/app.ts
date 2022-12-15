import express from 'express';

import {
  productCreateController,
  productGetAllController,
} from './controllers/products.controller';
import usersCreateController from './controllers/users.controller';
import ordersGetAllController from './controllers/orders.controller';

const app = express();
app.use(express.json());

app.get('/products', productGetAllController);
app.get('/orders', ordersGetAllController);

app.post('/products', productCreateController);
app.post('/users', usersCreateController);

export default app;
