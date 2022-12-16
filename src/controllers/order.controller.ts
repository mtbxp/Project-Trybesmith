import { Request, Response } from 'express';
import { getAll, addNewOrder } from '../services/order.service';

export const getAllOrders = async (_req: Request, res: Response) => {
  const orders = await getAll();
  return res.status(200).json(orders);
};

export const createOrder = async (req: Request, res: Response) => {
  const { productsIds } = req.body;
  const { userId } = req.body;
  const addOrder = await addNewOrder(productsIds, userId);
  return res.status(201).json(addOrder);
};