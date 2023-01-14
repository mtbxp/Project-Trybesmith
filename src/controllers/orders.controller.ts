import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

const getAllOrders = async (_req: Request, res: Response) => {
  const { statusErro, response } = await ordersService.getAllOrders();

  if (statusErro) return res.status(404).json(response);
  return res.status(200).json(response);
};

export default {
  getAllOrders,
};