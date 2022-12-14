import { Router } from 'express';
import productsController from '../controllers/productsController';

const routers = Router();

routers.get('/', productsController.getAllProducts);

export default routers;