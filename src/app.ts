import express from 'express';
import routeProducts from './routes/route.products';
import routeUsers from './routes/route.users';
import routeOrders from './routes/route.orders';

const app = express();

app.use(express.json());

app.use('/products', routeProducts);

app.use('/users', routeUsers);

app.use('/orders', routeOrders);

export default app;
