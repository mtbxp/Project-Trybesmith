import { Request, Response } from 'express';
import orderService from '../service/order.service';

const listAllOrders = async (_req: Request, res: Response) => {
  const { data } = await orderService.listAllOrders();

  return res.status(200).json(data);
};

export default { listAllOrders };