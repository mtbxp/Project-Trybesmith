import express from 'express';
import ProductsController from './controllers/product.controllers';
import UsersController from './controllers/user.controller';
import OrdersController from './controllers/order.controllers';

const app = express();
// criando PR
app.use(express.json());

app.post('/products', ProductsController.postProduct);
app.get('/products', ProductsController.getAllProducts);
app.post('/users', UsersController.postUser);
app.get('/orders', OrdersController.getAllOrders);

export default app;
