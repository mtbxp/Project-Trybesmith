import { Request, Response } from 'express';
import OrdersService from '../services/orders.service';

export default class OrdersController {
  constructor(private ordersService = new OrdersService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const allOrders = await this.ordersService.getAll();
    res.status(200).json(allOrders);
  };
}
