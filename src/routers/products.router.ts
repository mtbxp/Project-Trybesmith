import { Router } from 'express';
import * as productsController from '../controllers/products.controller';

const routers = Router();

routers.get('/', productsController.getAll);

routers.post('/', productsController.insertProduct);

export default routers;