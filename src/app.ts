import express from 'express';
import login from './controllers/loginControl';
import getOrders from './controllers/orderControl';
import addProducts, { getProducts } from './controllers/productContrl';
import addUsers from './controllers/userControl';
import { validateNameField, validatePasswordField } from './middlewares/loginMiddle';

const app = express();

app.use(express.json());

export default app;

app.post('/products', addProducts);

app.get('/products', getProducts);

app.post('/users', addUsers);

app.get('/orders', getOrders);

app.post('/login', validateNameField, validatePasswordField, login);