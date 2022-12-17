import { Router } from 'express';
import validateToken from '../auth/validateJWT';
import * as ordersController from '../controllers/ordersController';
import validationProductsIds from '../middlewares/productsIdsValidation';

const routerOrd = Router();

routerOrd.get('/', ordersController.getAllOrdersC);
routerOrd.post('/', validateToken, validationProductsIds, ordersController.createOrdersC);

export default routerOrd;