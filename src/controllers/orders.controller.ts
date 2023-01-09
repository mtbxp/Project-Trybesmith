import { Request, Response } from 'express';
import OrdersService from '../services/orders.service';
import statusCode from '../utils/statusCode';

export default class OrdersController {
  public ordersService: OrdersService;

  constructor() {
    this.ordersService = new OrdersService();
  }

  public getAll = async (_req: Request, res: Response) => {
    const { message } = await this.ordersService.getAll();

    return res.status(statusCode.OK).json(message);
  };
}