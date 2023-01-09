import express from 'express';
import productsRouter from './routes/products';
import userRouter from './routes/users';
import loginRouter from './routes/login';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/users', userRouter);
app.use('/login', loginRouter);

export default app;
