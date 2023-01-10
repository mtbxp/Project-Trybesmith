import { Request, Response } from 'express';
import ProductService from '../services/products.service';

export default class ProductController {
  private service;

  constructor() {
    this.service = new ProductService();
  }

  public insert = async (req: Request, res: Response): Promise<Response> => {
    const { type, message } = await this.service.insert(req.body);

    return res.status(type).json(message);
  };
}
