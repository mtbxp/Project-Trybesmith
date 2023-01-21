import jwt, { SignOptions } from 'jsonwebtoken';
import { JwtPayload } from '../types';

const createTokenJWT = (payload: JwtPayload) => {
  const config: SignOptions = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET as string, config);
  return token;
};

export default createTokenJWT;