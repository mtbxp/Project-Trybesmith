import express, { Application } from 'express';
import {
  getAllProductsController,
  registerProductController,
} from './controllers/products.controller';
import userController from './controllers/users.controller';

const app: Application = express();

app.use(express.json());

app.post('/products', registerProductController);

app.get('/products', getAllProductsController);

app.post('/users', userController.registerNewUserController);

export default app;
