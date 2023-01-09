import { Request, Response } from 'express';
import ProductsService from '../services/productsService';

export default class ProductsController {
  public product = new ProductsService();

  create = async (req: Request, res: Response) => {
    const newProduct = req.body;
    
    const productInserted = await this.product.create(newProduct);
    res.status(201).json(productInserted);
  };
}
