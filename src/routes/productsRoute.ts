import { Router } from 'express';
import productsController from '../controllers/productsController';
import validateProduct from '../middlewares/validateProduct';

const routers = Router();

routers.get('/', productsController.getAllProducts);
routers.post('/', validateProduct, productsController.addProduct);

export default routers;