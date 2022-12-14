import { Router } from 'express';
import productsController from '../controllers/productsController';

const routers = Router();

routers.get('/', productsController.getAllProducts);
routers.post('/', productsController.addProduct);

export default routers;