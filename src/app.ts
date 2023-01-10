import express from 'express';
import productRoutes from './routes/products';
import userRoutes from './routes/users';
import orderRoutes from './routes/orders';

const app = express();

app.use(express.json());

// routes
app.use('/products', productRoutes);
app.use('/', userRoutes);
app.use('/orders', orderRoutes);

export default app;
