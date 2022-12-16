import { NextFunction, Request, Response } from 'express';
import { orderValidation } from './schemas';
import { decoded } from './jwtConfig';

const validation = (req: Request, res: Response, next: NextFunction) => {
  const { productsIds } = req.body;
  const token = req.headers.authorization;
  const { error } = orderValidation.validate({ productsIds });

  if (error) {
    if (error.message.includes('is required')) {
      return res.status(400).json({ message: error.message });
    } return res.status(422).json({ message: error.message });
  }

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const payload = decoded(token);
  req.body.userId = payload.id;

  // if () return res.status(422).json({ message: 'Invalid token' });

  next();
};

export default validation;