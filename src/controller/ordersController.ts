import { Request, Response } from 'express';
import OrderService from '../service/ordersService';

export default class OrderController {
  constructor(private orderService = new OrderService()) {}

  public allGetOrders = async (_req: Request, res: Response) => {
    const allOrders = await this.orderService.allGetOrders();
    return res.status(200).json(allOrders);
  };
}