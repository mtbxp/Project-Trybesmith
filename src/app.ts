import express from 'express';
import productRouter from './routes/product.routes';
import routerUser from './routes/user.routes';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', routerUser);

export default app;
