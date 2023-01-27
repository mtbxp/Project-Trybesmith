import express from 'express';
import 'express-async-errors';
import productsController from './controllers/productsController';
import usersController from './controllers/usersController';

const app = express();

app.use(express.json());

app.get('/products', productsController.listProducts);

app.post('/products', productsController.addProducts);

app.post('/users', usersController.addUser);

export default app;
