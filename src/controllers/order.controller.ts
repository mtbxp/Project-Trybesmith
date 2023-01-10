import { Request, Response } from 'express';
import orderService from '../services/order.service';

const listAllOrders = async (_req: Request, res: Response) => {
  const orders = await orderService.listAllOrders();

  return res.status(200).json(orders);
};

export default {
  listAllOrders,
};