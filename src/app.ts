import express from 'express';
import productRouter from './routes/productRouter';
import userRouter from './routes/userRouter';
import ordersRouter from './routes/ordersRouter';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', ordersRouter);

export default app;
