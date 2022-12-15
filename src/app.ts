import express from 'express';
import insertProducts from './controllers/products.controller';

const app = express();

app.use(express.json());

app.post('/products', insertProducts);

export default app;