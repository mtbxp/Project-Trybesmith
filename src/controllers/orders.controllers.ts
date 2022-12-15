import { Request, Response } from 'express';
import statusCodes from '../statusCodes';
import OrderService from '../services/orders.services';

class OrdersController {
  constructor(private orderService = new OrderService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const orders = await this.orderService.getAll();
    res.status(statusCodes.OK).json(orders);
  };
}

export default OrdersController;