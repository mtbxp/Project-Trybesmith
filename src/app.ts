import express from 'express';

import {
  productCreateController,
  productGetAllController,
} from './controllers/product.controller';

const app = express();
app.use(express.json());

app.get('/products', productGetAllController);
app.post('/products', productCreateController);

export default app;
