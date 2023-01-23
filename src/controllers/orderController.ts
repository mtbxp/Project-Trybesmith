import { Request, Response } from 'express';
import OrderService from '../services/orderService';
import statusCodes from '../utils/statusCodes';

export default class OrderController {
  constructor(private orderService = new OrderService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const orders = await this.orderService.getAll();

    res.status(statusCodes.OK).json(orders);
  };
}
