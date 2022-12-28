import express from 'express';
import productRoutes from './routes/productsRoute';
import userRoutes from './routes/usersRoute';
import orderRoutes from './routes/ordersRoute';
import * as usersController from './controllers/usersController';

const app = express();

app.use(express.json());
app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/orders', orderRoutes);

// Verificar Login
app.use('/login', usersController.verifyLogin);

export default app;
