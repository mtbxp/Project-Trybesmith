import { Request, Response } from 'express';
import { getAllOrders, registerOrder } from '../services/orders.services';

const register = async (req: Request, res: Response) => {
  const { userId, productId } = req.body;
  const addedOrder = await registerOrder(userId, productId);

  res.status(201).json(addedOrder);
};

const getAll = async (req: Request, res: Response) => {
  const orders = await getAllOrders();

  res.status(200).json(orders);
};

export { register, getAll };
