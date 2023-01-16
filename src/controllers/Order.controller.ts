import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import OrderService from '../services/Order.service';

export default class OrderController {
  constructor(private service: OrderService) {
    this.service = service;
    this.getAll = this.getAll.bind(this);
  }

  public async getAll(req: Request, res: Response): Promise<void> {
    const orders = await this.service.getAll();

    res.status(StatusCodes.OK).json(orders);
  }
}
