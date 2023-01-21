import express, { Application } from 'express';
import 'express-async-errors';

import productRouter from './routes/product.route';
import userRouter from './routes/user.route';
import orderRouter from './routes/order.route';
import loginRouter from './routes/login.route';
import validateLoginFields from './middlewares/validateLoginFields';
import httpErrorMiddleware from './middlewares/http.error.middleware';

const app: Application = express();

app.use(express.json());

app.use('/login', validateLoginFields, loginRouter);
app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);

app.use(httpErrorMiddleware);

export default app;
// teste