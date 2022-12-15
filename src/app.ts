import express from 'express';
import routerOrders from './routes/orders.routes';
import routerProducts from './routes/products.routes';
import routerUsers from './routes/users.routes';

const app = express();

app.use(express.json());

app.use('/products', routerProducts);
app.use('/users', routerUsers);
app.use('/orders', routerOrders);

export default app;
