import { Router } from 'express';
import productsController from '../controllers/products.controllers';

const routers = Router();

routers.post('/', productsController.createProduct);
routers.get('/', productsController.getAll);

export default routers;