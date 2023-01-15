import express from 'express';
import productsRouter from './routes/Products.routes';
import usersRouter from './routes/Users.routes';

const app = express();

app.use(express.json());
app.use('/products', productsRouter);
app.use('/users', usersRouter);

export default app;
