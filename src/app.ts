import express from 'express';
import routesProduct from './routes/routesProduct';
import routesUser from './routes/routesUser';
import routesOrder from './routes/routesOrder';

const app = express();

app.use(express.json());
app.use('/products', routesProduct);
app.use('/users', routesUser);
app.use('/orders', routesOrder);

export default app;
