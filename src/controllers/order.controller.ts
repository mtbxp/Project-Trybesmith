import { Request, Response } from 'express';
import orderService from '../services/orders.service';

const getAllOrdersController = async (_req: Request, res: Response) => {
  const allOrders = await orderService.getAllOrdersService();
  return res.status(200).json(allOrders);
};

export default {
  getAllOrdersController,
};
