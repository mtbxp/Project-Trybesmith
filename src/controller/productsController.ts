import { Request, Response } from 'express';
import ProductService from '../service/productsService';
import { IdProduct } from '../interfaces';

export default class ProductController {
  constructor(private productService = new ProductService()) {}

  public productCreated = async (req: Request, res: Response) => {
    const productResult = req.body as IdProduct;
    const newProduct = await this.productService.productCreated(productResult);

    return res.status(201).json(newProduct);
  };
}
