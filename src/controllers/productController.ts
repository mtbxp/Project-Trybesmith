import { Request, Response } from 'express';
import ProductService from '../services/productService';

export default class ProductController {
  constructor(private productSerice = new ProductService()) { }

  public create = async (req: Request, res: Response) => {
    const product = req.body;
    
    const productCreated = await this.productSerice.create(product);
    res.status(201).json(productCreated);
  };
}
