import express from 'express';
import ProductsRoute from './routes/products.router';
import UsersRoute from './routes/users.router';

const app = express();

app.use(express.json());

app.use('/products', ProductsRoute);

app.use('/users', UsersRoute);

export default app;
