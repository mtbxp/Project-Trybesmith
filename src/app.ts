import express from 'express';
import productsRouter from './routes/products';
import usersRouter from './routes/users';

const app = express();

app.use(express.json());
app.use('/products', productsRouter);
app.use('/users', usersRouter);

export default app;
