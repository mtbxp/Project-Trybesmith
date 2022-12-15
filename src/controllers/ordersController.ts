import { Request, Response } from 'express';
import { TOrder } from '../types/index';
import { status } from '../utils/status';
import * as ordersService from '../services/ordersService';

export async function getAll(_req: Request, res: Response) {
  const orders = await ordersService.getAll();

  return res.status(status.OK).json(orders);
}

export async function insert(req: Request, res: Response) {
  const { productsIds, user: { id } } = req.body;
  const newOrder = { userId: id, productsIds } as TOrder;
  const order = await ordersService.insert(newOrder);

  return res.status(status.CREATED).json(order);
};