import express from 'express';
import routerProduct from './routers/Products';
import routerUser from './routers/User';

const app = express();

app.use(express.json());

app.use('/products', routerProduct);
app.use('/users', routerUser);

export default app;
