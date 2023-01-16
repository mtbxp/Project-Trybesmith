// ./src/middkewares/tokenValidation.ts

import Jwt from 'jsonwebtoken';
import UserInterface from '../interfaces/UserInterface';

export default class TokenValidation {
  public jwt = Jwt;

  createToken(user: UserInterface) {
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
