import express from 'express';
import productsControllers from './controllers/products.controllers';

const app = express();

app.use(express.json());

app.get('/products', productsControllers.getAll);
app.post('/products', productsControllers.insert);

export default app;
