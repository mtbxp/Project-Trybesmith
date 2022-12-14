import { Request, Response } from 'express';
import orderService from '../services/order.service';

const getAll = async (req: Request, res: Response) => {
  const orders = await orderService.getAll();
  return res.status(200).send(orders);
};

export default { getAll };