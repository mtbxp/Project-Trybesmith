import { Router } from 'express';
import productsController from '../controller/products.controller';

const productsRoute = Router();

productsRoute.post('/', productsController.createProduct);
productsRoute.get('/', productsController.getAllProducts);

export default productsRoute;