import express from 'express';
import productRouter from './Routes/productRouter';
import userRouter from './Routes/userRouter';
import orderRouter from './Routes/orderRouter';
import loginRouter from './Routes/loginRouter';

const app = express();

app.use(express.json());
app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);
app.use('/login', loginRouter);

app.get('/teste', (req, res) => {
  res.send('Hello World!');
});

export default app;
