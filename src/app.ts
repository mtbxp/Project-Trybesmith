import express from 'express';
import products from './routes/products.routes';

const app = express();
// vqv
app.use(express.json());

app.use('/products', products);

export default app;
