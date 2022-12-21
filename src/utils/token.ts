import * as jwt from 'jsonwebtoken';
import { TUsers, TLogin } from '../types/index';

require('dotenv/config');

const secret = process.env.JWT_SECRET || 'SecretToken';

const jwtConfig: object = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createToken = (data: TUsers | TLogin) => jwt.sign({ data }, secret, jwtConfig);

export default createToken;