import { Request, Response } from 'express';
import orderService from '../services/orders.service';

const getAll = async (_req: Request, res: Response):Promise<void> => {
  const orders = await orderService.getAll();
  res.status(200).json(orders);
};

const create = async (req: Request, res: Response):Promise<void> => {
  const { user, productsIds } = req.body;
  
  const orderCreated = await orderService.create(user, productsIds);
  res.status(201).json(orderCreated);
};

export default {
  getAll,
  create,
};