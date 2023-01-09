// import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  // const { authorization: token } = req.headers;
  const { username, password } = req.body;

  if (username === undefined) {
    return res.status(400).json({ message: '"username" is required' });
  }

  if (password === undefined) {
    return res.status(400).json({ message: '"password" is required' });
  }

  /* if (!token) {
    res.status(400).json({ message: 'not authorized' });
  }
  try {
    const user = jwt.verify(token as string, process.env.JWT_SECRET as string);
 
    req.body.userInfo = user;
    next();
  } catch (error) {
    console.log(error);
  } */
  next();
};

export default authMiddleware;