import express from 'express';
import productsRoute from './routes/productsRoute';
import usersRoute from './routes/usersRoute';
import ordersRoute from './routes/ordersRoute';
import loginRoute from './routes/loginRoute';

const app = express();

app.use(express.json());

app.use('/products', productsRoute);
app.use('/users', usersRoute);
app.use('/orders', ordersRoute);
app.use('/login', loginRoute);

export default app;
