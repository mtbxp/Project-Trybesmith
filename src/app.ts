import express from 'express';
import productsRouter from './router/productsRouter';
import usersRouter from './router/usersRouter';
import orderRouter from './router/orderRouter';

const app = express();

app.use(express.json());
app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('(/orders', orderRouter);

export default app;
