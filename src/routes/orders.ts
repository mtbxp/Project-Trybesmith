import express from 'express';
import ordersController from '../controllers/orders.controller';

const route = express.Router();

route.get('/', ordersController.findAll);

export default route;