import express from 'express';

import httpErrorMiddleware from './middlewares/http.error.middleware';
import loginRoute from './routes/login.routes';
import ordersRoute from './routes/orders.routes';
import productsRoute from './routes/products.routes';
import userRoute from './routes/user.routes';

const app = express();

app.use(express.json());

app.use('/login', loginRoute);
app.use('/users', userRoute);
app.use('/products', productsRoute);
app.use('/orders', ordersRoute);

app.use(httpErrorMiddleware);

export default app;
