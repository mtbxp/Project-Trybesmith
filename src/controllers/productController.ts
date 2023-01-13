import { Request, Response } from 'express';
import productService from '../services/productService';

const productCadastro = async (req: Request, res: Response):Promise<void> => { 
  const product = req.body;
  const criandoProduto = await productService.productCadastro(product);
  res.status(201).json(criandoProduto);
};
const getAll = async (_req: Request, res: Response):Promise<void> => {
  const products = await productService.getAll();
  res.status(200).json(products);
};

export default {
  productCadastro,
  getAll,
};