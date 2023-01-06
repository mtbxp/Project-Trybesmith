import express from 'express';
import productsRoutes from './routers/products.routes';

const app = express();

app.use(express.json());

app.use('/products', productsRoutes);

export default app;
