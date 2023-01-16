import express from 'express';

import productRouter from './router/products.router';
import userRouter from './router/users.router';
// começar
const app = express();

app.use(express.json());
app.use('/products', productRouter);
app.use('/users', userRouter);

export default app;
