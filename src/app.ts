import express from 'express';
import productsRouter from './routers/productsRouter';
import usersRouter from './routers/usersRouter';

const app = express();

app.use(express.json());
app.use('/products', productsRouter);
app.use('/users', usersRouter);

export default app;
