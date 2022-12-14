import { Request, Response } from 'express';
import getOrders from '../services/order.service';

const getAllOrders = async (_req: Request, res: Response) => {
  const orders = await getOrders();
  return res.status(200).json(orders);
};

export default getAllOrders;