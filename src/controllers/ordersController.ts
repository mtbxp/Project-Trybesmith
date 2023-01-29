import { Request, Response } from 'express';
import ordersService from '../services/ordersService';

const listOrders = async (req: Request, res: Response) => {
  const orders = await ordersService.listOrders();
  res.status(200).json(orders);
};

export default { listOrders };
