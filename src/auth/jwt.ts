import jwt, { Secret } from 'jsonwebtoken';
import { User } from '../types';

export default class JWT {
  private secret;

  constructor(secret: Secret) {
    this.secret = secret;
  }

  public createToken(payload: User) {
    try {
      const token = jwt.sign(payload, this.secret, { algorithm: 'HS256' });
      return token;
    } catch (error) {
      return console.log(error);
    }
  }
}