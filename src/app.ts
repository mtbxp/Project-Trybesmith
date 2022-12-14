import express from 'express';
import * as productsController from './controllers/productsController';

const app = express();

app.use(express.json());

app.get('/products', productsController.getAll);

export default app;
