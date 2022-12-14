import { Request, Response } from 'express';
import service from '../services/products.service';

async function createProductController(req: Request, res: Response) {
  try {
    const { name, amount } = req.body;
    const products = await service.createProductService(name, amount);
    return res.status(201).json(products);
  } catch (e) {
    return res.status(404).json('Deu ruim');
  }
}

export default {
  createProductController,
};