// import { Product } from '../interfaces/interfaces';
import * as usersModel from '../models/usersModel';
import { User } from '../interfaces/interfaces';
import * as tkn from '../auth/validateJWT';

async function createUser(user: User) {
  const result = await usersModel.createUser(user);
  const token = tkn.createToken(result.id);
  return token;
}

async function login(username: string, password: string) {
  const result = await usersModel.login(username, password);
  console.log(result);
  if (result) {
    const token = tkn.createToken(result.id);
    return token;
  }
  return result;
}

export { 
  createUser,
  login,
};