import express from 'express';
import productRouter from './routes/products.routes';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
// app.use('/login', loginRouter);
// app.use('/users', usersRouter);
// app.use('/orders', orderRouter);

export default app;
