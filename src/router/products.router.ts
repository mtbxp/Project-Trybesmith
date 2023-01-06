import { Router } from 'express';
import productsController from '../controllers/products.controller';
import validate from '../middlewares/postValidation';

const productsRoute = Router();

productsRoute.post('/', validate, productsController.create);
productsRoute.get('/', productsController.getAll);

export default productsRoute;
