import { Router } from 'express';

import * as productsController from './controllers/products.controller';
import * as usersController from './controllers/users.controller';
import * as ordersController from './controllers/orders.controller';
import protectedRoute from './middlewares/protected-route';

const routes = Router();

routes.post('/products', productsController.createProduct);
routes.get('/products', productsController.getAllProducts);

routes.post('/users', usersController.createUser);
routes.post('/login', usersController.login);

routes.post('/orders', protectedRoute, ordersController.createOrder);
routes.get('/orders', ordersController.getAllOrders);

export default routes;
