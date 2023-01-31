import { Request, Response } from 'express';
import OrderService from '../service/ordersService';

export default class OrderController {
  constructor(private orderService = new OrderService()) {}

  public allGetOrders = async (_req: Request, res: Response) => {
    const allOrders = await this.orderService.allGetOrders();
    return res.status(200).json(allOrders);
  };

  public createOrder = async (req: Request, res: Response) => {
    try {
      const { productsIds, user: { id } } = req.body;
      console.log(req.body);
      const newOrder = await this.orderService.createOrder(id, productsIds);
      return res.status(201).json(newOrder);
    } catch (e) {
      const error = (e as Error).message;
      return res.status(422).json({
        message: '"productsIds" must include only numbers',
        error,
      });
    }
  };
}