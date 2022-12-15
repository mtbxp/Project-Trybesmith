import express from 'express';
import loginRouter from './routes/loginRouter';
import orderRouter from './routes/ordersRouter';
import productRouter from './routes/productsRouter';
import usersRouter from './routes/usersRouter';

const app = express();

app.use(express.json());

app.use('/login', loginRouter);
app.use('/products', productRouter);
app.use('/users', usersRouter);
app.use('/orders', orderRouter);

export default app;
