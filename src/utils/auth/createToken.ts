import * as jwt from 'jsonwebtoken';
import { ILogin, IUser } from '../../interfaces/users';

require('dotenv/config');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const config: object = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createToken = (data: IUser | ILogin | IUser[]) => jwt.sign({ data }, secret, config);

export default createToken;