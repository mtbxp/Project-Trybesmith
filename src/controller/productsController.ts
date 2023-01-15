import { Request, Response } from 'express';
import productService from '../services/productsServices';

const addProductController = async (req: Request, res: Response) => {
  const productData = req.body;
  const newProduct = await productService.addProductService(productData);
  return res.status(201).send(newProduct);
};

export default { addProductController };