import { Request, Response } from 'express';
import ordersService from '../services/ordersServices';

const getAllOrders = async (_req: Request, res: Response) => {
  const allOrders = await ordersService.getAllOrders();

  return res.status(200).json(allOrders);
};

export default {
  getAllOrders,
};