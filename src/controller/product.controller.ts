import { Request, Response } from 'express';
import ProductService from '../service/product.service';

export default class ProductController {
  constructor(private productService = new ProductService()) { }

  public create = async (req: Request, res: Response) => {
    const product = req.body;

    const createProduct = await this.productService.create(product);
    res.status(201).json(createProduct);
  };
}