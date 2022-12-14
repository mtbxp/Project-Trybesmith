import express from 'express';
import productsRouter from './routers/productRouter';
import userRouter from './routers/userRouter';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/users', userRouter);

export default app;
