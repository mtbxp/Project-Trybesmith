import { Request, Response } from 'express';
import ordersService from '../services/ordersService';

const listOrders = async (req: Request, res: Response) => {
  const orders = await ordersService.listOrders();
  res.status(200).json(orders);
};

const addOrders = async (req: Request, res: Response) => {
  const infos = req.body;
  const addedOrder = await ordersService.addOrders(infos);
  res.status(201).json(addedOrder);
};

export default { listOrders, addOrders };
