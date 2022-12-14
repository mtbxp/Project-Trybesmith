import { Request, Response } from 'express';
import OrdersService from '../services/orders.service';

export default class OrdersController {
  constructor(private service = new OrdersService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const orders = await this.service.getAll();
    res.status(200).json(orders);
  };
}
