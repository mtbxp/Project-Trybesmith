import express from 'express';
import addProducts, { getProducts } from './controllers/productContrl';

const app = express();

app.use(express.json());

export default app;

app.post('/products', addProducts);

app.get('/products', getProducts);