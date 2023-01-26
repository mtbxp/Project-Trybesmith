import { Response, Request } from 'express';
import userService from '../services/userService';

const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await userService.getByUsername(username, password);
  if (user.type === 401) {
    return res.status(401).json({ message: user.message });
  }
  return res.status(200).json({ token: user.message });
};

export default { login };