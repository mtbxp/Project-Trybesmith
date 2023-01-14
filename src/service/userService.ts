import jwt from 'jsonwebtoken';
import { UserCredential } from '../interfaces';
import { secret, config } from '../middlewares/jwtConfig';
import create from '../models/userModel';

export default async function createUser(user: UserCredential) {
  const payload = await create(user);
  const token = jwt.sign({ payload }, secret, config);
  const data = { token };
  return { status: 201, data };
}
