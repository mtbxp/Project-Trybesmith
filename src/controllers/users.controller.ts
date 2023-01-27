import { Response, Request } from 'express';
import jwt from 'jsonwebtoken';
import * as usersService from '../services/users.service';

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const addProduct = async (request: Request, response: Response) => {
  const userId = await usersService.addUser(request.body);
  const token: string = jwt.sign({ userId }, secret, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });
  return response.status(201).json({ token });
};

const listAllProducts = async (_request: Request) => {};

export {
  addProduct,
  listAllProducts,
};