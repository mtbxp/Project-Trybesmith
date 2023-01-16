import { sign } from 'jsonwebtoken';
import { Payload, UserPublic } from '../interfaces/User';

const secretJWT = 'são3hdaManhãeEuAqui';

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '1h',
} as object;

const generateToken = (user: Payload | UserPublic) => {
  const token = sign(user, secretJWT, jwtConfig);
  return token;
};

export default {
  generateToken,
};