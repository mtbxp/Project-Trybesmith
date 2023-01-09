import { Request, Response } from 'express';
import OrdersService from '../services/orders.service';

class OrdersController {
  constructor(private ordersService = new OrdersService()) {}

  public findAll = async (_req: Request, res: Response) => {
    const orders = await this.ordersService.getAll();
    
    return res.status(200).json(orders);
  };
}

export default OrdersController;