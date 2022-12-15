import express from 'express';
import productsController from './controllers/productsController';
import userController from './controllers/userController';
import validateLogin from './middlewares/validateLogin';
import loginController from './controllers/loginController';

const app = express();

app.use(express.json());

app.post('/products', productsController.insertProduct);
app.get('/products', productsController.getAllProducts);
app.post('/users', userController.insertUser);
app.post('/login', validateLogin, loginController.getUser);

export default app;

// Abrindo PR;
