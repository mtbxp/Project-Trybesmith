import { Request, Response } from 'express';
import * as ordersService from '../service/orders.service';

export default async function showAllOrders(_req: Request, res: Response) {
  const { message } = await ordersService.default();
  return res.status(200).json(message);
}