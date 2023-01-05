import { Router } from 'express';
import productsController from '../controllers/products.controller';

const productsRoute = Router();

productsRoute.post('/', productsController.create);
productsRoute.get('/', productsController.getAll);

export default productsRoute;
