import { Response, Request } from 'express';
import ProductService from '../service/product.service';
import statusCodes from '../utils/statusCode';

class ProductController {
  constructor(private productService = new ProductService()) {}

  create = async (req: Request, res: Response) => {
    const product = req.body;

    const newProduct = await this.productService.create(product);

    res.status(statusCodes.CREATED).json(newProduct);
  };

  getAllProducts = async (req: Request, res: Response) => {
    const products = await this.productService.getAll();

    res.status(statusCodes.OK).json(products);
  };
}

export default new ProductController();