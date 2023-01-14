import express from 'express';
import routesProduct from './routes/routesProduct';
import routesUser from './routes/routesUser';

const app = express();

app.use(express.json());
app.use('/products', routesProduct);
app.use('/users', routesUser);

export default app;
