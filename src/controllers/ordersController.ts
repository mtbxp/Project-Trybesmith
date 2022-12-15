import { Request, Response } from 'express';
import ordersService from '../services/ordersService';

const getAllOrders = async (_req: Request, res: Response) => {
  const orders = await ordersService.getAllOrders();
  res.status(200).json(orders);
};

const addOrder = async (req: Request, res: Response):Promise<void> => {
  const result = await ordersService.addOrder(req.body);
  res.status(201).json(result);
};

export default {
  getAllOrders,
  addOrder,
};