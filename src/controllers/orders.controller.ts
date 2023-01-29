import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

const getAll = async (req: Request, res: Response) => {
  const { status, data } = await ordersService.getAll();
  res.status(status).json(data);
};

const create = async (req: Request, res: Response) => {
  const result = await ordersService.create(req.body);
  res.status(201).json(result);
};

export default {
  getAll,
  create,
};
