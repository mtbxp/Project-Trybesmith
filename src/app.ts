import express from 'express';
import productRouter from './routes/productsRouter';
import userRouter from './routes/usersRoute';
import orderRouter from './routes/ordersRoute';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);

export default app;
