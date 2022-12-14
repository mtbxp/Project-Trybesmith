import { Request, Response } from 'express';
import ProductsService from '../services/products.service';

export default class ProductsController {
  constructor(private productsService = new ProductsService()) { }

  public createProduct = async (req: Request, res: Response) => {
    const product = req.body;

    const productCreated = await this.productsService.createProduct(product);

    res.status(201).json(productCreated);
  };

  public getAllProducts = async (req: Request, res: Response) => {
    const allProducts = await this.productsService.getAllProducts();

    res.status(200).json(allProducts);
  };
}
