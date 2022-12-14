import jwt, { Secret } from 'jsonwebtoken';
import User from '../interfaces/user.interface';

const secret: Secret = process.env.JWT_SECRET || 'segredo';

export default class Jwt {
  public user;

  constructor(user: User) {
    this.user = user;
  }

  public createToken() {
    try {
      const token = jwt.sign(this.user, secret, { algorithm: 'HS256', expiresIn: '3d' });
      return token;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  // public async validateToken {

  // }
}