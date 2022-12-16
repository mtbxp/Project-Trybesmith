import { Response, Request } from 'express';
import statusCodes from '../utils/statusCode';
import OrderService from '../service/order.service';

class OrderController {
  constructor(private orderService = new OrderService()) {}

  getAll = async (_req: Request, res: Response) => {
    const orders = await this.orderService.getAll();
    res.status(statusCodes.OK).json(orders);
  };
}

export default new OrderController();