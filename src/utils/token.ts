import * as jwt from 'jsonwebtoken';
import { TUsers } from '../types/index';

require('dotenv/config');

const secret = process.env.JWT_SECRET || 'SecretToken';

const jwtConfig: object = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createToken = (data: TUsers) => jwt.sign({ data }, secret, jwtConfig);

export default createToken;