import express from 'express';
import routeProducts from './routes/route.products';
import routeUsers from './routes/route.users';

const app = express();

app.use(express.json());

app.use('/products', routeProducts);

app.use('/users', routeUsers);

export default app;
