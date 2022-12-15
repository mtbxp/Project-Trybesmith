import express from 'express';

import {
  productCreateController,
  productGetAllController,
} from './controllers/products.controller';
import usersCreateController from './controllers/users.controller';

const app = express();
app.use(express.json());

app.get('/products', productGetAllController);

app.post('/products', productCreateController);
app.post('/users', usersCreateController);

export default app;
