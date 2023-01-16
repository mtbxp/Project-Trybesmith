import express from 'express';
import productRoutes from './routes/Product.routes';

const app = express();

app.use(express.json());

app.use('/products', productRoutes);

export default app;
