import { Request, Response } from 'express';
import ordersService from '../services/orders.service';
import statuses from '../utils/statuses';

const getAllOrders = async (_req: Request, res: Response) => {
  const allOrders = await ordersService.getAllOrders();
  res.status(statuses.SUCCESSFUL_STATUS).json(allOrders);
};

export default { getAllOrders };
