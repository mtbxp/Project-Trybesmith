import { Request, Response } from 'express';
import OrderService from '../service/orders.service';

class OrdersController {
  public service;

  constructor() {
    this.service = new OrderService();
  }

  public getOrders = async (_req: Request, res: Response) => {
    const orders = await this.service.getOrders();
    res.status(200).json(orders);
  };
}

export default OrdersController;