import { Secret, sign, SignOptions } from 'jsonwebtoken';
import { IUser } from '../interfaces/IUser';

export default class JwtUtils {
  private TOKEN_SECRET: Secret;

  private jwtConfig: SignOptions;

  constructor() {
    this.TOKEN_SECRET = process.env.TOKEN_SECRET || 'mySecret' as Secret;
    
    this.jwtConfig = {
      expiresIn: '2d',
      algorithm: 'HS256',
    };
  }

  public generateJwtToken = (user: IUser) => {
    const payload = { id: user.id, username: user.username };
    return sign(payload, this.TOKEN_SECRET as string, this.jwtConfig);
  };
}