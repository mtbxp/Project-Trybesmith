import { Request, Response } from 'express';
import OrdersService from '../services/orders.service';
import statusCodes from '../statusCodes';

class OrdersController {
  constructor(private ordersService = new OrdersService()) { }

  public create = async (request: Request, response: Response): Promise<void> => {
    const { status, result } = await this.ordersService.create(request.body);
    response.status(status).json(result);
  };

  public getAll = async (_request: Request, response: Response) => {
    try {
      const ordersAll = await this.ordersService.getAll();
      response.status(statusCodes.OK).json(ordersAll);
    } catch (error) {
      console.log(error);
      return response.status(statusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
  };
}

export default OrdersController;