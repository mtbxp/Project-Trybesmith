import express from 'express';
import loginRouter from './routes/login.routes';
import productsRouter from './routes/products.routes';
import ordersRouter from './routes/orders.routes';
import userRouter from './routes/user.routes';
// import LoginController from './controllers/login.controller';

const app = express();

app.use(express.json());

app.use(loginRouter);
app.use('/products', productsRouter);
app.use('/orders', ordersRouter);
app.use('/users', userRouter);
app.use(productsRouter);

export default app;
