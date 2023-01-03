import { Request, Response } from 'express';
import ProductService from '../services/product.service';
import statusCodes from '../utils/statusCodes';

class ProductController {
  constructor(private productService = new ProductService()) { }

  public getAllProducts = async (_req: Request, res: Response) => {
    const products = await this.productService.getAllProducts();
    return res.status(statusCodes.OK).json(products);
  };

  public createProduct = async (req: Request, res: Response) => {
    const newProduct = await this.productService.createProduct(req.body);
    return res.status(statusCodes.CREATED).json(newProduct);
  };
}

export default ProductController;
