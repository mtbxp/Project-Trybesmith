import express from 'express';
import productsRouter from './routes/products.routes';
import userRouter from './routes/user.routes';
import ordersRouter from './routes/orders.routes';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/users', userRouter);
app.use('/orders', ordersRouter);
app.use(productsRouter);

export default app;
