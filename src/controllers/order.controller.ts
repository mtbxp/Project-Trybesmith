import { Request, Response } from 'express';
import OrderService from '../services/order.service';
import statusCodes from '../utils/statusCode';

// funcoes retiradas do couse.

export default class OrderController {
  public orderService: OrderService;

  constructor() {
    this.orderService = new OrderService();
  }

  public getAllOrders = async (_req: Request, res: Response) => {
    const orders = await this.orderService.getAllOrders();
    res.status(statusCodes.OK).json(orders);
  };
}