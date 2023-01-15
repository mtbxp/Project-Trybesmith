import { Request, Response } from 'express';
import productService from '../services/productsServices';

const addProductController = async (req: Request, res: Response) => {
  const productData = req.body;
  const newProduct = await productService.addProductService(productData);
  return res.status(201).send(newProduct);
};

const getProductController = async (req: Request, res: Response) => {
  const products = await productService.getProductService();
  return res.status(200).send(products);
};

export default { addProductController, getProductController };