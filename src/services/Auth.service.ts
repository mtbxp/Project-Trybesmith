import * as jwt from 'jsonwebtoken';

export default class AuthService {
  constructor(private tokenModule = jwt) {}

  public async generate(id: number): Promise<string> {
    const token = this.tokenModule.sign(
      { id },
      String(process.env.JWT_SECRET),
      {
        expiresIn: '1d',
      },
    );
    return token;
  }
}
