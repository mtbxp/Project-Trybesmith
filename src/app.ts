import express from 'express';
import productsRouter from './routes/productsRoute';
import usersRouter from './routes/usersRoute';
import ordersRouter from './routes/ordersRoute';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);

app.use('/users', usersRouter);

app.use('/orders', ordersRouter);

export default app;
