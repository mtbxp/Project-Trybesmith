import { Request, Response } from 'express';
import statusCodes from '../statusCodes';
import ProductService from '../services/products.services';

class ProductsController {
  constructor(private productService = new ProductService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.productService.getAll();
    res.status(statusCodes.OK).json(products);
  };
}

export default ProductsController;