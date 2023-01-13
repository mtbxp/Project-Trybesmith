import express from 'express';
import routesProduct from './routes/routesProduct';

const app = express();

app.use(express.json());
app.use('/products', routesProduct);

export default app;
