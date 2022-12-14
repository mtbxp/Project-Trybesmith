import { Request, Response } from 'express';
import productCreateService from '../services/product.service';
import statusCodes from '../utils/statusCode';

const productCreateController = async (req: Request, res: Response): Promise<void> => {
  const { name, amount } = req.body;
  const result = await productCreateService(name, amount);

  res.status(statusCodes.CREATED).json(result);
};

export default productCreateController;