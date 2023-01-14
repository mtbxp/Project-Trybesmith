import express from 'express';
// import loginRouter from './routes/loginRouter';
import ordersRouter from './routes/ordersRouter';
import productsRouter from './routes/productsRouter';
import userRouter from './routes/usersRouter';

const app: express.Application = express();

app.use(express.json());

app.use('/users', userRouter);
app.use('/products', productsRouter);
app.use('/orders', ordersRouter);

export default app;
