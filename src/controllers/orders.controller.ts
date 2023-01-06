import { Request, Response } from 'express';
import statusCodes from '../statusCode';
import OrdersService from '../services/orders.service';

class OrdersController {
  constructor(private ordersService = new OrdersService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const orders = await this.ordersService.getAll();
    res.status(statusCodes.OK).json(orders);
  };
}

export default OrdersController;