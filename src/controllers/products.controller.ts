import { Request, Response } from 'express';
import ProductService from '../services/products.service';

export default class ProductController {
  constructor(private productService = new ProductService()) { }

  public create = async (req: Request, res: Response) => {
    const product = req.body;
    const productCreate = await this.productService.create(product);
    res.status(201).json(productCreate);
  };

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.productService.getAll();
    res.status(200).json(products);
  };
}