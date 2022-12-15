import express, { Application } from 'express';
import {
  getAllProductsController,
  registerProductController,
} from './controllers/products.controller';

const app: Application = express();

app.use(express.json());

app.post('/products', registerProductController);

app.get('/products', getAllProductsController);

export default app;
