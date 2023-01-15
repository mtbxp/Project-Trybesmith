//
import express from 'express';
import productsRoutes from './routes/products.routes';
import usersRoutes from './routes/user.routes';
import ordersRoute from './routes/orders.routes';

const app = express();

app.use(express.json());
app.use('/products', productsRoutes);
app.use('/users', usersRoutes);
app.use('/orders', ordersRoute);

export default app;
