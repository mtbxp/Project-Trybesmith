import express from 'express';
import UsersRoutes from './routes/users.routes';
import ProductsRoutes from './routes/products.routes';
import OrdersRoutes from './routes/orders.routes';

const app = express();

app.use(express.json());

app.use(UsersRoutes);
app.use(ProductsRoutes);
app.use(OrdersRoutes);

export default app;
