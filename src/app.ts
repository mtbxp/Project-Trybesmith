import express from 'express';
import orderRoutes from './routers/orders.routes';
import productsRoutes from './routers/products.routes';
import userRoutes from './routers/user.routes';

const app = express();

app.use(express.json());

app.use('/products', productsRoutes);
app.use('/users', userRoutes);
app.use('/orders', orderRoutes);

export default app;
