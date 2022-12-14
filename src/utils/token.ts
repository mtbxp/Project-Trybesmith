import Jwt from 'jsonwebtoken';
import { IUser } from '../interfaces/IUser';

export default class TokenService {
  public jwt = Jwt;

  generateToken(user:IUser) {
    const payload = { 
      id: user.id, 
      username: user.username, 
      vocation: user.vocation, 
      level: user.level, 
      password: user.password, 
    };
    return this
      .jwt.sign(
        payload, 
        process.env.JWT_SECRET as string, 
        { algorithm: 'HS256', expiresIn: '1d' },
      );
  }
}