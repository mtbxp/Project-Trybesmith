import express from 'express';
import ProductsController from './controllers/products.controller';
import UsersController from './controllers/users.controller';
import OrdersController from './controllers/orders.controller';

const app = express();

app.use(express.json());

app.get('/products', ProductsController.getAllProducts);
app.post('/products', ProductsController.addNewProduct);

app.post('/users', UsersController.addNewProduct);

app.get('/orders', OrdersController.getAllOrders);

export default app;
