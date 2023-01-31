import { Request, Response } from 'express';
import ordersService from '../services/orders.service';
import statuses from '../utils/statuses';

const getAllOrders = async (_req: Request, res: Response) => {
  const allOrders = await ordersService.getAllOrders();
  res.status(statuses.SUCCESSFUL_STATUS).json(allOrders);
};

const createOrder = async (req: Request, res: Response) => {
  const createdOrder = await ordersService.createOrder(req.body);
  res.status(statuses.SUCCESSFULLY_CREATED).json(createdOrder);
};

export default { getAllOrders, createOrder };
