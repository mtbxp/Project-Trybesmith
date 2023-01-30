import express from 'express';
import productsRouter from './routes/productsRouter';
import usersRouter from './routes/usersRouter';
import ordersRouter from './routes/ordersRouter';

const app = express();

app.use(express.json());

app.use(productsRouter);

app.use(usersRouter);

app.use(ordersRouter);

export default app;
