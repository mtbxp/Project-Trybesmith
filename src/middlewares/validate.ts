import { Request, Response, NextFunction } from 'express';
import models from '../models/models';

const validateLogin = async (req: Request, res: Response, next:NextFunction) => {
  const users = req.body;

  if (!users.username) {
    return res.status(400)
      .json({ message: '"username" is required' });
  }
  
  if (!users.password) {
    return res.status(400)
      .json({ message: '"password" is required' });
  }
  const user = await models.getLogin(users);

  if (!user.length) {
    return res.status(401)
      .json({ message: 'Username or password invalid' });
  }
  next();
};

export default validateLogin;