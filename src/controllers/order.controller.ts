import { Request, Response } from 'express';
import OrderService from '../services/order.service';

class OrdersController {
  public services;

  constructor() {
    this.services = new OrderService();
  }

  public getOrderAll = async (_req: Request, res: Response) => {
    const orders = await this.services.getOrderAll();
    res.status(200).json(orders);
  };
}

export default OrdersController;