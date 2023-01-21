import { Request, Response } from 'express';
import orderService from '../services/order.service';
import { Order } from '../types';

const getAll = async (_req: Request, res: Response): Promise<void> => {
  const { status, data } = await orderService.getAll();
  res.status(status).json(data);
};

const create = async (req: Request, res: Response): Promise<void> => {
  const orderWithToken = req.body as Order;
  const { status, data, error } = await orderService.create(orderWithToken);
  if (error) {
    res.status(status).json(error);
    return;
  }
  res.status(status).json(data);
};

export default {
  getAll,
  create,
};
