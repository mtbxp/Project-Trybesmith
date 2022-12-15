import { Request, Response } from 'express';
import ProductService from '../services/product.service';

export default class ProductController {
  public service;

  constructor() {
    this.service = new ProductService();
  }

  public createProducts = async (req: Request, res: Response) => {
    const product = req.body;
    const response = await this.service.createProducts(product);
    res.status(201).json(response);
  };
}