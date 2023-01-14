import { Request, Response } from 'express';
import listAllProducts from '../service/productService';

const listAllProductsController = async (req: Request, res: Response) => {
  const { status, data } = await listAllProducts();
  res.status(status).json(data);
};

export default { listAllProductsController };
