import { Request, Response } from 'express';
import statusCodes from '../statusCodes';
import ProductsService from '../services/products.service';

export default class ProductsController {
  constructor(private productsService = new ProductsService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const result = await this.productsService.getAll();
    
    res.status(statusCodes.OK).json(result);
  };

  public create = async (req: Request, res: Response) => {
    const product = req.body;

    const createdProduct = await this.productsService.create(product);

    res.status(statusCodes.CREATED).json(createdProduct);
  };
}
