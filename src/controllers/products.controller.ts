import { Request, Response } from 'express';
import ProductsService from '../services/products.service';
import statusCode from '../utils/statusCode';

export default class ProductsController {
  public productsService: ProductsService;

  constructor() {
    this.productsService = new ProductsService();
  }

  public getAll = async (_req: Request, res: Response) => {
    const { type, message } = await this.productsService.getAll();

    if (type) return res.status(statusCode[type]).json({ message });

    return res.status(statusCode.OK).json(message);
  };

  public create = async (req: Request, res: Response) => {
    const { name, amount } = req.body;
    const { message } = await this.productsService.create({ name, amount });

    // if (type) return res.status(statusCode[type]).json({ message });

    return res.status(statusCode.CREATED).json(message);
  };
}