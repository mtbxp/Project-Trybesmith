import express from 'express';
import ProductsRoute from './routes/products.router';

const app = express();

app.use(express.json());

app.use('/products', ProductsRoute);

export default app;
