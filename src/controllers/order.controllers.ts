import { Request, Response } from 'express';
import orderServices from '../services/order.services';

const getAllOrders = async (_req: Request, res: Response) => {
  const { status, orders } = await orderServices.getAllOrders();
  res.status(status).json(orders);
};

export default {
  getAllOrders,
};