import express from 'express';
import ordersRouter from './routes/ordersRoute';
import productRouter from './routes/productsRoute';
import userRouter from './routes/usersRoute';

const app = express();

app.use(express.json());
app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', ordersRouter);

export default app;
