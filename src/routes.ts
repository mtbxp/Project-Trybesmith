import { Router } from 'express';

import * as productsController from './controllers/products.controller';
import * as usersController from './controllers/users.controller';

const routes = Router();

routes.post('/products', productsController.createProduct);
routes.get('/products', productsController.getAllProducts);

routes.post('/users', usersController.createUser);

export default routes;
