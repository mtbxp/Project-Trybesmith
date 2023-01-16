import express from 'express';
import productRoutes from './routes/Product.routes';
import userRoutes from './routes/User.routes';

const app = express();

app.use(express.json());

app.use('/products', productRoutes);
app.use('/users', userRoutes);

export default app;
