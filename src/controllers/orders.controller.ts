import { Request, Response } from 'express';
import getOrders from '../services/orders.service';

export default async function findOrders(_req: Request, res: Response) {
  const { message } = await getOrders();
  return res.status(200).json(message);
}