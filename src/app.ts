import express from 'express';
import productRouter from './routers/productRouter';
import userRouter from './routers/userRouter';
import orderRouter from './routers/orderRouter';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);

export default app;
