import { Request, Response } from 'express';
import ProductService from '../services/product.service';
import statusCodes from '../../statusCodes';

export default class ProductController {
  constructor(private productService = new ProductService()) { }

  public createProduct = async (req: Request, res: Response) => {
    const product = req.body;
    const create = await this.productService.createProduct(product);

    if (!create) {
      return res.status(statusCodes.BAD_REQUEST).json({ message: 'Bad Request' });
    }

    return res.status(statusCodes.CREATED).json(create);
  };
}