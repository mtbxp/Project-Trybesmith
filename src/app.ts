import express from 'express';
import controllers from './controllers/controllers';
import validateLogin from './middlewares/validate';

const app = express();

app.use(express.json());

app.post('/products', controllers.insertProducts);
app.get('/products', controllers.getAllProducts);
app.post('/users', controllers.insertUser);
app.post('/login', validateLogin, controllers.getUser);

export default app;
