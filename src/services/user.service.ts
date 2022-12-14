import jwt from 'jsonwebtoken';
import { UserCredentials } from '../interfaces/user.interface';
import { secret, config } from '../middlewares/jwtConfig';
import * as userModel from '../models/user.model';

export async function createNewUser(user: UserCredentials) {
  const payload = await userModel.create(user);
  const token = jwt.sign({ payload }, secret, config);
  // console.log(token);
  return token;
}