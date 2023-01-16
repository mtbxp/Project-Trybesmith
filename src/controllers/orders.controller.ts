// ./src/controllers/order.controller.ts

import { Request, Response } from 'express';
import OrderService from '../services/orders.service';

export default class OrderController {
  public order = new OrderService();

  getOrders = async (_req: Request, res: Response) => {
    const orders = await this.order.getOrders();
    res.status(200).json(orders);
  };
}
