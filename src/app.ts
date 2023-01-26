import express from 'express';

import ProductsRouter from './routers/product.router';
import UsersRouter from './routers/user.router';
import OrdersRouter from './routers/orders.router';

const app = express();

app.use(express.json());

app.use(OrdersRouter);
app.use(ProductsRouter);
app.use(UsersRouter);

export default app;
