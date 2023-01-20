import express from 'express';
import productRouter from './routers/productRouter';
import userRouter from './routers/userRouter';
import orderRouter from './routers/orderRouter';

const app = express();

app.use(express.json());

app.get('/', (_req, res) => res.status(200).json({ test: 'ok' }));

app.use(productRouter);
app.use(userRouter);
app.use(orderRouter);

export default app;
