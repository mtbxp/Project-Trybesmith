import jwt from 'jsonwebtoken';

import { Users } from '../interfaces/interfaces';

const secret = process.env.JWT_SECRET as string;

export const encodeToken = async (user: Users) => {
  const token = jwt.sign({ data: user }, secret, { algorithm: 'HS256', expiresIn: '7d' });
  return token;
};

export default {
  encodeToken,
};