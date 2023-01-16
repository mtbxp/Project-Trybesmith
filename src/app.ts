import express from 'express';
import productsControllers from './controllers/products.controllers';
import ordersControllers from './controllers/orders.controllers';

const app = express();

app.use(express.json());

app.get('/products', productsControllers.getAll);
app.post('/products', productsControllers.insert);
app.get('/orders', ordersControllers.getAll);

export default app;
