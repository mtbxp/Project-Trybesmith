import { Request, Response } from 'express';

import orderService from '../services/orderService';

const getAllOrders = async (_req: Request, res: Response) => {
  const { statusCode, allOrders } = await orderService.getAllOrders();

  return res.status(statusCode).json(allOrders);
};

export default {
  getAllOrders,
};