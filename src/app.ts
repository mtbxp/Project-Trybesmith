import express from 'express';
import productRoutes from './routes/productRouter';
import userRoutes from './routes/userRouter';
import loginRoute from './routes/loginRouter';

const app = express();

app.use(express.json());

app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/login', loginRoute);

export default app;
