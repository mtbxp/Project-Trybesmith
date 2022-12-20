/* import userModel from '../models/userModel';
import isToken from '../auth/token';
import { Iuser, Login } from '../types/index';

export default async function login(login: Login): Promise<string> {
  const user = await userModel.login(login);
  const token = isToken(user);
  return token;
} */