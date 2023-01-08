import express from 'express';
import { productsRoute, usersRoute } from './routes';

const app = express();

app.use(express.json());

app.use('/products', productsRoute);
app.use('/users', usersRoute);

export default app;
