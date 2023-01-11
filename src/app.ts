import express from 'express';

import usersRouter from './routes/users.routes';
import productsRouter from './routes/products.routes';

const app = express();

app.use(express.json());
app.use('/users', usersRouter);
app.use('/products', productsRouter);

export default app;
