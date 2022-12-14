import express from 'express';
import UsersRoutes from './routes/users.routes';
import ProductsRoutes from './routes/products.routes';

const app = express();

app.use(express.json());

app.use(UsersRoutes);
app.use(ProductsRoutes);

export default app;
