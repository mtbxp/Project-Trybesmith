import express from 'express';
import produtcsRoutes from './routes/products.routes';

const app = express();

app.use(express.json());

app.use(produtcsRoutes);

export default app;
