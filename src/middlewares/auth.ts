import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

const secret = 'secret' as string;
export default function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const { authorization: token } = req.headers;
  if (!token) {
    return res.status(401).json({ message: 'Token não Encontrado' });
  }
  try {
    const user = jwt.verify(token, secret as string); 
    req.body.user = user;
    return res.status(201).json({ message: token });
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: 'Token não Autorizado' });
  }
}