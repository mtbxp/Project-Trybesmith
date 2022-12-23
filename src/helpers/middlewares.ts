import { Request, Response, NextFunction } from 'express';
import statusCodes from './statusCodes';

function validateLogin(req: Request, res: Response, next: NextFunction) {
  const { username, password } = req.body;

  if (!username) {
    return res.status(statusCodes.BAD_REQUEST).json(
      { message: '"username" is required' },
    );
  }

  if (!password) {
    return res.status(statusCodes.BAD_REQUEST).json(
      { message: '"password" is required' },
    );
  } 

  next();
}

function validateProductName(req: Request, res: Response, next: NextFunction) {
  const { name } = req.body;
  if (!name) {
    return res.status(statusCodes.BAD_REQUEST).json({ message: '"name" is required' });
  }

  if (typeof name !== 'string') {
    return res.status(statusCodes.UNPROCESSABLE_ENTITY).json({
      message: '"name" must be a string',
    });
  }

  if (name.length < 3) {
    return res.status(statusCodes.UNPROCESSABLE_ENTITY).json({
      message: '"name" length must be at least 3 characters long',
    });
  }
  next();
}

function validateProductAmount(req: Request, res: Response, next: NextFunction) {
  const { amount } = req.body;
  if (!amount) {
    return res.status(statusCodes.BAD_REQUEST).json({ message: '"amount" is required' });
  }

  if (typeof amount !== 'string') {
    return res.status(statusCodes.UNPROCESSABLE_ENTITY).json({
      message: '"amount" must be a string',
    });
  }

  if (amount.length < 3) {
    return res.status(statusCodes.UNPROCESSABLE_ENTITY).json({
      message: '"amount" length must be at least 3 characters long',
    });
  }
  
  next();
}

export default { 
  validateLogin,
  validateProductName,
  validateProductAmount,
};