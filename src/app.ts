import express from 'express';
import userRoutes from './routes/userRouter';
import productRouter from './routes/productRouter';

const app = express();

app.use(express.json());

app.use('/users', userRoutes);
app.use('/products', productRouter);
export default app;
