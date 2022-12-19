import { Request, Response, NextFunction } from 'express';

export const loginValidation = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { username, password } = req.body;

    if (!username) {
      return res.status(400).json({ message: '"username" is required' });
    }
  
    if (!password) {
      return res.status(400).json({ message: '"password" is required' });
    }
  } catch (error) {
    console.log(error);
  }

  next();
};

export default {
  loginValidation,
};
