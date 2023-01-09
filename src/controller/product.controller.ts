import { Request, Response } from 'express';
import ProductService from '../services/product.service';

const HTTP_STATUS_OK = 200;
const HTTP_STATUS_CREATED = 201;

export default class ProductController {
  public serviceProduct = new ProductService();

  async getProductAll(_req: Request, res: Response) {
    const ProductAll = await this.serviceProduct.getProductAll();

    res.status(HTTP_STATUS_OK).json(ProductAll);
  }

  async productInsert(req: Request, res: Response) {
    const bodyProduct = req.body;
    const newProduct = await this.serviceProduct.productInsert(bodyProduct);
    res.status(HTTP_STATUS_CREATED).json(newProduct);
  }
}