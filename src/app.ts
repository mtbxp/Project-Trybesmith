import express from 'express';

import productRoutes from './routes/products.routers';
import usersRoutes from './routes/users.routers';

const app = express();

app.use(express.json());

app.use('/products', productRoutes);
app.use('/users', usersRoutes);

export default app;