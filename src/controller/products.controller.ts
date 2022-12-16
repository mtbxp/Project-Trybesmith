import { Request, Response } from 'express';
import ProductsService from '../service/products.service';
import { Product } from '../types/Product';

export default class ProductController {
  public service: ProductsService;

  constructor() {
    this.service = new ProductsService();
  }

  public async registerProduct(req: Request, res: Response) {
    const product: Product = req.body;
    const productService = await this.service.registerProduct(product);

    return res.status(201).json(productService);
  }
}