import express from 'express';
import ordersController from './controllers/ordersController';
import productsController from './controllers/productsController';
import usersController from './controllers/usersController';

const app = express();

app.use(express.json());

app.post('/products', productsController.createController);
app.get('/products', productsController.getAllController);

app.post('/users', usersController.createUserController);

app.get('/orders', ordersController.getAllOrdersController);

export default app;
