import { Request, Response } from 'express';
import orderService from '../services/ordersService';

const getAllOrders = async (_req: Request, res: Response) => {
  const result = await orderService.getAllOrders();
  res.status(200).json(result);
};

const createOrder = async (req: Request, res: Response) => {
  const { productsIds } = req.body;
  const { authorization: token } = req.headers;  
  const newOrder = await orderService.createOrder(token as string, productsIds);
  return res.status(201).json(newOrder);
};

export default {
  getAllOrders,
  createOrder,
};