import { Router } from 'express';
import * as productsContoller from '../controllers/productsController';
import * as usersContoller from '../controllers/usersController';
import { validateToken } from '../auth/validateJWT';
import { ValidLogin, checkProd, checkUsers, checkUsers2, checkUsers3, checkOrder }
  from '../middlewares/middleWares';

// const midwares = require('../middlewares/middleWares');

// const token = require('../auth/validateJWT');

const productRoute = Router();
const userRoute = Router();

productRoute.post('/products/', checkProd, productsContoller.addProduct);
productRoute.get('/products/', productsContoller.getAllProds);
productRoute.get('/orders/', productsContoller.getAllOrders);
productRoute.post('/orders/', validateToken, checkOrder, productsContoller.addOrder);

userRoute.post('/users/', checkUsers, checkUsers2, checkUsers3, usersContoller.createUser);
userRoute.post('/login/', ValidLogin, usersContoller.login);

export {
  productRoute,
  userRoute,
};
