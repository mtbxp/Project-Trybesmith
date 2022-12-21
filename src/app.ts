import express from 'express';
import getOrders from './controllers/orderControl';
import addProducts, { getProducts } from './controllers/productContrl';
import addUsers from './controllers/userControl';

const app = express();

app.use(express.json());

export default app;

app.post('/products', addProducts);

app.get('/products', getProducts);

app.post('/users', addUsers);

app.get('/orders', getOrders);