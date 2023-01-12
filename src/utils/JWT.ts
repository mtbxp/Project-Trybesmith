import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { IUser } from '../interfaces/users.interface';

dotenv.config();

export default class JWT {
  private TOKEN_SECRET: string = process.env.JWT_SECRET || 'tokendefault';

  private jwtConfig: object = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };

  public generateToken = (payload: IUser): string => {
    const token = jwt.sign({ data: { payload } }, this.TOKEN_SECRET, this.jwtConfig);

    return token;
  };
}
