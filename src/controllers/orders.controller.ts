import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

const getAll = async (req: Request, res: Response) => {
  const { status, data } = await ordersService.getAll();
  res.status(status).json(data);
};

export default {
  getAll,
};
