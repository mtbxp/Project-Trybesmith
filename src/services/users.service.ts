import { UserReq } from '../interfaces/users.interfaces';
import * as models from '../models/users.models';

export async function postUser(user: UserReq): Promise<number> {
  const insertId = await models.postUser(user);
  return insertId;
}

export async function getUsers() {
  return null;
}