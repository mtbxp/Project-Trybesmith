import { Response, Request } from 'express';
import jwt from 'jsonwebtoken';
import * as loginService from '../services/login.service';

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const loginValidation = async (request: Request, response: Response) => {
  const { username, password } = request.body;
  if (!username) return response.status(400).json({ message: '"username" is required' });
  if (!password) return response.status(400).json({ message: '"password" is required' });
  const hasLogin = await loginService.loginValidation(request.body);
  if (hasLogin.error !== null) {
    return response.status(hasLogin.error).json({ message: hasLogin.message });
  }
  const { id } = hasLogin.data;  
  const token: string = jwt.sign({ id }, secret, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });
  return response.status(200).json({ token });
};

const listAllProducts = async (_request: Request) => {};

export {
  loginValidation,
  listAllProducts,
};