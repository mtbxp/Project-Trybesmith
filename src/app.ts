import express from 'express';
import ProductRouter from './router/product.router';

const app = express();

app.use(express.json());

app.use(ProductRouter);

export default app;
