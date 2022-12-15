import express from 'express';
import productsRoutes from './routes/productsRoute';
import usersRoutes from './routes/usersRoute';
import ordersRoutes from './routes/ordersRoute';
import loginRoutes from './routes/loginRoute';
import httpErrorMiddleware from './middlewares/httpErrorMiddleware';

const app = express();

app.use(express.json());

app.use('/products', productsRoutes);

app.use('/users', usersRoutes);

app.use('/orders', ordersRoutes);

app.use('/login', loginRoutes);

app.use(httpErrorMiddleware);

export default app;
