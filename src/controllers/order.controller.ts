import { Request, Response } from 'express';
import OrderService from '../services/order.service';

class OrderController {
  constructor(private orderService = new OrderService()) {}

  public getAll = async (_: Request, response: Response) => {
    const orders = await this.orderService.getAll();

    return response.status(200).send(orders);
  };
}

export default OrderController;
