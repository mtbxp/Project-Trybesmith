import express from 'express';
import productRoute from './routes/products.route';
import userRoute from './routes/user.route';
import ordersRoute from './routes/orders.route';

const app = express();

app.use(express.json());

app.use('/products', productRoute);
app.use('/users', userRoute);
app.use('/orders', ordersRoute);

export default app;
