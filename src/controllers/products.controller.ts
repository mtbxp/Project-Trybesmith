import { Request, Response } from 'express';
import ProductService from '../services/product.service';

class ProductController {
  constructor(private productService = new ProductService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.productService.getAll();

    return res.status(200).json(products);
  };

  public create = async (req: Request, res: Response) => {
    const book = req.body;

    const bookCreated = await this.productService.create(book);
    res.status(201).json(bookCreated);
  };
}

export default ProductController;