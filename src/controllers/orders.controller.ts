import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

async function getAllOrders(_req: Request, res: Response) {
  const { status, result } = await ordersService.getAllOrders();
  
  res.status(status).json(result);
}

export default {
  getAllOrders,
};