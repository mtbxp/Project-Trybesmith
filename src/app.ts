import express from 'express';
import products from './routes/products.routes';
import users from './routes/user.routes';

const app = express();
// vqv
app.use(express.json());

app.use('/products', products);
app.use('/users', users);

export default app;
