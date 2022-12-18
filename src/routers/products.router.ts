import { Router } from 'express';
import * as productsController from '../controllers/products.controller';
import produtoValidate from '../middlewares/produtos.middleware';

const routers = Router();

routers.get('/', productsController.getAll);

routers.post('/', produtoValidate, productsController.insertProduct);

export default routers;