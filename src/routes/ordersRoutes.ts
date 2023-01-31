import { Router } from 'express';
import ordersController from '../controllers/ordersController';
import ordersMiddlewares from '../middlewares/ordersMiddlewares';

const ordersRouter = Router();

ordersRouter.get(
  '/',
  ordersController.getAllOrders,
);
ordersRouter.post(
  '/',
  ordersMiddlewares.isTokenValid,
  ordersMiddlewares.isProductValid,
  ordersController.newOrder,
);

export default ordersRouter;