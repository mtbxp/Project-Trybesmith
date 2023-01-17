import { sign } from 'jsonwebtoken';
import User from '../interfaces/user.interface';

const secret = process.env.JWT_SECRET || 'Travis Scott';

class Encode {
  public static encode(payload: User) {
    const token = sign(payload, secret, { algorithm: 'HS256', expiresIn: '7d' });

    return token;
  }
}

export default Encode;
