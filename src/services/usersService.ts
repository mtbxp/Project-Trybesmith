import * as jwtConfig from '../auth/jwtConfig';
import * as usersModel from '../models/usersModel';
import { TUser } from '../types';

export async function getAll(): Promise<TUser[]> {
  const users = await usersModel.getAll();
  return users;
}

export async function insertUser(users: TUser) {
  await Promise.all([users].map(async (user) => usersModel.insertUser(user)));
  const allUsers = await usersModel.getAll();
  const insertedUser = allUsers.length - 1;
  const user = allUsers[insertedUser];
  const token = jwtConfig.createToken(user);
  
  return { token };
}

export async function getByLogin(login: TUser) {
  const user = await usersModel.getByLogin(login);
  console.log('user', user);
  if (!user.length) return { type: 401, message: 'Username or password invalid' };
  
  const token = jwtConfig.createToken(user[0]);

  return { type: null, message: { token } };
}