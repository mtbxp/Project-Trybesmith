import { Request, Response } from 'express';
import { OrderService } from '../interfaces';
import * as orderService from '../services/order.service';

export async function getAll(_req: Request, res: Response) {
  const teste = await orderService.getAll();

  const { status, result } = teste as OrderService;

  res.status(status).json(result);
}

export async function oi() {
  return 'oi';
}