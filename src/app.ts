import express from 'express';
import productsRoutes from './routes/productsRoute';
import usersRoutes from './routes/usersRoute';
import ordersRoutes from './routes/ordersRoute';

const app = express();

app.use(express.json());

app.use('/products', productsRoutes);

app.use('/users', usersRoutes);

app.use('/orders', ordersRoutes);

export default app;
