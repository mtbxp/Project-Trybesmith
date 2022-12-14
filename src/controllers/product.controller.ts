import { Request, Response } from 'express';
import ProductService from '../services/product.service';

export default class ProductsController {
  constructor(private productService = new ProductService()) {}

  public create = async (req: Request, res: Response) => {
    const product = req.body;

    const productCreated = await this.productService.create(product);
    return res.status(201).json(productCreated);
  };

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.productService.getAll();
    return res.status(200).json(products);
  };
}