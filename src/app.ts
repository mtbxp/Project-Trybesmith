import express from 'express';
import routers from './routers/index';

const app = express();

app.use(express.json());

app.use(routers.usersRouter);
app.use('/products', routers.productsRouter);
app.use('/orders', routers.ordersRouter);

export default app;
