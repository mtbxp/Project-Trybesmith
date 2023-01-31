import { Request, Response } from 'express';
import ordersService from '../services/ordersService';

const getAllOrders = async (req: Request, res: Response) => {
  const result = await ordersService.getAllOrders();
  res.status(200).json(result);
};

const newOrder = async (req: Request, res: Response) => {
  const order = req.body;
  const result = await ordersService.newOrder(order);
  res.status(201).json(result);
};

export default {
  getAllOrders,
  newOrder,
};