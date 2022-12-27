import { Router } from 'express';
import ProductsController from '../controllers/products.controller';

const routerProduct = Router();

const productsController = new ProductsController();

routerProduct.post('/', productsController.create);

export default routerProduct;
