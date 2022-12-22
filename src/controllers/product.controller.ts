import { Request, Response } from 'express';
import statusCodes from '../statusCodes';
import ProductService from '../services/products.service';

class ProductController {
  constructor(private bookService = new ProductService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const books = await this.bookService.getAll();
    res.status(statusCodes.OK).json(books);
  };

  public create = async (req: Request, res: Response) => {
    const product = req.body;

    const productCreated = await this.bookService.create(product);
    res.status(statusCodes.CREATED).json(productCreated);
  };
}

export default ProductController;