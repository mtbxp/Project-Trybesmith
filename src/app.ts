import express from 'express';
import productsRoute from './routes/product.route';
import usersRoute from './routes/user.route';
import ordersRoute from './routes/order.route';
import loginRoute from './routes/login.route';

const app = express();

app.use(express.json());
app.use('/products', productsRoute);
app.use('/users', usersRoute);
app.use('/orders', ordersRoute);
app.use('/login', loginRoute);

export default app;
