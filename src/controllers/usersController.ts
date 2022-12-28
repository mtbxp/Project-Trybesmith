import { Request, Response } from 'express';
import * as usersService from '../Services/usersService';
import validadeSchemaLogin from '../validations/loginValidate';

export async function newUser(req: Request, res: Response) {
  const { body } = req;
  const { message, status, token } = await usersService.newUser(body);
  return message
    ? res.status(status).json(message)
    : res.status(status).json({ token });
}

export async function verifyLogin(req: Request, res: Response) {
  const { body } = req;
  // Verifica sentenças sem parâmetros
  const { username, password } = body;
  const { status: statusLogin, message: messageLogin } = validadeSchemaLogin(username, password);
  if (statusLogin === 400) {
    return res.status(statusLogin).json({ message: messageLogin });
  }

  const { status, message, token } = await usersService.verifyLogin(body);
  return message
    ? res.status(status).json({ message })
    : res.status(status).json({ token });
}