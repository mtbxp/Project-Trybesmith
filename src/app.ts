import express from 'express';
import productsRouter from './routes/productsRouter';
import userRouter from './routes/usersRouter';

const app: express.Application = express();

app.use(express.json());

app.use('/users', userRouter);
app.use('/products', productsRouter);

export default app;
