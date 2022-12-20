import express from 'express';

import productsRouter from './router/products/index';
import usersRouter from './router/users/index';
import ordersRouter from './router/orders/index';

const app = express();

app.use(express.json());
app.use(productsRouter);
app.use(usersRouter);
app.use(ordersRouter);

export default app;
