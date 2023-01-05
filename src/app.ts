import express from 'express';
import productsRoute from './router/products.router';

const app = express();

app.use(express.json());
app.use('/products', productsRoute);

export default app;
