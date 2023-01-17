import { NextFunction, Request, Response } from 'express';
import User from '../interfaces/user.interface';

class UserMiddleware {
  public static validateLogin(request: Request, response: Response, next: NextFunction) {
    const { username, password } = request.body as User;
  
    if (!username) {
      return response.status(400).json({ message: '"username" is required' });
    }
  
    if (!password) {
      return response.status(400).json({ message: '"password" is required' });
    }
  
    next();
  }

  public static validateUsername(request: Request, response: Response, next: NextFunction) {
    const { username } = request.body as User;

    if (!username) {
      return response.status(400).json({ message: '"username" is required' });
    }

    if (typeof username !== 'string') {
      return response.status(422).json({ message: '"username" must be a string' });
    }

    if (username.length < 3) {
      return response.status(422).json({ 
        message: '"username" length must be at least 3 characters long', 
      });
    }

    next();
  }

  public static validateVocation(request: Request, response: Response, next: NextFunction) {
    const { vocation } = request.body as User;

    if (!vocation) {
      return response.status(400).json({ message: '"vocation" is required' });
    }

    if (typeof vocation !== 'string') {
      return response.status(422).json({ message: '"vocation" must be a string' });
    }

    if (vocation.length < 3) {
      return response.status(422).json({ 
        message: '"vocation" length must be at least 3 characters long', 
      });
    }

    next();
  }

  public static validateLevel(request: Request, response: Response, next: NextFunction) {
    const { level } = request.body as User;

    if (level === undefined) {
      return response.status(400).json({ message: '"level" is required' });
    }

    if (typeof level !== 'number') {
      return response.status(422).json({ message: '"level" must be a number' });
    }

    if (level < 1) {
      return response.status(422).json({ message: '"level" must be greater than or equal to 1' });
    }

    next();
  }

  public static validatePassword(request: Request, response: Response, next: NextFunction) {
    const { password } = request.body as User;

    if (!password) {
      return response.status(400).json({ message: '"password" is required' });
    }

    if (typeof password !== 'string') {
      return response.status(422).json({ message: '"password" must be a string' });
    }

    if (password.length < 8) {
      return response.status(422).json({ 
        message: '"password" length must be at least 8 characters long', 
      });
    }

    next();
  }
}

export default UserMiddleware;
