import { Request, Response } from 'express';
import ordersServices from '../services/orders.services';

const getAll = async (req: Request, res: Response) => {
  const orders = await ordersServices.getAll();
  res.status(200).json(orders);
};

export default { getAll };