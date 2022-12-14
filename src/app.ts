import express from 'express';
import ProductsController from './controllers/products.controller';

const app = express();

app.use(express.json());

app.get('/products', ProductsController.getAllProducts);
app.post('/products', ProductsController.addNewProduct);

export default app;
