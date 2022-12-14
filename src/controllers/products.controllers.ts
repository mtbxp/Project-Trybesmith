import { Response, Request } from 'express';
import productService from '../services/products.services';

const addProduct = async (req: Request, res: Response) => {
  const { name, amount } = req.body;
  console.log(req.body);
  
  const { status, result } = await productService.addProduct({ name, amount });
  return res.status(status).json(result);
};

const getAllProducts = async (_req: Request, res: Response) => {
  const { status, result } = await productService.getAllProducts();
  return res.status(status).json(result);
};

export default {
  addProduct,
  getAllProducts,
};
