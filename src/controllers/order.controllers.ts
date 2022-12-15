import { Request, Response } from 'express';
import orderServices from '../services/order.services';

const getAllOrders = async (_req: Request, res: Response) => {
  const { status, orders } = await orderServices.getAllOrders();
  res.status(status).json(orders);
};

const addOrder = async (req: Request, res: Response) => {
  const { productsIds, user: { data: { id } } } = req.body;
  
  const { status, result } = await orderServices.addOrder({ productsIds, userId: id });
  return res.status(status).json(result);
};

export default {
  getAllOrders,
  addOrder,
};