import express from 'express';
import productsControllers from './controllers/products.controllers';
import ordersControllers from './controllers/orders.controllers';
import usersControllers from './controllers/users.controllers';

const app = express();

app.use(express.json());

app.get('/products', productsControllers.getAll);
app.post('/products', productsControllers.insert);
app.get('/orders', ordersControllers.getAll);
app.post('/users', usersControllers.insert);

export default app;
