import { Request, Response } from 'express';
import userService from '../services/productsService';

const registerProduct = async (req: Request, res: Response) => {
  const { body } = req;
  const { status, message } = await userService.registerProduct(body);
  res.status(status).json(message);
};

export default {
  registerProduct,
};
