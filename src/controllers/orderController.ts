import { Request, Response } from 'express';
import ser from '../services/orderService';

const getAllOrders = async (_req: Request, res: Response) => {
  const listOrders = await ser.getAllOrders();
  res.status(200).json(listOrders);
};

export default { getAllOrders };