import { Request, Response } from 'express';
import userService from '../services/userServices';

const productCadastro = async (req: Request, res: Response):Promise<void> => {
  const user = req.body;
  const token = await userService.productCadastro(user);
  res.status(201).json({ token });
};

export default {
  productCadastro,
};