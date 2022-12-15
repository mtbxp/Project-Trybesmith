import { Request, Response } from 'express';
import OrdersService from '../services/orders.service';
import statusCodes from '../../statusCodes';

export default class OrdersController {
  constructor(private orderService = new OrdersService()) { }

  public getAllOrders = async (req: Request, res: Response) => {
    const orders = await this.orderService.getAllOrders();

    if (!orders) return res.status(statusCodes.NOT_FOUND).json({ message: 'Orders not found' });

    return res.status(statusCodes.OK).json(orders);
  };
}
