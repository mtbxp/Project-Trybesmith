import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

const getAllOrders = async (req: Request, res: Response) => {
  const allOrders = await ordersService.getAllOrders();  
  res.status(200).json(allOrders);
};

export default { getAllOrders };