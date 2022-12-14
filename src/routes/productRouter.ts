import { Router } from 'express';
import productsController from '../controllers/productController';

const routers = Router();

routers.get('/', productsController.getAllProducts);

export default routers;