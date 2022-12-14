import { Request, Response } from 'express';
import service from '../service';

export default class ProductController {
  public service;

  constructor() {
    this.service = new service.Order();
  }

  public async post(_req: Request, res: Response): Promise<Response> {
    try {
      const orders = await this.service.listAll();
      return res.status(200).json(orders);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  }

  public async listAll(req: Request, res: Response): Promise<Response> {
    try {
      const products = await this.service.listAll();
      return res.status(200).json(products);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  }
}