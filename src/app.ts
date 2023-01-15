import express from 'express';
import orderRouter from './routes/orders.route';
import productRouter from './routes/products.route';
import userRouter from './routes/users.route';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);

// app.use

export default app;
