import express from 'express';
import productController from './controllers/productController';
import userController from './controllers/userControllers';
import orderControllers from './controllers/orderControllers';
import loginController from './controllers/loginController';
import middlewares from './helpers/middlewares';

const app = express();
app.use(express.json());

// const productController = new ProductController();

app.get('/products', productController.getAll);
app.post(
  '/products',
  middlewares.validateProductName,
  middlewares.validateProductAmount,
  productController.insert,
);

app.post('/users', userController.create);

app.get('/orders', orderControllers.getAll);

app.post('/login', middlewares.validateLogin, loginController.getUser);

export default app;
