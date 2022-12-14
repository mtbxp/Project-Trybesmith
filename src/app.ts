import express from 'express';
import productsController from './controllers/productsController';

const app = express();

app.use(express.json());

app.post('/products', productsController.createController);
app.get('/products', productsController.getAllController);

export default app;
