import express from 'express';
import productsRoutes from './routers/products.routes';
import userRoutes from './routers/user.routes';

const app = express();

app.use(express.json());

app.use(productsRoutes);
app.use(userRoutes);

export default app;
