import { Request, Response } from 'express';
import ordersService from '../services/order.service';

const getAllOrders = async (_req: Request, res: Response) => {
  const orders = await ordersService.getAllOrders();
  res.status(200).json(orders);
};

const newOrder = async (req: Request, res: Response):Promise<void> => {
  const result = await ordersService.newOrder(req.body);
  res.status(201).json(result);
};

export default {
  getAllOrders,
  newOrder,
};