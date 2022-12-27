import { Request, Response } from 'express';
import ProductService from '../services/products.service';
import statusCodes from '../utils/statusCode';

// funcoes retiradas do couse.

export default class ProductsController {
  public productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  public create = async (req: Request, res: Response) => {
    const product = req.body;

    const productCreated = await this.productService.create(product);
    res.status(statusCodes.CREATED).json(productCreated);
  };
}
