import express from 'express';
import * as controllers from './controller/products.controller';

const app = express();

app.use(express.json());

app.post('/products', controllers.insertProductController);
app.get('/products', controllers.getAll);

export default app;
