import { sign } from 'jsonwebtoken';
import { User } from '../types/User';

const auth = { 
  secret: 'secret',
  expires: '1h',
};

export default class JWT {
  public secret;

  constructor() {
    this.secret = auth.secret;
  }

  public generateToken(user: User) {
    const token = sign({ data: user }, this.secret, {
      algorithm: 'HS256',
      expiresIn: '1h',
    });
    return token;
  }
}
