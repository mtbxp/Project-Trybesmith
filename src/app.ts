import express from 'express';
import productRouter from './routes/products.route';

const app = express();

app.use(express.json());

app.use('/products', productRouter);

// app.use

export default app;
