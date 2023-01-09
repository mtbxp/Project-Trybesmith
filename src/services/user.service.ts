import { tokenGeneration } from '../middlewares/authorization';
import { NewUser, UserLogin } from '../interfaces/types';
import * as modelUsers from '../models/user.model';

export async function addNewUser(newUser: NewUser) {
  const created = await modelUsers.addNewUser(newUser);
  const token = tokenGeneration(created);
  return { status: '', message: token };
}

export async function userLogin(user: UserLogin) {
  const usernameExists = await modelUsers.getUsername(user.username);
  if (!usernameExists || user.password !== usernameExists.password) {
    return { status: 'NOT_FOUND', message: 'Username or password invalid' };
  }

  const genToken = tokenGeneration({ id: usernameExists.id, username: usernameExists.username });
  return { status: '', message: genToken };
}
