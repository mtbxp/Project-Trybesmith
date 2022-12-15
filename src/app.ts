import express from 'express';
import ProductsController from './controllers/product.controllers';

const app = express();
// criando PR
app.use(express.json());

app.post('/products', ProductsController.postProduct);
app.get('/products', ProductsController.getAllProducts);

export default app;
