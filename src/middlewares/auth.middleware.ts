import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import HttpException from '../shared/http.exception';

const auth = (req: Request, _res: Response, next: NextFunction) => {
  const { authorization: token } = req.headers;
  if (!token) {
    throw new HttpException(401, 'Token não encontrado');
  } 
 
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET as string); 
    console.log(user);
    
    req.body.user = user;
    return next();
  } catch (error) {
    console.log(error);
    throw new HttpException(401, 'Não autorizado');
  }
};

export default auth;