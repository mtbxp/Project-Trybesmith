import { Request, Response } from 'express';
import { getAllOrders, registerOrder } from '../services/orders.services';

const register = async (req: Request, res: Response) => {
  const { productsIds } = req.body;
  const { locals } = res;
  const addedOrder = await registerOrder(locals.user.data.id, productsIds);

  res.status(201).json(addedOrder);
};

const getAll = async (req: Request, res: Response) => {
  const orders = await getAllOrders();

  res.status(200).json(orders);
};

export { register, getAll };
