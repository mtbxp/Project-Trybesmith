import express from 'express';
import productRouter from './routes/products.routes';
import usersRouter from './routes/users.routes';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', usersRouter);

export default app;
