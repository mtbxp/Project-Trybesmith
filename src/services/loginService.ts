import * as userModel from '../models/userModel';
import isToken from '../auth/token';
import { User } from '../types/index';

export default async function login(Login: User) {
  const users = await userModel.getName(Login);
  if (!users.length) return { type: 401, message: 'Username or password invalid' };
  
  const token = isToken(users[0]);
  
  return token;
} 