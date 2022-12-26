import { Router } from 'express';
import productController from '../controllers/product.controller';

const routers = Router();

routers.post('/', productController.createProductController);

export default routers;
