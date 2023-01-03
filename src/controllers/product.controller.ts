import { Request, Response } from 'express';
import ProductService from '../services/product.service';
import statusCodes from '../utils/statusCodes';

class ProductController {
  constructor(private productService = new ProductService()) { }

  public createProduct = async (req: Request, res: Response) => {
    const product = req.body;

    const newProduct = await this.productService.createProduct(product);
    return res.status(statusCodes.CREATED).json(newProduct);
  };
}

export default ProductController;
