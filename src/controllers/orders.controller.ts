import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

const getAllOrders = async (_req: Request, res: Response) => {
  const order = await ordersService.getAllOrders();

  return res.status(200).json(order);
};

export default {
  getAllOrders,
};
