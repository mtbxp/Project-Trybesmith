import express from 'express';
import productsRouter from './routes/productsRoute';
import usersRouter from './routes/usersRoute';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);

app.use('/users', usersRouter);

export default app;
