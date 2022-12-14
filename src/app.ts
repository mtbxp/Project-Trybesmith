import express from 'express';
import productsRoute from './route/productsRoute';
import usersRoute from './route/usersRoute';

const app = express();

app.use(express.json());
app.use('/products', productsRoute);
app.use('/users', usersRoute);

export default app;
