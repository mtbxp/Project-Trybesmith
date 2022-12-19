import express from 'express';
import ProductsController from './controllers/product.controllers';
import UsersController from './controllers/user.controller';

const app = express();
// criando PR
app.use(express.json());

app.post('/products', ProductsController.postProduct);
app.get('/products', ProductsController.getAllProducts);
app.post('/users', UsersController.postUser);

export default app;
