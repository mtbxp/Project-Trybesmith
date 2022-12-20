import express from 'express';
import addProducts from './controllers/productContrl';

const app = express();

app.use(express.json());

export default app;

app.post('/products', addProducts);