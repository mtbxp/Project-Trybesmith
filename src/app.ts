import express from 'express';
import ordersRoutes from './routes/orders.routers';

import productRoutes from './routes/products.routers';
import usersRoutes from './routes/users.routers';

const app = express();

app.use(express.json());

app.use('/products', productRoutes);
app.use('/users', usersRoutes);
app.use('/orders', ordersRoutes);

export default app;