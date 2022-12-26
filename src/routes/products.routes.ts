import { Router } from 'express';
import productController from '../controllers/product.controller';

const routers = Router();

routers.get('/', productController.getAllProductController);

routers.post('/', productController.createProductController);

export default routers;
