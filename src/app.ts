import express from 'express';
import UserRouter from './routes/userRouter';
import ProductRouter from './routes/productRouter';
import OrderRouter from './routes/orderRouter';

const app = express();

app.use(express.json());
app.use('/products', ProductRouter);
app.use('/users', UserRouter);
app.use('/orders', OrderRouter);

export default app;
