import express from 'express';
import productRoutes from './routes/productRoutes';
import userRoutes from './routes/userRoutes';
import loginRoutes from './routes/loginRoutes';

const app = express();

app.use(express.json());

app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/login', loginRoutes);

export default app;

// faltando listagem de ordens de produto