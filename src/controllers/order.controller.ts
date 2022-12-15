import { Request, Response } from 'express';
import OrderService from '../services/order.service';

export default class OrderController {
  public orderService = new OrderService();

  async getAllOrders(_req: Request, res: Response) {
    const allOrders = await this.orderService.getAllOrders();

    res.status(200).json(allOrders);
  }
}