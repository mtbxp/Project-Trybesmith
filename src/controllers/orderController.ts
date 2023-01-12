import { Request, Response } from 'express';
import orderService from '../services/orderService';
import { OK_CODE } from '../utils';

const getOrders = async (_req: Request, res: Response) => {
  const orders = await orderService.getOrders();
  return res.status(OK_CODE).json(orders);
};

export default {
  getOrders,
};
