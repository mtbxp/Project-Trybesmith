import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductService from '../services/Product.service';

export default class ProductController {
  constructor(private service: ProductService) {
    this.service = service;
    this.create = this.create.bind(this);
    this.getAll = this.getAll.bind(this);
  }

  public async create(req: Request, res: Response): Promise<void> {
    const product = await this.service.create(req.body);
    
    res.status(StatusCodes.CREATED).json(product);
  }

  public async getAll(req: Request, res: Response): Promise<void> {
    const products = await this.service.getAll();

    res.status(StatusCodes.OK).json(products);
  }
}
