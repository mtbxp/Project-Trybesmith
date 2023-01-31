import { Request, Response, NextFunction } from 'express';

import LoginService from '../service/loginService';

class ValidateLogin {
  constructor(private loginService = new LoginService()) {}

  public userNameValidate = async (req: Request, res: Response, next:NextFunction) => {
    const { username } = req.body;

    if (!username) {
      return res.status(400).json({ message: '"username" is required' });
    }
    return next();
  };

  public passwordValidate = async (req: Request, res: Response, next: NextFunction) => {
    const { password } = req.body;

    if (!password) {
      return res.status(400).json({ message: '"password" is required' });
    }
    return next();
  };

  public validateUsernameAndPasswordExists = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const { password, username } = req.body;
    const user = await this.loginService.userLogin(username, password);

    if (!user) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }
    return next();
  };
}

export default ValidateLogin;