import { Request, Response } from 'express';
import create from '../services/users.service';
import createToken from '../utils/auth/createToken';

export default async function createuUser(req: Request, res: Response) {
  const products = await create(req.body);
  const token = createToken(products);
  return res.status(201).json({ token });
}