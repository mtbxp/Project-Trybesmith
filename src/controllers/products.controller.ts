import { Request, Response } from 'express';
import ProductsService from '../services/products.service';

class ProductsController {
  public service;

  constructor() {
    this.service = new ProductsService();
  }

  public createProduct = async (req: Request, res: Response) => {
    const product = req.body;

    const productCreated = await this.service.createProduct(product);
    res.status(201).json(productCreated);
  };
}

export default ProductsController;