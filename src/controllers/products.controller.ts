import { Request, Response } from 'express';
import ProductService from '../services/products.service';

export default class ProductController {
  public productService = new ProductService();

  async getAllProducts(_req: Request, res: Response) {
    const allProducts = await this.productService.getAllProducts();

    res.status(200).json(allProducts);
  }

  async insertProduct(req: Request, res: Response) {
    const productBody = req.body;
    const newProduct = await this.productService.insertProduct(productBody);
    res.status(201).json(newProduct);
  }
}
