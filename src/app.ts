import express from 'express';
import productsRoutes from './routes/products.routes';
import usersRoutes from './routes/users.routes';
import ordersRoutes from './routes/orders.routes';
import loginRoutes from './routes/login.routes';

const app = express();

app.use(express.json());

app.use(productsRoutes);
app.use(usersRoutes);
app.use(ordersRoutes);
app.use(loginRoutes);

export default app;
