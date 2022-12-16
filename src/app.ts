import express from 'express';
import productController from './controllers/product.controller';
import usersController from './controllers/users.controller';

const app = express();

app.use(express.json());

app.get('/products', productController.getAllProducts);
app.post('/products', productController.createProduct);

app.post('/users', usersController.registerUser);

export default app;
