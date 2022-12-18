import express from 'express';
import productRouter from './routes/productRoutes';
import userRouter from './routes/userRouter';

const app = express();

app.use(express.json());

// app.get('/', (req, res) => insertController.getAll(req, res));
app.use('/products', productRouter);
app.use('/users', userRouter);

export default app;
