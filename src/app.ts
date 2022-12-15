import express from 'express';
import * as productsController from './controllers/productsController';
import * as usersController from './controllers/usersController';
import validateLogin from './middleware/validations';

const app = express();

app.use(express.json());

app.post('/login', validateLogin, usersController.getByLogin);

app.post('/users', usersController.insertUser);

app.post('/products', productsController.insertProduct);
app.get('/products', productsController.getAll);

export default app;
