import express from 'express';
import ProductRouter from './router/product.router';
import UserRouter from './router/user.router';

const app = express();

app.use(express.json());

app.use(ProductRouter);
app.use(UserRouter);

export default app;
