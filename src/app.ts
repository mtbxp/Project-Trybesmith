import express from 'express';

import productsRouter from './router/products/index';
import usersRouter from './router/users/index';

const app = express();

app.use(express.json());
app.use(productsRouter);
app.use(usersRouter);

export default app;
