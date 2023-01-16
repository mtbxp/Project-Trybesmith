import express from 'express';
import ProductRoutes from './routes/product.routes';
import UserRouter from './routes/user.routes';
import OrderRouter from './routes/order.routes';

const app = express();

app.use(express.json());
app.use(ProductRoutes);
app.use(UserRouter);
app.use(OrderRouter);

export default app;
