import { Router } from 'express';

import * as productsController from './controllers/products.controller';

const routes = Router();

routes.post('/products', productsController.createProduct);

export default routes;
