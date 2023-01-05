import express from 'express';
import productsControllers from './controllers/productsControllers';

const app = express();

app.use(express.json());

app.use('/products', productsControllers.productModel);

export default app;
