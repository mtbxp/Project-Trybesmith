import { Request, Response } from 'express';
import statusCodes from '../statusCodes';
import OrdersService from '../services/orders.service';

export default class OrdersController {
  constructor(private ordesService = new OrdersService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const result = await this.ordesService.getAll();

    res.status(statusCodes.OK).json(result);
  };
}
