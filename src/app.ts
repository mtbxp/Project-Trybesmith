import express from 'express';
import product from './router/productRoute';
import users from './router/userRoute';
import orders from './router/orderRoute';
import login from './router/loginRoute';

const app = express();

app.use(express.json());
app.use('/products', product);
app.use('/users', users);
app.use('/orders', orders);
app.use('/login', login);

export default app;