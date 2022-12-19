import express from 'express';
import productsRouter from './routes/products';
import userRouter from './routes/users';
import ordersRouter from './routes/orders';

const app = express();

app.use(express.json());

// app.use('/login', require('./routes/login'));

app.use('/users', userRouter);

app.use('/products', productsRouter);

app.use('/orders', ordersRouter);

export default app; 
