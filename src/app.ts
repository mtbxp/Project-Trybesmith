import express from 'express';
import produtcsRoutes from './routes/products.routes';
import usersRoutes from './routes/users.routes';

const app = express();

app.use(express.json());

app.use(produtcsRoutes);

app.use(usersRoutes);

export default app;
