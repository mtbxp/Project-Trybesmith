import express from 'express';
import productRouter from './routes/productsRouter';
import usersRouter from './routes/usersRouter';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', usersRouter);

export default app;
