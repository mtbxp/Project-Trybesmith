import { Request, Response } from 'express';
import authenticate from '../auth/authenticate';
import statusCodes from '../helpers/statusCodes';
import UserService from '../services/user.service';

const userService = new UserService();

const auth = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const token: (string | { type: number, message: string }) = await authenticate(
    { username, password },
  );
  if (typeof token === 'object') {
    return res.status(token.type).json({ message: token.message });
  }
  const user = await userService.getByUsername(username) as any;
  
  return res.status(statusCodes.OK).json({ token, username, id: user.id });
};

export default auth;