import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

export default {
  findAll: async (_req: Request, res: Response) => {
    const result = await ordersService.findAll();

    res.status(200).json(result.output);
  },

  create: async (req: Request, res: Response) => {
    const { productsIds, payload: { userId } } = req.body;
    
    const result = await ordersService.create(productsIds, userId);

    if (result) {
      res.status(201).json(result.output);
    }
  },
};