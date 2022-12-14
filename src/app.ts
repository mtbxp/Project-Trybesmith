import express from 'express';
import procuctsRoute from './routes/products.routes';

const app = express();

app.use(express.json());

app.use('/products', procuctsRoute);

export default app;
