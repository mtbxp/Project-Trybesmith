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