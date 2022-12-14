import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());

app.use('/products', routes.Product);
app.use('/users', routes.User);
app.use('/orders', routes.Order);
app.use('/login', routes.Login);

export default app;
