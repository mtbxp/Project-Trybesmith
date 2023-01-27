import { Response, Request } from 'express';
import jwt from 'jsonwebtoken';
import * as usersService from '../services/users.service';

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const validaUsernameProdutos = async (request: Request, response: Response, next: any) => {
  const { username } = request.body;
  if (!username) return response.status(400).json({ message: '"username" is required' });
  if (typeof username !== 'string') {
    return response.status(422)
      .json({ message: '"username" must be a string' });
  }
  if (username.length <= 2) {
    return response.status(422)
      .json({ message: '"username" length must be at least 3 characters long' });
  }
  next();
};

const validaVocationProdutos = async (request: Request, response: Response, next: any) => {
  const { vocation } = request.body;
  
  if (!vocation) return response.status(400).json({ message: '"vocation" is required' });
  if (typeof vocation !== 'string') {
    return response.status(422).json({ message: '"vocation" must be a string' });
  }
  if (vocation.length <= 2) {
    return response.status(422)
      .json({ message: '"vocation" length must be at least 3 characters long' });
  }
  next();
};

const validaLevelProdutos = async (request: Request, response: Response, next: any) => {
  const { level } = request.body;
  
  if (!level && level !== 0) return response.status(400).json({ message: '"level" is required' });
  if (typeof level !== 'number') {
    return response.status(422).json({ message: '"level" must be a number' });
  }
  if (level < 1) {
    return response.status(422)
      .json({ message: '"level" must be greater than or equal to 1' });
  }
  next();
};

const validaPasswordProdutos = async (request: Request, response: Response, next: any) => {
  const { password } = request.body;
  
  if (!password) return response.status(400).json({ message: '"password" is required' });
  if (typeof password !== 'string') {
    return response.status(422).json({ message: '"password" must be a string' });
  }
  if (password.length < 8) {
    return response.status(422)
      .json({ message: '"password" length must be at least 8 characters long' });
  }
  next();
};

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
  validaUsernameProdutos,
  validaVocationProdutos,
  validaLevelProdutos,
  validaPasswordProdutos,
};