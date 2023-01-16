import express from 'express';

import productRouter from './router/products.router';
import userRouter from './router/users.router';
import orderRouter from './router/orders.router';
// começar
const app = express();

app.use(express.json());
app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);

export default app;
