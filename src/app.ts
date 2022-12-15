import express from 'express';
import insertProductController from './controller/products.controller';

const app = express();

app.use(express.json());

app.post('/products', insertProductController);

export default app;
