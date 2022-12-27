import jwt, { Secret } from 'jsonwebtoken';
import User from '../interfaces/users.interface';

export default class ConfigTokenUser {
  public secret;

  constructor(secret: Secret) {
    this.secret = secret;
  }

  public createTokenUser(user: User) {
    const token = jwt.sign(user, this.secret, { algorithm: 'HS256', expiresIn: '1d' });
    return token;
  }

  public validateTokenUser(token: string) {
    const vefifyToken = jwt.verify(token, this.secret);
    return vefifyToken;
  }
}