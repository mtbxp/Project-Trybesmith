import { Request, Response } from 'express';
import { productCreateService, productGetAllService } from '../services/products.service';
import statusCodes from '../utils/statusCode';
// import Product from '../interface/productInterface';

const productCreateController = async (req: Request, res: Response): Promise<void> => {
  const { name, amount } = req.body;
  const result = await productCreateService(name, amount);

  res.status(statusCodes.CREATED).json(result);
};

const productGetAllController = async (_req: Request, res: Response): Promise<void> => {
  const result = await productGetAllService();
  res.status(statusCodes.OK).json(result);
};

export { productCreateController, productGetAllController };