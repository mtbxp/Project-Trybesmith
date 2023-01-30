import { Request, Response } from 'express';
import orderService from '../services/ordersService';

const getAllOrders = async (_req: Request, res: Response) => {
  const result = await orderService.getAllOrders();
  res.status(200).json(result);
};

export default {
  getAllOrders,
};