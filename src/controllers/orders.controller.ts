import { Request, Response } from 'express';
import { User } from '../interfaces/users.interface';
import orderService from '../services/orders.service';

export const getAllOrdersController = async (
  _req: Request,
  res: Response,
) => {
  const allOrders = await orderService.getAllOrdersService();
  return res.status(200).json(allOrders);
};

export const registerNewOder = async (
  req: Request,
  res: Response,
) => {
  const { productsIds }: { productsIds: number[] } = req.body;

  const { data }: { data: User } = req.body.tokenResult;

  if (!data.id) return res.status(404).json({ message: 'Missing userId' });

  const newOrder = await orderService.registerNewOrder(data.id, productsIds);

  return res.status(201).json(newOrder);
};
