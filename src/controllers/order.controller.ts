import { Request, Response } from 'express';
import orderService from '../services/orders.service';

const getAllOrdersController = async (_req: Request, res: Response): Promise<void> => {
  const allOrders = await orderService.getAllOrdersService();
  res.status(200).json(allOrders);
};

export default {
  getAllOrdersController,
};
