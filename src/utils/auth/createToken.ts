import * as jwt from 'jsonwebtoken';
import { IUser } from '../../interfaces/users';

require('dotenv/config');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const jwtConfig: object = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createToken = (data: IUser) => jwt.sign({ data }, secret, jwtConfig);

export default createToken;