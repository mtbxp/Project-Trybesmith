import express from 'express';

import productController from './controllers/productController';
import loginController from './controllers/loginController';
import userController from './controllers/userController';
// import authMiddleware from './middlewares/auth';
import authValidations from './middlewares/authValidations';

const app = express();

app.use(express.json());
app.get('/products', productController.getAll);
app.post('/products', productController.create);
app.post('/users', userController.createUser);
app.post('/login', authValidations, loginController.login);

export default app;

// Iniciando Projeto!
