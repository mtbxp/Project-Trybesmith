import express from 'express';

import loginRouter from './utils/routers/login';

import userRouter from './utils/routers/users';

import ordersRouter from './utils/routers/orders';

import productsRouter from './utils/routers/products';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);

app.use('/users', userRouter);

app.use('/orders', ordersRouter);

app.use('/login', loginRouter);

export default app;
