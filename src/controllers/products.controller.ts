import { Request, Response } from 'express';
import ProductsService from '../services/products.service';
import Tproduct from '../interfaces/product.interface';
import statusCodes from '../helpers/statusCodes';

class ProductsController {
  products;

  constructor() {
    this.products = new ProductsService();
  }

  public getAll = async (req: Request, res: Response<Tproduct[]>) => {
    const prod = await this.products.getAll();
    return res.status(statusCodes.OK).json(prod);
  };

  public create = async (req: Request, res: Response<Tproduct>): Promise<Response<Tproduct>> => {
    const { name, amount } = req.body;
    const prod = await this.products.create({ name, amount });
    return res.status(statusCodes.CREATED).json(prod);
  };
}

export default ProductsController;