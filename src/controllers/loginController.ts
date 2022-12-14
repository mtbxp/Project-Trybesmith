import { Request, Response } from 'express';
import loginService from '../services/login.service';
// import { TLogin } from '../types';
interface Result {
  status: number,
  token?: string,
  message?: string,
  
}
const login = async (req: Request, res: Response) => {
  const { body } = req;
  
  const result: Result = await loginService.login(body);

  if (result.status === 401) {
    return res.status(result.status).json({ message: result.message });
  }
  
  return res.status(result.status).json({ token: result.token });
};

export default { login };