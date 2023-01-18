import express from 'express';
import productRouter from './Routes/productRouter';
import userRouter from './Routes/userRouter';
import orderRouter from './Routes/orderRouter';

const app = express();

app.use(express.json());
app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);

export default app;
