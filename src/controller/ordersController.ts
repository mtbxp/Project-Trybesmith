import { Request, Response } from 'express';
import getAllSevice from '../services/ordersService';

export default async function getOrdersController(_req: Request, res: Response) {
  const message = await getAllSevice();
  return res.status(200).json(message);
}
