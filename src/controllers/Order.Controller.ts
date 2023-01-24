import { Request, Response } from 'express';
import OrderService from '../services/Order.Service';

export default class OrderController {
  constructor(private orderService = new OrderService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const result = await this.orderService.getAll();

    res.status(200).json(result);
  };

  public createOrder = async (req: Request, res: Response) => {
    const { body } = req;
    const order = await this.orderService.createOrder(body);
  
    res.status(201).json(order);
  };
}