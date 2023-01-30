import express from 'express';
import loginRouter from './routers/login.router';
import ordersRouter from './routers/orders.router';
import productsRouter from './routers/products.router';
import usersRouter from './routers/users.router';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/orders', ordersRouter);
app.use('/login', loginRouter);

export default app;
