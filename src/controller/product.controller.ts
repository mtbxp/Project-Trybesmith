import { Request, Response } from 'express';
import ProductService from '../services/product.service';

const HTTP_STATUS_OK = 200;

export default class ProductController {
  public serviceProduct = new ProductService();

  async getProductAll(_req: Request, res: Response) {
    const ProductAll = await this.serviceProduct.getProductAll();

    res.status(HTTP_STATUS_OK).json(ProductAll);
  }
}