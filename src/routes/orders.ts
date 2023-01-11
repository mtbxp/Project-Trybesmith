import express from 'express';
import ordersController from '../controllers/orders.controller';
import productsValidation from '../middlewares/productsValidation';
import validations from '../middlewares/validations';

const route = express.Router();

route.get('/', ordersController.findAll);

route.post(
  '/',
  validations.tokenValidation,
  productsValidation.productsIdsValidation,
  ordersController.create,
);

export default route;