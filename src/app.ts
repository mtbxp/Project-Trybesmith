import express from 'express';
import { ordersRoute, productsRoute, usersRoute } from './routes';

const app = express();

app.use(express.json());

app.use('/products', productsRoute);
app.use('/users', usersRoute);
app.use('/orders', ordersRoute);

export default app;
