import express from 'express';
import productsRoute from './route/productsRoute';
import usersRoute from './route/usersRoute';
import ordersRoute from './route/ordersRoute';

const app = express();

app.use(express.json());
app.use('/products', productsRoute);
app.use('/users', usersRoute);
app.use('/orders', ordersRoute);

export default app;
