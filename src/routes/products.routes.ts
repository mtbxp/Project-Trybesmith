import { Router } from 'express';
import productsController from '../controller/products.controller';
import validateNewProduct from '../middlewares/newProduct.middleware';

const productsRoute = Router();

productsRoute.post('/', validateNewProduct, productsController.createProduct);
productsRoute.get('/', productsController.getAllProducts);

export default productsRoute;