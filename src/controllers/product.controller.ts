import { Request, Response } from 'express';
import ProductService from '../services/product.service';

class ProductController {
  constructor(private productService = new ProductService()) {}

  public create = async (request: Request, response: Response) => {
    const { body } = request;

    const product = await this.productService.create(body);

    return response.status(201).json(product);
  };
}

export default ProductController;
