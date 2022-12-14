import express from 'express';

import productController from './controllers/productController';

const app = express();

app.use(express.json());
app.get('/products', productController.getAll);
app.post('/products', productController.create)

export default app;

// Iniciando Projeto!
