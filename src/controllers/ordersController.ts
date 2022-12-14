import { Request, Response } from 'express';
import { status } from '../utils/status';
import * as ordersService from '../services/ordersService';

export async function getAll(_req: Request, res: Response) {
  const orders = await ordersService.getAll();

  return res.status(status.OK).json(orders);
}

export default getAll;