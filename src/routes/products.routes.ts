import { Router } from 'express';
import productsController from '../controllers/products.controller';

const routerProducts = Router();

routerProducts.post('/', productsController.createNewProducts);
routerProducts.get('/', productsController.getAllProducts);
export default routerProducts;