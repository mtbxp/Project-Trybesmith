import express from 'express';
import productRouter from './routes/productsRouter';
import userRouter from './routes/usersRoute';
import orderRouter from './routes/ordersRoute';
import loginRouter from './routes/loginRoute';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);
app.use('/login', loginRouter);

export default app;
