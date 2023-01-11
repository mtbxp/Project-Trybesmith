import express from 'express';

import usersRouter from './routes/users.routes';
import productsRouter from './routes/products.routes';
import ordersRouter from './routes/order.routes';

const app = express();

app.use(express.json());
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/orders', ordersRouter);

export default app;
