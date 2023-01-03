import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

export default {
  getOrders: async (_req: Request, res: Response) => {
    const output = await ordersService.getOrders();

    return res.status(200).json(output);
  },
};