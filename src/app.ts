import express from 'express';
import loginRouter from './routes/login.routes';
import ordersRouter from './routes/orders.routes';
import productRouter from './routes/products.routes';
import userRouter from './routes/users.routes';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', ordersRouter);
app.use('/login', loginRouter);

export default app;
