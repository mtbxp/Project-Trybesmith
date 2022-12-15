import { NextFunction, Request, Response } from 'express';
import { checkInputsOrders } from './schemas';
import { status } from '../utils/status';
import { verifyToken } from '../auth/JSONwebToken';

export default function validateOrders(req: Request, res: Response, next: NextFunction) {
  const { productsIds } = req.body;
  const { authorization: token } = req.headers;
  const { error } = checkInputsOrders.validate({ productsIds });
  
  if (!token) {
    return res.status(status.FAILED).json({ message: 'Token not found' });
  }
  
  const { isError, payload } = verifyToken(token);
  req.body.user = payload;
  console.log(req.body.user, 'aaaaaaaaaaaaaaaaaa');
  
  if (isError) return res.status(status.FAILED).json({ message: 'Invalid token' });

  if (error) {
    if (error.message.includes('is required')) {
      return res.status(status.INFO_IS_REQUIRED).json({ message: error.message });
    } return res.status(status.TYPE_ERROR).json({ message: error.message });
  }
  next();
}