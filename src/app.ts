import express from 'express';
import productRoutes from './routes/product.routes';
import userRoutes from './routes/user.routes';
import orderRoutes from './routes/order.routes';
import loginRoutes from './routes/login.routes';

const app = express();

app.use(express.json());

app.use('/login', loginRoutes);
app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/orders', orderRoutes);

export default app;
