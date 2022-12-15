import { Request, Response } from 'express';
import service from '../service';

export default class ProductController {
  public service;

  constructor() {
    this.service = new service.Order();
  }

  public async post(req: Request, res: Response): Promise<Response> {
    try {
      const { productsIds } = req.body;
      const { id } = req.body.user;
      const { error, data, message } = await this.service.post(productsIds, id);
      if (error) {
        return res.status(500).json({ message });
      }
      return res.status(201).json(data);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  }

  public async listAll(req: Request, res: Response): Promise<Response> {
    try {
      const orders = await this.service.listAll();
      return res.status(200).json(orders);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  }
}