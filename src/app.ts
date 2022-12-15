import express from 'express';
import routeProducts from './routes/route.products';

const app = express();

app.use(express.json());

app.use('/products', routeProducts);

export default app;
