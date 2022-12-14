import express from 'express';
import product from './router/productRoute';

const app = express();

app.use(express.json());
app.use('/products', product);

export default app;
