import express from 'express';
import productsRoutes from './routers/products.routes';
import userRoutes from './routers/user.routes';
import ordersRoutes from './routers/orders.routes';

const app = express();

app.use(express.json());

app.use(productsRoutes);
app.use(userRoutes);
app.use(ordersRoutes);

export default app;
