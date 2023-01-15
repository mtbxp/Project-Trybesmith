import { Request, Response } from 'express';
import orderService from '../services/orders.services';

const getAll = async (_req: Request, res: Response) => {
  const allOrders = await orderService.getAll();
  return res.status(200).json(allOrders);
};

export default {
  getAll,
};