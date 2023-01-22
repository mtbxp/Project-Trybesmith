import express from 'express';
import routesProduct from './routes/routesProduct';
import routesUser from './routes/routes.User';
import routesOrder from './routes/routes.Order';
import routesLogin from './routes/routes.login';
import httpErrorMiddleware from './middlewares/http.error';

const app = express();

app.use(express.json());
app.use('/products', routesProduct);
app.use('/users', routesUser);
app.use('/orders', routesOrder);
app.use('/login', routesLogin);
app.use(httpErrorMiddleware);
 
export default app;
