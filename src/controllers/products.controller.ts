import { Request, Response } from 'express';
import ProductsService from '../services/products.service';

export default class ProductsController {
  constructor(private service = new ProductsService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.service.getAll();
    res.status(200).json(products);
  };

  public createProduct = async (req: Request, res: Response) => {
    const product = req.body;

    const productCreated = await this.service.createProduct(product);
    res.status(201).json(productCreated);
  };
}
