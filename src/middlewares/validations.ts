import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../JWT/config';

export default {
  tokenValidation: async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;

    if (!authorization) return res.status(401).json({ message: 'Token not found' });

    try {
      const result = verifyToken(authorization);
    
      req.body.payload = result;

      next();
    } catch (error) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  },
};