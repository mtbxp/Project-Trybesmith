import express from 'express';
import producsRouter from './routes/products.routes';

const app = express();

app.use(express.json());

app.use('/products', producsRouter);

export default app;
