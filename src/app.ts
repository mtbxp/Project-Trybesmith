import express from 'express';
import loginRouter from './router/login.router';
import productsRoute from './router/products.router';
import userRouter from './router/users.router';

const app = express();

app.use(express.json());
app.use('/products', productsRoute);
app.use('/users', userRouter);
app.use('/login', loginRouter);

export default app;
