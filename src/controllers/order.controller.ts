import { Request, Response } from 'express';
import * as orderService from '../services/order.service';

export async function getAll(_req: Request, res: Response): Promise<void> {
  const { result, status } = await orderService.getAll();

  res.status(status).json(result);
}

export async function oi() {
  return 'oi';
}