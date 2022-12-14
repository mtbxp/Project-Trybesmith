import express from 'express';
import productsRoute from './routes/productsRoute';
import usersRoute from './routes/usersRoute';
import ordersRoute from './routes/ordersRoute';

const app = express();

app.use(express.json());

app.use('/products', productsRoute);
app.use('/users', usersRoute);
app.use('/orders', ordersRoute);

export default app;
