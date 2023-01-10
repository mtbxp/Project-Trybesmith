import express from 'express';
import productRoutes from './routes/products';
import userRoutes from './routes/users';

const app = express();

app.use(express.json());
app.use('/products', productRoutes);
app.use('/users', userRoutes);

export default app;
