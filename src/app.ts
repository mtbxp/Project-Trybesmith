import express from 'express';
import productsRouter from './routes/products.router';
import UsersRoute from './routes/users.router';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);

app.use('/users', UsersRoute);

export default app;
