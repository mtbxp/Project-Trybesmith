import { Request, Response } from 'express';
import service from '../services/products.service';

async function createProductController(req: Request, res: Response) {
  try {
    const { name, amount } = req.body;
    const products = await service.createProductService(name, amount);

    return res.status(201).json(products);
  } catch (e) {
    return res.status(404).json('Deu ruim no product controller');
  }
}

const getAllProductsController = async (_req: Request, res: Response) => {
  try {
    const products = await service.getAllProductsService();
    return res.status(200).json(products);
  } catch (e) {
    return res.status(404).json('Deu ruim no product controller');
  }
};

export default {
  createProductController,
  getAllProductsController,
};