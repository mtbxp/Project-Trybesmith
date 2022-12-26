import express from 'express';
import createProductController from './controllers/product.controller';

const app = express();

app.use(express.json());

app.post('/products', createProductController);

export default app;
