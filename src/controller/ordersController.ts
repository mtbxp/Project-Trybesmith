import { Request, Response } from 'express';
import orderService from '../services/ordersServices';

const getOrderController = async (req: Request, res: Response) => {
  const orders = await orderService.getOrderService();
  return res.status(200).send(orders);
};

export default { getOrderController };