import { Request, Response } from 'express';
import ProductService from '../services/product.service';

const HTTP_STATUS_CREATED = 201;

export default class ProductController {
  public product = new ProductService();

  create = async (req: Request, res: Response) => {
    const newProduct = req.body;

    const productInserted = await this.product.create(newProduct);
    res.status(HTTP_STATUS_CREATED).json(productInserted);
  };
}
