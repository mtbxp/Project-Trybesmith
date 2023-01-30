import express from 'express';
import productsRouter from './routes/productsRouter';
import usersRouter from './routes/usersRouter';
import ordersRouter from './routes/ordersRouter';
import loginRouter from './routes/loginRouter';

const app = express();

app.use(express.json());

app.use(productsRouter);

app.use(usersRouter);

app.use(ordersRouter);

app.use(loginRouter);

export default app;
