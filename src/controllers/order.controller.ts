import { Request, Response } from 'express';
import statusCodes from '../utils/statusCodes';
import OrderService from '../services/order.service';

class OrderController {
  constructor(private orderService = new OrderService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const orders = await this.orderService.getAll();
    res.status(statusCodes.OK).json(orders);
  };

  public create = async (req: Request, res: Response) => {
    const { userId } = req.body.user;
    const { productsIds } = req.body;

    const order = {
      user_id: userId,
      productsIds,
    };

    await this.orderService.create(order);
    res.status(statusCodes.CREATED).json({ userId, productsIds });
  };
}

export default OrderController;