import { Request, Response } from 'express';
import * as service from '../services/orders.service';

export async function getOrders(_req: Request, res: Response) {
  const response = await service.getOrders();
  return res.status(200).json(response);
}

export async function post() {
  return null;
}