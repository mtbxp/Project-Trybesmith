import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

export default async function getAll(_req: Request, res: Response) {
  const result = await ordersService();
  return res.status(200).json(result);
}
