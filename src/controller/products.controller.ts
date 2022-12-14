import { Request, Response } from 'express';
import ProductService from '../service/products.service';

export default class ProductController {
  public service;

  constructor() {
    this.service = new ProductService();
  }

  public createProducts = async (req: Request, res: Response) => {
    const product = req.body;
    const result = await this.service.createProducts(product);
    res.status(201).json(result);
  };
}