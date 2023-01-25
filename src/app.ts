import express from 'express';
import productsRouter from './routes/products.routes';
import userRouter from './routes/user.routes';

const app = express();

app.use(express.json());

// PRODUCTS
app.use('/products', productsRouter);
app.use('/users', userRouter);
app.use(productsRouter);

// USERS

export default app;
