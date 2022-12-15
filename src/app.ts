import express from 'express';
import productsRoutes from './routes/productsRoute';
import usersRoutes from './routes/usersRoute';

const app = express();

app.use(express.json());

app.use('/products', productsRoutes);

app.use('/users', usersRoutes);

export default app;
