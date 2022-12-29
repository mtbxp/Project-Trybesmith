import { Request, Response } from 'express';
import findOrders from '../services/order.service';

export default async function getOrders(_req: Request, res: Response): Promise<void> {
  const { status, data } = await findOrders();
  res.status(status).json(data);
}