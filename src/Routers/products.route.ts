import { Router } from 'express';
import productsController from '../controllers/products.controller';

const routes = Router();

routes.get('/products', productsController.getAll);

export default 
routes;
