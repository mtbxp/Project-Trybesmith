import { NextFunction, Request, Response } from 'express';

const validadeUsername = async (req: Request, res: Response, next: NextFunction) => {
  const user = req.body;
  if (!user.username) return res.status(400).json({ message: '"username" is required' }); 
  if (typeof user.username !== 'string') {
    return res.status(422).json({ message: '"username" must be a string' }); 
  }
  if (user.username.length <= 2) {
    return res.status(422).json(
      { message: '"username" length must be at least 3 characters long' },
    ); 
  }
  next();
};

const validadeUserVocation = async (req: Request, res: Response, next: NextFunction) => {
  const user = req.body;
  if (!user.vocation) return res.status(400).json({ message: '"vocation" is required' }); 
  if (typeof user.vocation !== 'string') {
    return res.status(422).json({ message: '"vocation" must be a string' }); 
  }
  if (user.vocation.length <= 2) {
    return res.status(422).json(
      { message: '"vocation" length must be at least 3 characters long' },
    ); 
  }
  next();
};

const validadeUserLevel = async (req: Request, res: Response, next: NextFunction) => {
  const user = req.body;
  if (user.level !== 0 && !user.level) { 
    return res.status(400).json({ message: '"level" is required' }); 
  } 
  if (typeof user.level !== 'number') {
    return res.status(422).json({ message: '"level" must be a number' }); 
  }
  if (user.level <= 0) {
    return res.status(422).json({ message: '"level" must be greater than or equal to 1' }); 
  }
  next();
};

const validadeUserPassword = async (req: Request, res: Response, next: NextFunction) => {
  const user = req.body;
  if (!user.password) return res.status(400).json({ message: '"password" is required' }); 
  if (typeof user.password !== 'string') {
    return res.status(422).json({ message: '"password" must be a string' }); 
  }
  if (user.password.length < 8) {
    return res.status(422).json(
      { message: '"password" length must be at least 8 characters long' },
    ); 
  }
  next();
};

export default {
  validadeUserPassword,
  validadeUserLevel,
  validadeUsername,
  validadeUserVocation,
};