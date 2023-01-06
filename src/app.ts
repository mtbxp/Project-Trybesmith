import express from 'express';
import productsRoute from './router/products.router';
import userRouter from './router/users.router';

const app = express();

app.use(express.json());
app.use('/products', productsRoute);
app.use('/users', userRouter);

export default app;
