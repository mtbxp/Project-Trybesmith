import { Router } from 'express';
import ProductsController from '../controllers/products.controller';

const routerProduct = Router();

const productsController = new ProductsController();

routerProduct.get('/', productsController.getAllProducts);
routerProduct.post('/', productsController.createProduct);

export default routerProduct;
