import { Request, Response, NextFunction } from 'express';

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const { authorization: token } = req.headers;

  if (!token) return res.status(401).json({ message: 'Token not found' });
  
  if (token.length < 232 || token.length > 244) {
    return res
      .status(401).json({ message: 'Invalid token' });
  }
  
  next();
};

export default verifyToken;