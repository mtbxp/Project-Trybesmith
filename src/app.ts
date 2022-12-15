import express from 'express';
import * as productsController from './controllers/productsController';

const app = express();

app.use(express.json());

// app.get('/', (req, res) => insertController.getAll(req, res));
app.get('/products', productsController.getAll);
app.get('/products/:id', productsController.getAll);

export default app;
