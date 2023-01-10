import express from 'express';

import userRouter from './routes/user.routes';
import productsRouter from './routes/products.routes';

const app = express();

app.use(express.json());
app.use('/user', userRouter);
app.use('/products', productsRouter);

export default app;
