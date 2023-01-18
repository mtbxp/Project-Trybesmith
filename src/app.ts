import express from 'express';
import productRouter from './Routes/productRouter';
import userRouter from './Routes/userRouter';

const app = express();

app.use(express.json());
app.use('/products', productRouter);
app.use('/users', userRouter);

export default app;
