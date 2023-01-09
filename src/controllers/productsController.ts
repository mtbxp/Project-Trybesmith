import { Request, Response } from 'express';
import ProductsService from '../services/productsService';

export default class ProductsController {
  public newProduct = new ProductsService();

  create = async (req: Request, res: Response) => {
    const product = req.body;
    
    const productInserted = await this.newProduct.create(product);
    return res.status(201).json(productInserted);
  };

  getAllProducts = async (_req:Request, res:Response) => {
    const allProducts = await this.newProduct.getAllProducts();
    return res.status(200).json(allProducts);
  };
}
