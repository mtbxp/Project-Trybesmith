import express from 'express';
import productRoute from './routes/product.route';
import usersRouter from './routes/user.route';

const app = express();

app.use(express.json());

app.use('/products', productRoute);

app.use('/users', usersRouter);

export default app;
