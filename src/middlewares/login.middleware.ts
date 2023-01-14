import { Request, Response, NextFunction } from 'express';
// import usersService from '../services/users.service';
// import usersModel from '../models/users.model';

const validateUsername = (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;

  if (!username || username === '') {
    return res.status(400).json({ message: '"username" is required' });
  }
  next();
};

const validatePassword = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;

  if (!password || password === '' || password === undefined) {
    return res.status(400).json({ message: '"password" is required' });
  }
  next();
};

// const validateUsernameAndPassword = (req: Request, res: Response, next: NextFunction) => {
//   const { username, password } = req.body;

//   if () {
//     return res.status(400).json({ message: '"password" is required' });
//   }
//   next();
// };

export default {
  validateUsername,
  validatePassword,
};