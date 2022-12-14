import jwt from 'jsonwebtoken';
import { TUserIdName /* TAuthorization */ } from '../models/interfaces/index';

const secret = process.env.JWT_SECRET as string;

const createToken = (userData: TUserIdName): string => {
  const token = jwt.sign({ ...userData }, secret, { algorithm: 'HS256', expiresIn: '10d' });
  return token;
};

// const verifyToken = (authorization: TAuthorization) => {
//   try {
//     const payload = jwt.verify(authorization, secret);
//     return payload;
//   } catch (error) {
//     return { isError: true, error };
//   }
// };

export default { createToken /* verifyToken */ };