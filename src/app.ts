import express from 'express';
import productRouter from './routes/productsRouter';
import userRouter from './routes/usersRoute';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);

export default app;
