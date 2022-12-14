import { Request, Response } from 'express';
import service from '../service';

export default class ProductController {
  public service;

  constructor() {
    this.service = new service.Product();
  }

  public async post(req: Request, res: Response): Promise<Response> {
    try {
      const newProduct = await this.service.post(req.body);
      return res.status(201).json(newProduct);
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