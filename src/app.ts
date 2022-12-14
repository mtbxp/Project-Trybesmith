import express from 'express';

import productCreateController from './controllers/product.controller';

const app = express();
app.use(express.json());

app.post('/products', productCreateController);

export default app;
