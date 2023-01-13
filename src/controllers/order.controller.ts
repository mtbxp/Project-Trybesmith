import { Request, Response } from 'express';
import OrderService from '../services/order.service';

const HTTP_STATUS_OK = 200;

export default class OrderController {
  public orders = new OrderService();

  getOrders = async (_req:Request, res:Response) => {
    const orders = await this.orders.getOrders();
    res.status(HTTP_STATUS_OK).json(orders);
  };
}
