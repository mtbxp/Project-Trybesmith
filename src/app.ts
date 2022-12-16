import express from 'express';
import productsRoutes from './routes/productsRoute';
import usersRoutes from './routes/usersRoute';
import routerOrd from './routes/ordersRoute';
import routerlogin from './routes/loginRoute';

const app = express();

app.use(express.json());

app.use('/products', productsRoutes);

app.use('/users', usersRoutes);

app.use('/orders', routerOrd);

app.use('/login', routerlogin);

export default app;
