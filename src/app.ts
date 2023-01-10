import express from 'express';
import producsRouter from './routes/products.routes';
import usersRouter from './routes/users.routes';

const app = express();

app.use(express.json());

app.use('/products', producsRouter);
app.use('/users', usersRouter);

export default app;
