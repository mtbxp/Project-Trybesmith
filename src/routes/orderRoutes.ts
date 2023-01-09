import { Router } from 'express';
import OrderController from '../controller/orderController';

const routerOrder = Router();
const controller = new OrderController();

routerOrder.get('/orders', (req, res) => controller.findAll(req, res));
export default routerOrder;