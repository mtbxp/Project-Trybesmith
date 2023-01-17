import { verify } from 'jsonwebtoken';
import User from '../interfaces/user.interface';

const secret = process.env.JWT_SECRET || 'Travis Scott';

class Decode {
  public static decode(token: string) {
    try {
      const user = verify(token, secret);

      return user as { user: User };
    } catch (error) {
      return undefined;
    }
  }
}

export default Decode;
