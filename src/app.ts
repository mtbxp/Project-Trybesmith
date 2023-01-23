import express from 'express';
import productRouter from './routes/productRouter';
import userRouter from './routes/userRouter';
import ordersRouter from './routes/ordersRouter';
import loginRouter from './routes/loginRouter';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', ordersRouter);
app.use('/login', loginRouter);
export default app;
