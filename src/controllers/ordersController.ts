import { Request, Response } from 'express';
import ordersService from '../services/ordersService';

const getAllOrdersController = async (_req: Request, res: Response) => {
  const results = await ordersService.getAllService();
  return res.status(200).json(results);
};

export default {
  getAllOrdersController,
};