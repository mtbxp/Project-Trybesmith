import { Request, Response } from 'express';
import * as orderService from '../services/orderService';

export async function create(req: Request, res: Response) {
  const { productsIds, user } = req.body;
  const { status, data } = await orderService.create(productsIds, user);

  res.status(status).json(data);
}

export async function getAll(_req: Request, res: Response) {
  const { status, data } = await orderService.getAll();
  res.status(status).json(data);
}