import { Request, Response, NextFunction } from 'express';

const usernameValidation = (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;
  if (!username || username === '' || username === undefined) {
    return res.status(400).send({ message: '"username" is required' });
  }
  next();
}; 

const passwordValidation = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  if (!password || password === '' || password === undefined) {
    return res.status(400).send({ message: '"password" is required' });
  }
  next();
};

export default { usernameValidation, passwordValidation };