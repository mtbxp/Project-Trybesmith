import { Request, Response, NextFunction } from 'express';

async function validateLogin(req: Request, res: Response, next: NextFunction) {
  const { username, password } = req.body;
  if (!username) {
    return res.status(400).json({ message: '"username" is required' });
  }
  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }

  if (username.length <= 3 || password.length <= 3) {
    return res.status(401).json({ message: '"Username or password invalid"' });
  }
  next();
}

export default validateLogin;