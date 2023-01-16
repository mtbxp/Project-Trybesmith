import express from 'express';
import router from './routes/product.router';
import userRouter from './routes/user.router';
import ordersRouter from './routes/orders.router';

const app = express();

app.use(express.json());

// Rotas
app.use('/products', router);
app.use('/users', userRouter);
app.use('/orders', ordersRouter);

export default app;
