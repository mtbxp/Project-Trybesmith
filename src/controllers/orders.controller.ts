import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

export default async function getAllOrders(req: Request, res: Response) {
  const orders = await ordersService();

  return res.status(200).json(orders);
}