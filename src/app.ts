import express from 'express';
import routerProducts from './routes/products.routes';
import routerUsers from './routes/users.routes';

const app = express();

app.use(express.json());

app.use('/products', routerProducts);
app.use('/users', routerUsers);

export default app;
