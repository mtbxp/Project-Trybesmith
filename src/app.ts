import express from 'express';
import loginController from './controllers/loginController';
import ordersController from './controllers/ordersController';
import productsController from './controllers/productsController';
import usersController from './controllers/usersController';
import validateBody from './middlewares/userValidate';

const app = express();

app.use(express.json());

app.post('/products', productsController.createController);
app.get('/products', productsController.getAllController);

app.post('/users', usersController.createUserController);

app.get('/orders', ordersController.getAllOrdersController);

app.post('/login', validateBody, loginController.createUserController);

export default app;
