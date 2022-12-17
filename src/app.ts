import express from 'express';
import loginController from './controllers/login.controller';
import ordersControllers from './controllers/orders.controllers';
import productController from './controllers/product.controller';
import usersController from './controllers/users.controller';
import { loginValidation } from './middleware/verifyLogin';
import { productAmountValidation, productNameValidation } from './middleware/validateProducts';

const app = express();

app.use(express.json());

app.get('/products', productController.getAllProducts);
app.post('/products', productNameValidation, productAmountValidation, productController
  .createProduct);

app.post('/users', usersController.registerUser);

app.get('/orders', ordersControllers.getAllOrders);

app.post('/login', loginValidation, loginController.login);

export default app;
