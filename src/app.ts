import express from 'express';
import ordersRouter from './routes/orders';
import productsRouter from './routes/products';
import usersRouter from './routes/users';

const app = express();

app.use(express.json());
app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/orders', ordersRouter);

export default app;
