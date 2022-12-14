import express from 'express';

import loginRouter from './routers/login';

import userRouter from './routers/users';

import ordersRouter from './routers/orders';

import productsRouter from './routers/products';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);

app.use('/users', userRouter);

app.use('/orders', ordersRouter);

app.use('/login', loginRouter);

export default app;
