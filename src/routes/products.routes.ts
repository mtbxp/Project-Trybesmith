import { Router } from 'express';
import productsController from '../controller/products.controller';

const procuctsRoute = Router();

procuctsRoute.post('/', productsController.createProduct);
procuctsRoute.get('/', productsController.getAllProducts);

export default procuctsRoute;