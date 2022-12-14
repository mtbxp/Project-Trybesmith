import express from 'express';
import productRoutes from './routes/productRouter';
import userRoutes from './routes/userRouter';

const app = express();

app.use(express.json());

app.use('/products', productRoutes);
app.use('/users', userRoutes);

export default app;
