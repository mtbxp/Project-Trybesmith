import express from 'express';
import productRouter from './routes/product.routes';
import userRouter from './routes/user.routes';
import orderRouter from './routes/order.routes';
import loginRouter from './routes/login.routes';
import validateLogin from './middlewares/validateLogin';
import { validateName, validateAmount } from './middlewares/validateProduct';

const app = express();

app.use(express.json());

app.use('/products', validateName, validateAmount, productRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);
app.use('/login', validateLogin, loginRouter);

export default app;
