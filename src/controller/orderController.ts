import { Request, Response } from 'express';
import OrderService from '../service/orderService';

export default class ProductController {
  service = new OrderService();

  async findAll(_req: Request, res: Response) {
    const result = await this.service.findAll();
    return res.status(200).json(result);
  }
}