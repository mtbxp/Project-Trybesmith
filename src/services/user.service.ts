import { generateToken } from '../auth/jwtValidations';
import { NewUser, UserLogin } from '../types/types';
import * as usersModel from '../models/user.model';

export async function createUser(newUser: NewUser) {
  const createdUser = await usersModel.createUser(newUser);
  const userToken = generateToken(createdUser);
  return { status: '', message: userToken };
}

export async function login(user: UserLogin) {
  const userExists = await usersModel.getUserByUsername(user.username);
  if (!userExists || user.password !== userExists.password) {
    return { status: 'NOT_FOUND', message: 'Username or password invalid' };
  }

  const token = generateToken({ id: userExists.id, username: userExists.username });
  return { status: '', message: token };
}