import { Request, Response } from 'express';
import OrderService from '../services/order.service';

const HTTP_STATUS_OK = 200;

export default class OrderController {
  public orderService = new OrderService();

  async getOrderAll(_req: Request, res: Response) {
    const orderAll = await this.orderService.getOrderAll();

    res.status(HTTP_STATUS_OK).json(orderAll);
  }
}
