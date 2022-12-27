import { Request, Response } from 'express';
import ProductService from '../services/products.service';
import statusCodes from '../utils/statusCode';

// funcoes retiradas do couse.

export default class ProductsController {
  public productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  public createProduct = async (req: Request, res: Response) => {
    const product = req.body;

    const productCreated = await this.productService.createProduct(product);
    res.status(statusCodes.CREATED).json(productCreated);
  };

  public getAllProducts = async (_req: Request, res: Response) => {
    const products = await this.productService.getAllProducts();
    res.status(statusCodes.OK).json(products);
  };
}
