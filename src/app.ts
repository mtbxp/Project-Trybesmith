import express from 'express';
import productController from './controllers/product.controller';

const app = express();

app.use(express.json());

app.get('/products', productController.getAllProducts);
app.post('/products', productController.createProduct);

export default app;
