import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

export default {
  getOrders: async (_req: Request, res: Response) => {
    const output = await ordersService.getOrders();

    return res.status(200).json(output);
  },

  createOrder: async (req: Request, res: Response) => {
    const { id } = (req as Request & { user: { id: number } }).user;
    const output = await ordersService.createOrder(id, req.body.productsIds);

    return res.status(201).json(output);
  },
};