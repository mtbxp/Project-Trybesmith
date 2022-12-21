import express from 'express';
import products from './routes/products.routes';
import users from './routes/user.routes';
import orders from './routes/orders.routes';

const app = express();

app.use(express.json());

app.use('/products', products);
app.use('/users', users);
app.use('/orders', orders);

export default app;
