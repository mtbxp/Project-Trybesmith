import { Request, Response } from 'express';
import ProductsService from '../services/products.service';

export default class ProductsController {
  constructor(private service = new ProductsService()) { }

  public createProduct = async (req: Request, res: Response) => {
    const product = req.body;

    const productCreated = await this.service.createProduct(product);
    res.status(201).json(productCreated);
  };
}
