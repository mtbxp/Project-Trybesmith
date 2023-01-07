import express from 'express';
import productsRoutes from './routers/products.routes';
import userRoutes from './routers/user.routes';

const app = express();

app.use(express.json());

app.use('/products', productsRoutes);
app.use('/users', userRoutes);

export default app;
