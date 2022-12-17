import express, { Application } from 'express';
import routes from './routes';

const app: Application = express();

app.use(express.json());

app.use('/products', routes.productsRoute);

app.use('/users', routes.userRoute);

app.use('/orders', routes.ordersRoute);

export default app;
