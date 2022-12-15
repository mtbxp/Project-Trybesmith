import { Request, Response } from 'express';
import OrdersService from '../services/orders.service';

export default class OrdersController {
  constructor(private ordersService = new OrdersService()) { }

  public getAllOrders = async (req: Request, res: Response) => {
    const result = await this.ordersService.getAllOrders();

    res.status(200).json(result);
  };
}
