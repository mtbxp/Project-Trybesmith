import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import messages from '../utils/messages';
import statuses from '../utils/statuses';

const secret = process.env.JWT_SECRET || 'segredo';

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res
      .status(statuses.INVALID_TOKEN)
      .json({ message: messages.TOKEN_NOT_FOUND });
  }

  try {
    const decoded = jwt.verify(authorization, secret);
    req.body.loggedUser = decoded;
    next();
  } catch (error) {
    return res
      .status(statuses.INVALID_TOKEN)
      .json({ message: messages.INVALID_TOKEN });
  }
};

export default validateToken;
