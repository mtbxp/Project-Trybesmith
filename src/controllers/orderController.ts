import { Request, Response } from 'express';
import { createOrders, getAllOrder } from '../services/orderService';

export async function getAllOrders(_req: Request, res: Response) {
  const orders = await getAllOrder();
  res.status(200).json(orders);
}

export async function createOrder(req: Request, res: Response) {
  const { productsIds } = req.body;
  const { id } = req.body.user;
  const result = await createOrders(id, productsIds);
  res.status(201).json(result);
}