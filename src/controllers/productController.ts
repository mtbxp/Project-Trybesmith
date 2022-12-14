import { Request, Response } from 'express';
import ProductService from '../services/productService';

export default class ProductController {
  public product = new ProductService();

  create = async (req: Request, res: Response) => {
    const product = req.body;
    const productCreated = await this.product.create(product);
    res.status(201).json(productCreated);
  };

  getAllProducts = async (_req:Request, res:Response) => {
    const products = await this.product.getAllProducts();
    res.status(200).json(products);
  };
}