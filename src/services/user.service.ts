import { generateToken } from '../auth/jwtValidations';
import { NewUser } from '../types/types';
import * as usersModel from '../models/user.model';

export async function createUser(newUser: NewUser) {
  const createdUser = await usersModel.createUser(newUser);
  const userToken = generateToken(createdUser);
  return { status: '', message: userToken };
}

export async function blabla() {
  console.log('blabla');
}