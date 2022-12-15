import { Request, Response } from 'express';
import orderService from '../service/order.service';

const getAllOrders = async (req: Request, res: Response) => {
  const result = await orderService.getAllOrders();

  res.status(200).json(result);
};

export default {
  getAllOrders,
};