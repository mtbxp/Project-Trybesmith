import express from 'express';
import OrderController from '../controllers/orderController';
import Middleware from '../middlewares';
import { orderSchema } from '../middlewares/joi';

const orderRouter = express.Router();

const orderController = new OrderController();
const middleware = new Middleware(orderSchema);

orderRouter.get('/', orderController.getAll);
orderRouter.post('/', middleware.validateAuth, middleware.validateFields, orderController.create);

export default orderRouter;