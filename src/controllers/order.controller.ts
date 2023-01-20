import { Request, Response } from 'express';
import orderService from '../services/order.service';

const getAll = async (_req: Request, res: Response): Promise<void> => {
  const { status, data } = await orderService.getAll();
  res.status(status).json(data);
};

export default {
  getAll,
};
