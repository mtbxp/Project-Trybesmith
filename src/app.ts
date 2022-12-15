import express from 'express';
import getAll from './controller/orders.controller';
import * as controllers from './controller/products.controller';
import insertUser from './controller/users.controller';

const app = express();

app.use(express.json());

app.post('/products', controllers.insertProductController);
app.get('/products', controllers.getAll);
app.post('/users', insertUser);
app.get('/orders', getAll);

export default app;
