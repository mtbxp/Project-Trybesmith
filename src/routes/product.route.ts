import { Router } from 'express';
import productsController from '../controllers/product.controller';
import validateProduct from '../middlewares/product.valid';

const routers = Router();

routers.get('/', productsController.getAllProducts);
routers.post('/', validateProduct, productsController.newProduct);

export default routers;