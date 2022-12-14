import express from 'express';
import product from './router/productRoute';
import users from './router/userRoute';

const app = express();

app.use(express.json());
app.use('/products', product);
app.use('/users', users);


export default app;
