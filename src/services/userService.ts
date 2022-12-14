import jwt from 'jsonwebtoken';
import create from '../models/userModel';
import { UserDetail } from '../interfaces';
import { secret, config } from '../middlewares/jwtConfig';

export default async function createUser(user: UserDetail) {
  const payload = await create(user);
  const token = jwt.sign({ payload }, secret, config);
  const data = { token };
  return { status: 201, data };
}