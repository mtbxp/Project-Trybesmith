import { Request, Response } from 'express';
import * as ordersService from '../services/orders.service';

export async function findOrders(_req: Request, res: Response) {
  const { message } = await ordersService.getOrders();
  return res.status(200).json(message);
}

export async function addOrder(req: Request, res: Response) {
  const { productsIds } = req.body;
  const userId = req.body.user.info.id;

  const { message } = await ordersService.addOrder(productsIds, userId);

  return res.status(201).json(message);
}