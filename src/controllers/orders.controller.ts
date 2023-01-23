import { Request, Response } from 'express';
import OrderService from '../services/orders.service';

class OrderController {
  constructor(private orderService = new OrderService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const orders = await this.orderService.getAll();

    return res.status(200).json(orders);
  };

  public create = async (req: Request, res: Response): Promise<Response> => {
    const { productsIds } = req.body;
    const { id } = req.body.user.data;
    
    await this.orderService.create(id, productsIds);

    return res.status(201).json({ userId: id, productsIds });
  };
}

export default OrderController;