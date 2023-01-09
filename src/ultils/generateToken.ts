import * as jwt from 'jsonwebtoken';
import IUser from '../interface/IUser';
import UserModel from '../models/userModel';

export default class GenerateToken {
  userModel = new UserModel();

  jwt = jwt;

  async generateToken(user: IUser): Promise<string> {
    const genToken = this.jwt.sign({ user }, process.env.JWT_SECRET as string, {
      expiresIn: '1d',
      algorithm: 'HS256', 
    });

    return genToken;
  }
}