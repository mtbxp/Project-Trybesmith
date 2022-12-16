import express from 'express';

import productsRouter from './routers/products.router';
import usersRouter from './routers/users.router';
import orderRouter from './routers/order.router';
import loginRouter from './routers/login.router';

const app = express();

app.use(express.json());

app.use('/login', loginRouter);

app.use('/orders', orderRouter);

app.use('/products', productsRouter);

app.use('/users', usersRouter);

export default app;
