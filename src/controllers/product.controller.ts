import { Request, Response } from 'express';
import { IProduct } from '../interfaces/index';
import ProductService from '../services/product.service';

export default class ProductController {
  productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  async addProduct(req: Request, res: Response) {
    const productData = req.body as IProduct;
    const { status, message } = await this.productService.addProduct(productData);
    return res.status(status).json(message);
  }
}