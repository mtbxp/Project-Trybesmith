import express from 'express';

import getOrdersController
  from '../controller/ordersController';

const ordersRouter = express.Router();

ordersRouter.get('/', getOrdersController);

export default ordersRouter;