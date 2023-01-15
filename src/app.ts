import express from 'express';
import productRouter from './routes/products.route';
import userRouter from './routes/users.route';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);

// app.use

export default app;
