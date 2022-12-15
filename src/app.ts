import express from 'express';
import * as controllers from './controller/products.controller';
import insertUser from './controller/users.controller';

const app = express();

app.use(express.json());

app.post('/products', controllers.insertProductController);
app.get('/products', controllers.getAll);
app.post('/users', insertUser);

export default app;
