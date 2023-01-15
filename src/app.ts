import express from 'express';
import productsRouter from './router/productsRouter';
import usersRouter from './router/usersRouter';
import orderRouter from './router/orderRouter';
import loginRouter from './router/loginRouter';

const app = express();

app.use(express.json());
app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/orders', orderRouter);
app.use('/login', loginRouter);

export default app;
