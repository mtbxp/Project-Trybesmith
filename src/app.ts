import express from 'express';
import routerProduct from './routers/Products';
import routerUser from './routers/User';
import routerOrder from './routers/Order';

const app = express();

app.use(express.json());

app.use('/products', routerProduct);
app.use('/users', routerUser);
app.use('/orders', routerOrder);

export default app;
