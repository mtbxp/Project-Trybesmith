import { Request, Response } from 'express';
import ProductService from '../services/product.services';

class ProductController {
  constructor(private productService = new ProductService()) {}

  public findAll = async (req: Request, res: Response) => {
    console.log('ahiu');
    const result = await this.productService.getAll();
    return res.status(200).json(result);
  };

  public create = async (req: Request, res: Response) => {
    const products = req.body;

    const message = await this.productService.create(products);
    return res.status(201).json(message);
  };
}

export default ProductController;