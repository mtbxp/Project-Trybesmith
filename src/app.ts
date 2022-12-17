import express, { Application } from 'express';
import productRouter from './routes/products.route';
import userRouter from './routes/user.route';

const app: Application = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);

export default app;
