import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

interface Itoken { data: { userId: number }, iat: number, exp: number }
const secret = process.env.JWT_SECRET as string;

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Token not found' });
  try { 
    const validated = jwt.verify(token, secret);
    console.log(validated, 'JWT_____10_ Token Validate');
  } catch (err) {
    if (err) return res.status(401).json({ message: 'Invalid token' });
  }
  next();
};

const getIdFromToken = async (token: string) => {
  const validated = jwt.verify(token, secret) as Itoken;
  return validated.data.userId;
};

const createToken = async (id: number) => {
  const token = jwt
    .sign({ data: { userId: id } }, secret, { algorithm: 'HS256', expiresIn: '520min' });
  return token as string;
};

export { createToken,
  getIdFromToken,
  validateToken,
};
