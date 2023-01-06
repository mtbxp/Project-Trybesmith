import express from 'express';
import ProductRoute from './routes/product.routes';
import UserRoute from './routes/user.routes';
import OrdersRoute from './routes/orders.routes'; 

const app = express();

app.use(express.json());
app.use(ProductRoute);
app.use(UserRoute);
app.use(OrdersRoute);

export default app;
