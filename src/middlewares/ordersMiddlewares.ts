import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret';

const verifyToken = (token: string) => { 
  const checkToken = verify(token, secret);  
  return checkToken as object;
};

const isTokenValid = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization: token } = req.headers;
  if (!token) return res.status(401).json({ message: 'Token not found' });
  try {
    const validToken = verifyToken(token);
    req.body.user = validToken;
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
  next();
};

const isProductValid = async (req: Request, res: Response, next: NextFunction) => {
  const { productsIds } = req.body;  
  if (!productsIds) {
    return res.status(400).json({ message: '"productsIds" is required' });
  }
  if (!Array.isArray(productsIds)) {
    return res.status(422).json({ message: '"productsIds" must be an array' });
  }
  if (productsIds.length === 0) {
    return res.status(422).json({ message: '"productsIds" must include only numbers' });
  }
  return next();
};

export default {
  isTokenValid,
  isProductValid,
};