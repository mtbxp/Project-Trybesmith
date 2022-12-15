import { Request, Response } from 'express';
import OrdersService from '../services/orders.service';

class OrdersController {
  public service;

  constructor() {
    this.service = new OrdersService();
  }

  public getAllOrders = async (_req: Request, res: Response) => {
    const orders = await this.service.getAllOrder();
    res.status(200).json(orders);
  };
}

export default OrdersController;