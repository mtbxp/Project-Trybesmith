import { Request, Response } from 'express';
import { HttpError } from '../interfaces';
import OrderService from '../services/orderService';
import statusCodes from '../statusCodes';

const orderService = new OrderService();

export default class OrderController {
  getAll = async (_req: Request, res: Response) => {
    try {
      const { status, data } = await orderService.getAll();

      return res.status(status).json(data);
    } catch (error: unknown) {
      const { message } = error as HttpError;

      return res.status(statusCodes.SERVER_ERROR).json({ message });
    }
  };

  create = async (req: Request, res: Response) => {
    const { user, productsIds } = req.body;

    try {
      const { status, data } = await orderService.create(productsIds, user?.id);

      return res.status(status).json(data);
    } catch (error: unknown) {
      const { message } = error as HttpError;

      return res.status(statusCodes.SERVER_ERROR).json({ message });
    }
  };
}