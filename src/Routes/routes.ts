import { Router } from 'express';
// const userController = require('../controllers/userController');
import * as productsContoller from '../controllers/productsController';
import * as usersContoller from '../controllers/usersController';
import { ValidLogin } from '../middlewares/middleWares';

// const midwares = require('../middlewares/middleWares');

// const token = require('../auth/validateJWT');

const productRoute = Router();
const userRoute = Router();

productRoute.post('/products/', productsContoller.addProduct);
productRoute.get('/products/', productsContoller.getAllProds);
productRoute.get('/orders/', productsContoller.getAllOrders);
// productRoute.post('/products/', midwares.ValidLogin, productsController.addProduct);

userRoute.post('/users/', usersContoller.createUser);
userRoute.post('/login/', ValidLogin, usersContoller.login);

export {
  productRoute,
  userRoute,
};
