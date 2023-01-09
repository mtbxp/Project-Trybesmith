import { Request, Response } from 'express';
import ProductService from '../service/productService';

export default class ProductController {
  service = new ProductService();

  async addProducts(req: Request, res: Response) {
    const { name, amount } = req.body;
    console.log(name);
    const newProduct = await this.service.addProducts(name, amount);
    return res.status(201).json(newProduct);
  }

  async findAll(req: Request, res: Response) {
    const result = await this.service.findAll();
    return res.status(200).json(result);
  }
}