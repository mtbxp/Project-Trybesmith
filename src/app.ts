import express from 'express';
import ProductsRoute from './routes/products.router';
import UsersRoute from './routes/users.router';
import OrdersRoute from './routes/orders.route';
import LoginRoute from './routes/login.route';

const app = express();

app.use(express.json());

app.use('/products', ProductsRoute);

app.use('/users', UsersRoute);

app.use('/orders', OrdersRoute);

app.use('/login', LoginRoute);

export default app;
